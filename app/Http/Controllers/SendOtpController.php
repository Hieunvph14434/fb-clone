<?php

namespace App\Http\Controllers;

use App\Mail\MyTestEmail;
use App\Mail\OtpMail;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class SendOtpController extends Controller
{

    public function register(Request $request)
    {
        // dd($request);
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => fake()->name(),
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Tạo mã OTP và thời gian hết hạn
        $otp = rand(100000, 999999); // Tạo mã OTP 6 số

        // Lưu OTP vào bảng user_otps với relationship
        $user->otps()->create([
            'otp' => $otp,
            'otp_expires_at' => Carbon::now()->addMinutes(1),
        ]);

        // Gửi email chứa mã OTP
        Mail::to($user->email)->send(new OtpMail($otp, $user->email));

        return response()->json(['message' => 'Đăng ký thành công! Vui lòng kiểm tra email để xác thực.']);
    }
    
    public function verifyOtp(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response([
                'message' => 'User not found!'
            ], 400);
        }
        $otp = $user->otps ?? null;
        if (isset($otp) && (Carbon::now() > Carbon::create($otp->otp_expires_at) || $otp->otp !== $request->otp)) {
            return response([
                'message' => 'OTP code is incorrect or expired!'
            ], 400);
        }
        $user->update([
            'email_verified_at' => Carbon::now()
        ]);
        $user->email_verified_at = Carbon::now();
        $user->save();
        $user->otps->delete();
        return response([
            'message' => 'OTP confirmation success!'
        ], 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Tài khoản hoặc mật khẩu không chính xác!'], 401);
        }

        // Đăng nhập thành công, trả về token hoặc thông tin người dùng
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);
    }

    public function getuser($id)
    {
        dd($id);
    }
}
