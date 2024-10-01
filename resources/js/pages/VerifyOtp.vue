<template>
    <div>
      <h1>Xác thực OTP</h1>
      <form @submit.prevent="submitOtp">
        <label for="otp">Mã OTP:</label>
        <input type="text" v-model="otp" required />
  
        <button type="submit">Xác thực</button>
      </form>
  
      <p v-if="message" :class="{'success': isSuccess, 'error': !isSuccess}">
        {{ message }}
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
import { SendOtpService } from '../services/send-otp.service';
  
  export default {
    data() {
      return {
        otp: '',      // Chứa mã OTP người dùng nhập
        email: '',    // Chứa email nhận từ API hoặc thông qua URL query
        message: '',  // Thông báo xác thực
        isSuccess: false, // Biến để kiểm tra kết quả xác thực
      };
    },
    methods: {
      async submitOtp() {
        let params = new URLSearchParams(document.location.search);
        let email = params.get("email");
        try {
          const response = await SendOtpService.verifyOtp({
            'email': email,
            'otp': this.otp
          }); 
          this.message = response.data.message;
          this.isSuccess = true; // Nếu xác thực thành công
        } catch (error) {
          this.message = error.response.data.message || 'Đã có lỗi xảy ra.';
          this.isSuccess = false; // Nếu xác thực thất bại
        }
      },
    },
    mounted() {
      // Lấy email từ query parameter nếu có
      const urlParams = new URLSearchParams(window.location.search);
      this.email = urlParams.get('email') || '';
    },
  };
  </script>
  
  <style>
  .success {
    color: green;
  }
  
  .error {
    color: red;
  }
  </style>
  