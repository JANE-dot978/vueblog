<!-- <template>
  <div class="about">
    <!-- Hero Section -->
    <header class="about-hero">
      <div class="overlay"></div>
      <div class="about-hero-content">
        <h1>About <span>Book Haven</span></h1>
        <p>
          Your trusted digital library for self-help, psychology, fiction, romance, and more.
        </p>
      </div>
    </header>

    <!-- Our Story Section -->
    <section class="our-story">
      <h2>📖 Our Story</h2>
      <p>
        Book Haven was born from a simple idea: 
        <strong>books change lives.</strong>  
        We wanted to create a cozy online space where readers can dive into
        thought-provoking ideas, explore different genres, and connect with
        stories that matter. From life-changing self-help books to deep dives
        into psychology and dark psychology — our mission is to bring you
        knowledge that inspires growth and transformation.
      </p>
    </section>

    <!-- Mission / Values Section -->
    <section class="mission">
      <h2>🌟 Our Mission</h2>
      <div class="mission-cards">
        <div class="mission-card">
          <h3>📚 Curated Knowledge</h3>
          <p>
            We carefully select and summarize books that are worth your time,
            making it easy to discover powerful ideas.
          </p>
        </div>
        <div class="mission-card">
          <h3>💡 Inspire Growth</h3>
          <p>
            Our goal is to empower you with tools, wisdom, and fresh
            perspectives that lead to personal and professional growth.
          </p>
        </div>
        <div class="mission-card">
          <h3>🌍 Build a Community</h3>
          <p>
            Reading is better when shared. We aim to create a global hub for
            book lovers and curious minds.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2>✨ Ready to Explore?</h2>
      <p>
        Dive into categories, discover life-changing books, and let your next
        read find you.
      </p>
      <!-- Navigation works with your router -->
      <router-link to="/" class="cta-btn">Start Reading</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
/* ---------- HERO ---------- */
.about-hero {
  position: relative;
  height: 70vh;
  background: url("https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80")
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.about-hero-content {
  position: relative;
  z-index: 1;
  padding: 0 20px;
}
.about-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}
.about-hero h1 span {
  color: #ffdd99;
}
.about-hero p {
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto;
}

/* ---------- OUR STORY ---------- */
.our-story {
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
}
.our-story h2 {
  font-size: 2.2rem;
  color: #5a2d0c;
  margin-bottom: 20px;
}
.our-story p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #444;
}

/* ---------- MISSION ---------- */
.mission {
  background: #fffaf5;
  padding: 70px 20px;
  text-align: center;
}
.mission h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #5a2d0c;
}
.mission-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}
.mission-card {
  background: white;
  padding: 25px 20px;
  width: 280px;
  border-radius: 14px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.mission-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
}
.mission-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #8b4513;
}
.mission-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* ---------- CTA ---------- */
.cta {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
}
.cta h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}
.cta p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}
.cta-btn {
  background: white;
  color: #8b4513;
  padding: 14px 30px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}
.cta-btn:hover {
  background: #ffdd99;
  color: #5a2d0c;
}
</style> -->
