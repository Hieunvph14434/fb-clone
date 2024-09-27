<template>
    <div class="auth-container">
      <h1>Facebook</h1>
      <form @submit.prevent="handleRegister">
        <input
          type="text"
          v-model="name"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        <router-link to="/login">Already have an account? Log In</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      handleRegister() {
        // Handle registration logic here
        console.log('Registering with', this.name, this.email, this.password);
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
    background-color: #42b72a;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #36a420;
  }
  </style>
  