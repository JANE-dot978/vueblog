<template>
  <div class="blogs">
    
    <div v-if="view === 'landing'" class="landing">
      <div class="explore-card">
        <h1>📚 Welcome to Book Haven</h1>
        <p>Discover Self-Help, Psychology, Fiction, Romance, and more.</p>
        <button @click="view = 'categories'" class="explore-btn">Explore</button>
      </div>
    </div>

    
    <div v-else-if="view === 'categories'" class="categories">
      <h1 class="heading">Choose a Genre</h1>
      <div class="genre-container">
        <div 
          v-for="(genre, index) in genres" 
          :key="index" 
          class="genre-card"
          @click="selectGenre(genre)"
        >
          <h2>{{ genre }}</h2>
        </div>
      </div>
      <button @click="view = 'landing'" class="back-btn">⬅ Back</button>
    </div>

    
    <div v-else-if="view === 'blogs'" class="blog-section">
      <h1 class="heading">{{ selectedGenre }} Books</h1>
      <div class="blog-container">
        <div 
          v-for="(blog, index) in filteredBlogs" 
          :key="index" 
          class="blog-card"
        >
          <h2 class="book-title">{{ blog.title }}</h2>
          <p class="category">Category: {{ blog.category }}</p>
          <p class="book-description">
            {{ blog.showFull ? blog.description : blog.description.substring(0, 180) + '...' }}
          </p>
          <button @click="toggleReadmore(blog)" class="readmore-btn">
            {{ blog.showFull ? 'Show less' : 'Read more...' }}
          </button>
        </div>
      </div>
      <button @click="view = 'categories'" class="back-btn">⬅ Back to Genres</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComp",
  data() {
    return {
      view: "landing", 
      selectedGenre: "",
      genres: ["Self-Help", "Psychology", "Dark Psychology", "Fiction", "Romance"],
      blogs: [
        
        {
          title: "Atomic Habits — James Clear",
          category: "Self-Help",
          description:
            "Atomic Habits is about how small changes lead to remarkable results. James Clear explains identity-based habits, environment design, and the compounding power of consistency. Through practical strategies, the book shows how to break bad habits and build positive ones that shape identity.",
          showFull: false,
        },
        {
          title: "How to Win Friends & Influence People — Dale Carnegie",
          category: "Self-Help",
          description:
            "Carnegie’s timeless guide offers practical techniques on how to handle people, win them to your way of thinking, and change people without arousing resentment. It focuses on empathy, listening, and sincere appreciation.",
          showFull: false,
        },
        {
          title: "The Subtle Art of Not Giving a F*ck — Mark Manson",
          category: "Self-Help",
          description:
            "A counterintuitive approach to living a good life by focusing on what truly matters. Manson encourages embracing limitations and finding meaning in responsibility, rather than endless positivity.",
          showFull: false,
        },
        {
          title: "Man’s Search for Meaning — Viktor Frankl",
          category: "Self-Help",
          description:
            "Psychiatrist Viktor Frankl recounts his experience in Nazi concentration camps and describes logotherapy — the belief that life’s meaning can be found through suffering, love, and purpose.",
          showFull: false,
        },

        // ✅ Psychology
        {
          title: "Influence: The Psychology of Persuasion — Robert Cialdini",
          category: "Psychology",
          description:
            "Cialdini introduces six principles of influence: reciprocity, commitment, social proof, authority, liking, and scarcity. These principles explain why people say ‘yes’ and how persuasion works in real life.",
          showFull: false,
        },
        {
          title: "Surrounded by Idiots — Thomas Erikson",
          category: "Psychology",
          description:
            "A practical guide to understanding human behavior through four personality types (Red, Yellow, Green, Blue). Helps improve communication and reduce conflict in work and personal life.",
          showFull: false,
        },
        {
          title: "Thinking, Fast and Slow — Daniel Kahneman",
          category: "Psychology",
          description:
            "Kahneman explains the two systems of thinking: fast, intuitive decision-making and slow, deliberate reasoning. The book explores biases, errors, and how to make better choices.",
          showFull: false,
        },

        
        {
          title: "The 48 Laws of Power — Robert Greene",
          category: "Dark Psychology",
          description:
            "A manual of power dynamics, offering 48 rules on how to gain, defend, and use power. Sometimes controversial, it dives into manipulation, deception, and control in history and everyday life.",
          showFull: false,
        },
        {
          title: "Dark Psychology — Understanding Manipulation",
          category: "Dark Psychology",
          description:
            "Covers techniques of manipulation, gaslighting, deception, and coercion. It’s about recognizing these behaviors and protecting yourself against toxic individuals.",
          showFull: false,
        },

        {
          title: "The Great Gatsby — F. Scott Fitzgerald",
          category: "Fiction",
          description:
            "The story of Jay Gatsby, a wealthy man obsessed with rekindling a romance with Daisy Buchanan. It critiques the American Dream and the decadence of the Jazz Age.",
          showFull: false,
        },
        {
          title: "1984 — George Orwell",
          category: "Fiction",
          description:
            "A dystopian novel about a totalitarian regime led by Big Brother. Explores surveillance, propaganda, and the dangers of absolute power.",
          showFull: false,
        },

        
        {
          title: "Pride and Prejudice — Jane Austen",
          category: "Romance",
          description:
            "A timeless romance between Elizabeth Bennet and Mr. Darcy. Themes of pride, prejudice, class, and love make this one of literature’s greatest novels.",
          showFull: false,
        },
        {
          title: "It Ends With Us — Colleen Hoover",
          category: "Romance",
          description:
            "Lily Bloom navigates love, loss, and abuse while finding strength to break free from toxic relationships. A heartbreaking but empowering story.",
          showFull: false,
        },
        {
          title: "It Starts With Us — Colleen Hoover",
          category: "Romance",
          description:
            "A sequel that continues Lily’s journey, offering healing, closure, and the courage to pursue healthy love.",
          showFull: false,
        },
        {
          title: "Twisted Love — Ana Huang",
          category: "Romance",
          description:
            "A dark romance where opposites attract — a brooding hero and a warm-hearted heroine. The story explores love, secrets, and redemption.",
          showFull: false,
        },
        {
          title: "Nearly All Men in Lagos Are Mad — Damilare Kuku",
          category: "Romance",
          description:
            "A collection of short stories exploring love and relationships in Nigeria. It blends humor, heartbreak, and reality into sharp storytelling.",
          showFull: false,
        },
      ],
    };
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => blog.category === this.selectedGenre);
    },
  },
  methods: {
    toggleReadmore(blog) {
      blog.showFull = !blog.showFull;
    },
    selectGenre(genre) {
      this.selectedGenre = genre;
      this.view = "blogs";
    },
  },
};
</script>

<style scoped>
.blogs {
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  padding: 40px 20px;
}


.explore-card {
  background: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
  width: 500px;
  margin: 100px auto;
}
.explore-card h1 {
  font-size: 2rem;
  margin-bottom: 15px;
}
.explore-btn {
  margin-top: 20px;
  background: #8b4513;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
}
.explore-btn:hover {
  background: #5a2d0c;
}


.genre-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
}
.genre-card {
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  width: 220px;
  padding: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.genre-card:hover {
  transform: translateY(-6px);
}
.genre-card h2 {
  font-size: 1.3rem;
  color: #5a2d0c;
}


.blog-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
}
.blog-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
  width: 320px;
  padding: 20px;
  text-align: left;
}
.book-title {
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: #5a2d0c;
}
.category {
  font-size: 1rem;
  color: #777;
  margin-bottom: 12px;
  font-style: italic;
}
.book-description {
  font-size: 1.05rem;
  margin-bottom: 15px;
  color: #444;
  line-height: 1.6;
}
.readmore-btn {
  background: #8b4513;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
}
.readmore-btn:hover {
  background: #5a2d0c;
}


.back-btn {
  margin-top: 30px;
  background: #555;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
.back-btn:hover {
  background: #333;
}
</style>
