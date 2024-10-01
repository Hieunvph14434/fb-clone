<!DOCTYPE html>
<html>
<head>
    <title>Xác thực tài khoản</title>
</head>
<body>
    <h1>Xác thực tài khoản</h1>
    <p>Mã OTP của bạn là: {{ $otp }}</p>
    <p>Vui lòng truy cập vào đường link dưới đây để xác thực:</p>
    <a href="{{ $url }}">{{ $url }}</a>
</body>
</html>
