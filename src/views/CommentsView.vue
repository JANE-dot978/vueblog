<!-- <template>
  <div class="comments-page">
    <header class="comments-hero">
      <h1>💬 User Comments</h1>
      <p>Explore reader thoughts from around the world.</p>
    </header>

    <section class="comments-list">
      <div 
        v-for="comment in comments" 
        :key="comment.id" 
        class="comment-card"
      >
        <h3>{{ comment.name }}</h3>
        <p class="email">{{ comment.email }}</p>
        <p class="message">"{{ comment.body }}"</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CommentsView",
  data() {
    return {
      comments: [],
    
    }
  },
mounted() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response)=> response.json())
    .then(data => this.comments = data)
},
}
</script>

<style scoped>
.comments-hero {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #fdf3e7, #f9e4d2);
  border-bottom: 2px solid #eee;
}
.comments-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #5a2d0c;
}
.comments-hero p {
  font-size: 1.2rem;
  color: #444;
}

.comments-list {
  max-width: 900px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.comment-card {
  background: #fffaf5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: left;
}
.comment-card h3 {
  margin: 0;
  color: #5a2d0c;
}
.comment-card .email {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
}
.comment-card .message {
  font-size: 1.05rem;
  color: #333;
  font-style: italic;
  line-height: 1.5;
}
</style> -->
<template>
  <div class="products">
    <h1 class="page-title">🛒 Fake Store Products</h1>

    <!-- Show loading (cool dashed circular spinner) -->
    <div v-if="loading" class="loading" role="status" aria-live="polite">
      <div class="spinner" aria-hidden="true"></div>
      <div class="loading-text">⏳ Loading products...</div>
    </div>

    <!-- Show error -->
    <div v-if="error" class="error">
      ❌ {{ error }}
      <button @click="fetchProducts" class="retry-btn">Retry</button>
    </div>

    <!-- Show products only when loaded -->
    <div v-if="!loading && !error" class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-img" />
        <h2>{{ product.title }}</h2>
        <p class="desc">{{ product.description.substring(0, 100) }}...</p>
        <p class="price">💵 ${{ product.price }}</p>
        <p class="category">📂 {{ product.category }}</p>
        <p class="rating">⭐ {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  data() {
    return {
      products: [],
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error(`Failed to fetch products. Status: ${res.status}`);
        }

        const data = await res.json();
        this.products = data;
      } catch (err) {
        this.error = "⚠️ Could not load products. Please try again.";
        console.error("Error fetching products:", err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* page title */
.page-title {
  text-align: center;
  margin: 30px 0;
  font-size: 2rem;
  color: #2c3e50;
}


.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 24px 0;
  flex-direction: column;
}


.spinner {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;

  
  border: 6px dashed rgba(139, 69, 19, 0.85); /* warm brown dash color */
  
  background: conic-gradient(from 0deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02));
  display: inline-block;
  animation: spin 1.2s linear infinite;
  
  box-shadow: 0 6px 18px rgba(0,0,0,0.12), inset 0 2px 6px rgba(255,255,255,0.02);
  transform-origin: center;
}


.spinner::after {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
}


@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* loading text styling */
.loading-text {
  font-size: 1rem;
  color: #5a2d0c;
  font-weight: 600;
}

/* ---------- ERROR & RETRY ---------- */
.error {
  text-align: center;
  font-size: 1.1rem;
  color: #e74c3c;
  margin: 20px 0;
}

.retry-btn {
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  background: #3498db;
  color: #fff;
  cursor: pointer;
}

.retry-btn:hover {
  background: #217dbb;
}

/* ---------- PRODUCT GRID (unchanged) ---------- */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-img {
  max-width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
}

.desc {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 8px;
}

.price {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #27ae60;
}

.category {
  font-size: 0.85rem;
  color: #888;
}

.rating {
  font-size: 0.85rem;
  color: #f39c12;
}
</style>
