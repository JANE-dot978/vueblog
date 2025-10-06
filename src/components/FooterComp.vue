<template>
  <footer class="footer">
    <p>&copy; 2025 My Bookstore. All Rights Reserved.</p>
    <nav class="footer-links">
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Privacy Policy</a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background: #222;
  color: #eee;
  padding: 15px;
  text-align: center;
  border-top: 2px solid #444;
  margin-top: auto; /* ✅ Sticks footer at bottom */
}

.footer-links {
  margin-top: 8px;
}

.footer-links a {
  margin: 0 10px;
  color: #ddd;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
  color: #fff;
}
</style>
