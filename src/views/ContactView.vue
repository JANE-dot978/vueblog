<!-- <template>
  <div class="contact">
    <!-- Hero Section -->
    <header class="contact-hero">
      <div class="overlay"></div>
      <div class="contact-hero-content">
        <h1>📩 Contact <span>Book Haven</span></h1>
        <p>
          Have questions, suggestions, or just want to say hello?  
          We’d love to hear from you!
        </p>
      </div>
    </header>

    <!-- Contact Info -->
    <section class="contact-info">
      <h2>📍 Get in Touch</h2>
      <div class="info-cards">
        <div class="info-card">
          <h3>📧 Email</h3>
          <p>support@bookhaven.com</p>
        </div>
        <div class="info-card">
          <h3>📱 Phone</h3>
          <p>+254 712 345 678</p>
        </div>
        <div class="info-card">
          <h3>🏢 Address</h3>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-form-section">
      <h2>✍️ Send Us a Message</h2>
      <form class="contact-form" @submit.prevent="submitForm">
        <input type="text" v-model="form.name" placeholder="Your Name" required />
        <input type="email" v-model="form.email" placeholder="Your Email" required />
        <textarea v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(
        `Thank you, ${this.form.name}! Your message has been sent successfully.`
      );
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
/* ---------- HERO ---------- */
.contact-hero {
  position: relative;
  height: 60vh;
  background: url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80")
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
.contact-hero-content {
  position: relative;
  z-index: 1;
  padding: 0 20px;
}
.contact-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}
.contact-hero h1 span {
  color: #ffdd99;
}
.contact-hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* ---------- INFO ---------- */
.contact-info {
  padding: 60px 20px;
  text-align: center;
}
.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #5a2d0c;
}
.info-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.info-card {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  width: 260px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}
.info-card h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #8b4513;
}
.info-card p {
  font-size: 1rem;
  color: #555;
}

/* ---------- FORM ---------- */
.contact-form-section {
  background: #fffaf5;
  padding: 70px 20px;
  text-align: center;
}
.contact-form-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #5a2d0c;
}
.contact-form {
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.contact-form input,
.contact-form textarea {
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #8b4513;
}
.submit-btn {
  background: #8b4513;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}
.submit-btn:hover {
  background: #5a2d0c;
}
</style> -->
