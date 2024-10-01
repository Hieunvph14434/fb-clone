<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\SendOtpController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('login', [SendOtpController::class, 'login'])->name('api.login');
Route::post('send-otp', [SendOtpController::class, 'register'])->name('api.send-otp');
Route::post('verify-otp', [SendOtpController::class, 'verifyOtp'])->name('api.verify-otp');
Route::middleware(['auth:sanctum'])->get('/get-user/{id}', [SendOtpController::class, 'getUser'])->name('api.get-user');