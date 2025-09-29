<template>
  <nav class="navbar">
    <ul>
     <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/comments">Comments</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style scoped>
.navbar {
  background-color: #5a2d0c; 
  padding: 2rem 0;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center; 
  gap: 2rem; 
  margin: 0;
  padding: 0;
  
}

.navbar li {
  display: inline;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #ffd28a; 
}
</style>
