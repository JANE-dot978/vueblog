<template>
  <div class="home">
    <!-- Hero / Intro Section -->
    <header class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="title">📚 Book Haven</h1>
        <p class="subtitle">
          Discover life-changing books, explore by genre, and find your next unforgettable read.
        </p>
        <button class="cta-btn">✨ Start Exploring</button>
      </div>
    </header>

    <!-- Highlight Section -->
    <section class="highlight">
      <h2>Why Readers Love Us ❤️</h2>
      <div class="cards">
        <div class="card">
          <h3>🌍 Explore Genres</h3>
          <p>Self-help, psychology, romance, fiction, and more — all in one place.</p>
        </div>
        <div class="card">
          <h3>📖 Deep Summaries</h3>
          <p>Get bite-sized insights from bestsellers and timeless classics.</p>
        </div>
        <div class="card">
          <h3>💡 Inspiration</h3>
          <p>Find stories that challenge your mind and spark new ideas.</p>
        </div>
      </div>
    </section>

    <!-- Main functionality (from MainComp) -->
    <MainComp />
  </div>
</template>

<script>
import MainComp from "../components/MainComp.vue";

export default {
  name: "HomeView",
  components: {
    MainComp,
  },
};
</script>

<style scoped>
/* ---------- HERO SECTION ---------- */
.hero {
  position: relative;
  height: 85vh;
  background: url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")
    center/cover no-repeat; /* 👈 Books background from Unsplash */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.55); /* dark overlay for readability */
  z-index: 0;
}
.hero-content {
  position: relative;
  z-index: 1;
  animation: fadeInUp 1.2s ease-in-out;
  color: white;
}
.title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 20px;
}
.subtitle {
  font-size: 1.4rem;
  margin-bottom: 30px;
  line-height: 1.7;
}
.cta-btn {
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  padding: 16px 36px;
  font-size: 1.2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
.cta-btn:hover {
  background: linear-gradient(135deg, #5a2d0c, #7b3f1b);
  transform: scale(1.07) translateY(-4px);
}

/* ---------- HIGHLIGHT SECTION ---------- */
.highlight {
  padding: 70px 20px;
  text-align: center;
  background: #fffaf5;
}
.highlight h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #5a2d0c;
  font-weight: bold;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
.card {
  background: white;
  width: 280px;
  padding: 30px 20px;
  border-radius: 14px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.15);
}
.card h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #8b4513;
}
.card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* ---------- ANIMATIONS ---------- */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
