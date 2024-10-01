<template>
  <div>
    <h1>Đăng ký</h1>
    <form @submit.prevent="register">
      <div>
        <label>Email:</label>
        <input v-model="email" type="email"  />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="password" type="password"  />
      </div>
      <button type="submit">Đăng ký</button>
      <div v-if="message">{{ message }}</div>
    </form>
  </div>
</template>

<script>
import { SendOtpService } from '../services/send-otp.service';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await SendOtpService.sendOtp({
          'email': this.email,
          'password': this.password
        });
        console.log(response);
      } catch (error) {
        this.message = error.response.data.message;
        console.log(this.message);
      }
    }
  }
};
</script>
