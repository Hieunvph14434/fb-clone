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
      <p>
        <router-link to="/register">Create New Account</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // Handle login logic here
        console.log('Logging in with', this.email, this.password);
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
  