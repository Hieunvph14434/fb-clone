<template>
    <div id="recaptcha-container">
      <input type="text" v-model="phoneNumber" placeholder="Enter phone number" />
      <button @click="sendOtp">Send OTP</button>
  
      <div v-if="otpSent">
        <input type="text" v-model="otpCode" placeholder="Enter OTP" />
        <button @click="verifyOtp">Verify OTP</button>
      </div>
      <p v-if="message">{{ message }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { auth } from './firebase'; // Import Firebase auth
  
  export default {
    data() {
      return {
        phoneNumber: "",
        otpCode: "",
        otpSent: false,
        confirmationResult: null,
        message: "",
        error: ""
      };
    },
    methods: {
      async sendOtp() {
        const phoneNumber = `+84${this.phoneNumber}`; // Đảm bảo số điện thoại đúng định dạng quốc tế
        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  
        try {
          this.confirmationResult = await auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
          this.otpSent = true;
          this.message = "OTP sent successfully";
          this.error = "";
        } catch (error) {
          this.error = error.message;
          this.message = "";
        }
      },
      async verifyOtp() {
        try {
          await this.confirmationResult.confirm(this.otpCode);
          this.message = "OTP verified successfully";
          this.error = "";
        } catch (error) {
          this.error = "Invalid OTP";
          this.message = "";
        }
      }
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  