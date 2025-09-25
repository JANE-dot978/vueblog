<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
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
