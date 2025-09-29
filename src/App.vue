<template>
  <NavbarComp />
  <!-- Router will inject the page content -->
  <router-view />
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";

export default {
  components: {
    NavbarComp,
  },
};
</script>
