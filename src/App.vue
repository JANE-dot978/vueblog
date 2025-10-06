<template>
  <div :class="['app-container', theme]">
    <!-- Navbar -->
    <NavbarComp />

    <!-- Theme Switcher -->
    <div class="theme-switcher">
      <button @click="setTheme('light')">🌞 Light</button>
      <button @click="setTheme('dark')">🌙 Dark</button>
      <button @click="setTheme('sepia')">📖 Blue</button>
    </div>

    <!-- Page Content -->
    <router-view />

    <!-- ✅ Global Footer -->
    <AppFooter />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
import AppFooter from "./components/FooterComp.vue"; // ✅ Import footer

export default {
  components: {
    NavbarComp,
    AppFooter, // ✅ Register footer
  },
  data() {
    return {
      theme: localStorage.getItem("theme") || "light",
    };
  },
  methods: {
    setTheme(newTheme) {
      this.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
};
</script>

<style>
/* Default styling */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* ✅ Makes footer stick at bottom */
  justify-content: space-between;
  transition: background 0.3s, color 0.3s;
}

/* Light Mode */
.app-container.light {
  background: #fdfdfd;
  color: #222;
}

.app-container.dark {
  background: #1e1e1e;
  color: #f1f1f1;
}

.app-container.sepia {
  background: blue;
  color: #fff;
}

/* Theme Switcher Styling */
.theme-switcher {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.theme-switcher button {
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.theme-switcher button:hover {
  transform: scale(1.05);
}
</style>
