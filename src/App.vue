<template>
  <NavbarComp />

  <!-- Hero / Header Section -->
  <div class="header">
    <h1>{{ title }}</h1>
    <p>
      {{ showFull ? description : description.substring(0, 200) + "..." }}
    </p>
    <button @click="toggleReadmore" class="readmore-btn">
      {{ showFull ? "Show less" : "Read more..." }}
    </button>
  </div>

  <!-- Main Book Section -->
  <div>
    <MainComp />
  </div>
</template>

<script>
import MainComp from "./components/MainComp.vue";
import NavbarComp from "./components/NavbarComp.vue";

export default {
  components: {
    NavbarComp,
    MainComp,
  },
  data() {
    return {
      title: "📚 Welcome to Book Haven",
      description:
        "Book Haven is your digital library for discovering thought-provoking and life-changing books. From powerful self-help guides like *Atomic Habits* and *Man's Search for Meaning*, to deep explorations in psychology and dark psychology, to timeless fiction and heartwarming romance we bring you insightful summaries and discussions that help you choose your next great read. Explore by genre, dive deeper into each book, and find the stories that inspire you.",
      showFull: false,
    };
  },
  methods: {
    toggleReadmore() {
      this.showFull = !this.showFull;
    },
  },
};
</script>

<style>
.header {
  background: linear-gradient(135deg, #fdf3e7, #f9e4d2);
  text-align: center;
  padding: 60px 20px;
  border-bottom: 2px solid #eee;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #5a2d0c;
  font-family: "Segoe UI", sans-serif;
}

.header p {
  font-size: 1.2rem;
  color: #444;
  max-width: 800px;
  margin: 0 auto 20px;
  line-height: 1.7;
}

.readmore-btn {
  background: #8b4513;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 1rem;
  cursor: pointer;
}

.readmore-btn:hover {
  background: #5a2d0c;
}
</style>
