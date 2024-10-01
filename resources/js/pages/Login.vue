<template>
    <div class="auth-container">
      <h1>Facebook</h1>
      <form @submit.prevent="handleLogin">
        <input
          type="email"
          v-model="email"
          placeholder="Email or Phone Number"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p v-if="message" :class="{'success': isSuccess, 'error': !isSuccess}">
        {{ message }}
      </p>
      <p>
        <router-link to="/register">Create New Account</router-link>
      </p>
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
      async handleLogin() {
        // const res = await SendOtpService.getUser(1);
        // console.log(res);
        try {
          const response = await SendOtpService.login({
            'email': this.email,
            'password': this.password,
          });
          console.log(response);
          this.message = response.data.message;
        }catch(err) {
          console.log(err);
          
          this.message = err.message
        }
        
        // Handle login logic here
        // console.log('Logging in with', this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4267b2;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #365e8a;
  }
  </style>
  