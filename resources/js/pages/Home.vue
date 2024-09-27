<template>
    <div class="home-container">
      <header class="header">
        <div class="logo">Facebook</div>
        <nav class="navbar">
          <input
            type="text"
            class="search-input"
            placeholder="Search Facebook"
          />
          <ul class="nav-links">
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/friends">Friends</router-link></li>
            <li><button @click="handleLogout">Logout</button></li>
          </ul>
        </nav>
      </header>
  
      <main class="main-content">
        <div class="feed-container">
          <div class="post-form">
            <textarea
              v-model="postContent"
              placeholder="What's on your mind?"
              rows="3"
            ></textarea>
            <button @click="handlePost">Post</button>
          </div>
          <div class="posts">
            <div v-for="(post, index) in posts" :key="index" class="post">
              <div class="post-header">
                <strong>{{ post.user }}</strong>
                <span class="post-time">{{ post.time }}</span>
              </div>
              <div class="post-content">{{ post.content }}</div>
            </div>
          </div>
        </div>
        <aside class="sidebar">
          <h3>Friend Suggestions</h3>
          <ul class="friend-suggestions">
            <li v-for="(friend, index) in friendSuggestions" :key="index">
              <span>{{ friend.name }}</span>
              <button @click="addFriend(friend)">Add Friend</button>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postContent: '',
        posts: [],
        friendSuggestions: [
          { name: 'John Doe' },
          { name: 'Jane Smith' },
          { name: 'Alice Johnson' },
        ],
      };
    },
    methods: {
      handlePost() {
        if (this.postContent.trim() === '') return;
  
        this.posts.push({
          user: 'You',
          content: this.postContent,
          time: 'Just now',
        });
  
        this.postContent = '';
      },
      handleLogout() {
        // Handle logout logic here
        console.log('Logging out...');
        this.$router.push('/login');
      },
      addFriend(friend) {
        console.log(`Adding friend: ${friend.name}`);
        // Implement friend addition logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #4267b2;
    color: white;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .navbar {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    padding: 5px;
    margin-right: 20px;
    border-radius: 5px;
    border: none;
  }
  
  .nav-links {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin: 0 10px;
  }
  
  button {
    background-color: #4267b2;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #365e8a;
  }
  
  .main-content {
    display: flex;
    margin: 20px 0;
  }
  
  .feed-container {
    flex: 3;
    padding: 20px;
  }
  
  .post-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
  }
  
  .posts {
    margin-top: 20px;
  }
  
  .post {
    background-color: #f0f2f5;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .post-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .post-time {
    font-size: 12px;
    color: #999;
  }
  
  .sidebar {
    flex: 1;
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 8px;
    margin-left: 20px;
  }
  
  .friend-suggestions {
    list-style-type: none;
    padding: 0;
  }
  
  .friend-suggestions li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .friend-suggestions button {
    background-color: #42b72a;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }
  
  .friend-suggestions button:hover {
    background-color: #36a420;
  }
  </style>
  