<template>
  <div class="hub-app">

    <nav class="top-nav">
      <div class="nav-left">
        <span class="my-name">Alfred Joaquin L. Orencia</span>
      </div>
      <div class="nav-right">
        <div class="contact-item">
          <img :src="icons.email" alt="Email" class="nav-icon" />
          <span>alfredjoaquinorencia@gmail.com</span>
        </div>
        <div class="contact-item">
          <img :src="icons.github" alt="github" class="nav-icon" />
          <span>github.com/AgentTEG</span>
        </div>
      </div>
    </nav>

    <div class="hub-content">
      <header class="header-section">
        <h1 class="title">Assessment Q&A</h1>
      </header>

      <section class="intro-grid">
        <div class="intro-text-box">
          <h2>Introduction</h2>
          <p>
            Hello, I’m Alfred and presented on this page are my responses to the assessment questions along with my honest thoughts on my experience throughout this activity.
          </p>
        </div>

        <div class="nav-sidebar">
          <h3>Quick Navigation</h3>
          <div class="nav-columns">
            <ul class="question-list">
              <li v-for="(qa, index) in qaData.slice(0, 5)" :key="index" @click="scrollTo('qa-' + index)">
                {{ index + 1 }}. {{ getFirstSentence(qa.question) }}
              </li>
            </ul>
            <ul class="question-list">
              <li v-for="(qa, index) in qaData.slice(5)" :key="index + 5" @click="scrollTo('qa-' + (index + 5))">
                {{ index + 6 }}. {{ getFirstSentence(qa.question) }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="qa-container">
        <div v-for="(qa, index) in qaData" :key="index" :id="'qa-' + index" class="qa-item">
          <h2 class="qa-question">Q{{ index + 1 }}: {{ qa.question }}</h2>
          <div class="qa-answer" v-html="qa.answer"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const BASE = import.meta.env.BASE_URL;

export default {
  name: "LandingHub",
  data() {
    return {
      icons: {
        github: `${BASE}icons/github-icon.svg`,
        email: `${BASE}icons/contact.png`,
      },

      qaData: [

        {
          question: "Talk about how you made your site and why you chose the tools you did.",
          answer: `
            <p>I built this site by repurposing one of my existing Vue projects and configuring it specifically for this QA assessment.</p>
            </br>
            <p><strong>Tech Stack:</strong></p>
            <ul>
              <li>Vue 3 (Composition API)</li>
              <li>Vite</li>
              <li>Vue Router (Hash Mode)</li>
              <li>DeepSeek-R1:8B</li>
            </ul>
            </br>
            <p>One challenge was deployment compatibility when moving to Netlify. I resolved it by reviewing build settings, adjusting the publish directory, and ensuring router configuration aligned with static hosting.</p>
          `
        },

        {
          question: "What did you think of our service during the time you used it?",
          answer: `
            <p>My experience using Netlify was smooth and impressive, particularly the AI-assisted deployment guidance.</p>
            <p>I appreciated how quickly a project can go from repository to live deployment.</p></br>
            <p><strong>Constructive feedback:</strong> More beginner-friendly contextual explanations would improve accessibility for non-technical users.</p>
          `
        },

        {
          question: "Rank your 5 favorite and 5 least favorite activities.",
          answer: `
            <h3>Top 5 Favorite Activities</h3>
            <ul>
              <li>Dig through server logs</li>
              <li>Debug unfamiliar frameworks</li>
              <li>Design features from feedback</li>
              <li>Manage outage communications</li>
              <li>Set up site frameworks for debugging</li>
            </ul>
</br>
            <h3>Least Favorite Activities</h3>
            <ul>
              <li>Create video tutorials</li>
              <li>Respond on Twitter</li>
              <li>Explain pricing models</li>
              <li>Champion workflow improvements</li>
              <li>Evaluate service fit</li>
            </ul>
          `
        },

        {
          question: "Provide a link to documentation you think is well done.",
          answer: `
            <p><strong>GitHub Pages Documentation:</strong></p>
            <p>https://docs.github.com/en/pages</p>
</br>
            <ul>
              <li>Clear progression from setup to advanced configuration</li>
              <li>Practical step-by-step examples</li>
              <li>Well-segmented topics</li>
              <li>Balanced beginner and advanced detail</li>
            </ul>
          `
        },

        {
          question: "Explain two major DNS challenges.",
          answer: `
            <h3>1. DNS Propagation Delays</h3>
            <p>Changes are not instant due to TTL and global caching, often leading users to believe something is broken.</p>
</br>
            <h3>2. Incorrect Record Configuration</h3>
            <ul>
              <li>Mixing A and CNAME records</li>
              <li>Old records left active</li>
              <li>Misconfigured nameservers</li>
            </ul>
          `
        },

        {
          question: "How would you troubleshoot a build error with exit code 2?",
          answer: `
            <h3>Troubleshooting Steps</h3>
            <ol>
              <li>Review full build logs</li>
              <li>Check build command and publish directory</li>
              <li>Verify Node version</li>
              <li>Check dependencies</li>
              <li>Ask if build works locally</li>
            </ol>
</br>
            <h3>Customer Response</h3>
            <p>Hi [Customer Name],</p>
            <p>Your build is failing with a non-zero exit code.</p>
            <ul>
              <li>Does it build locally?</li>
              <li>Any recent changes?</li>
              <li>Can you share full logs?</li>
            </ul>
            <p>Once I have more details, I’ll help resolve it quickly.</p>
            <p>Best regards,<br/>Alfred</p>
          `
        },

        {
          question: "How would you configure a 301 redirect and proxy redirect?",
          answer: `
            <h3>301 Redirect</h3>
            <pre>/netlify/:query https://www.google.com/search?q=:query 301</pre>

            <h3>Proxy Redirect (200)</h3>
            <pre>/netlify/* /index.html 200</pre>

            <p>This proxy rule supports SPA routing while preserving URLs.</p>
          `
        },

        {
          question: "Deploy a simple Hello World function.",
          answer: `
            <h3>Steps</h3>
            <ol>
              <li>Create <code>netlify/functions</code></li>
              <li>Create <code>hello.js</code></li>
              <li>Add handler:</li>
            </ol>

            <pre>
exports.handler = async function () {
  return {
    statusCode: 200,
    body: "Hello World"
  };
};
            </pre>

            <p>Access via:<br/>
            <code>/.netlify/functions/hello</code></p>
          `
        },

        {
          question: "How would you respond to a severe security report?",
          answer: `
            <h3>Investigation Steps</h3>
            <ul>
              <li>Document all details</li>
              <li>Attempt to isolate identified issue</li>
              <li>Assess impact and severity</li>
              <li>Review recent changes</li>
            </ul>
</br>
            <h3>Initial Response</h3>
            <p>Thank you for reporting this issue. We take security very seriously. This has been escalated to our security team for immediate investigation.</p>
</br>
            <h3>Escalation</h3>
            <ul>
              <li>Notify security lead</li>
              <li>Create high-severity ticket</li>
              <li>Engage incident response team</li>
              <li>Coordinate communication plan</li>
            </ul>
          `
        }

      ]
    };
  },

  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    },

    getFirstSentence(text) {
      const match = text.match(/^[^.!?]+[.!?]/);
      return match ? match[0] : text;
    }
  }
};
</script>


<style scoped>

.nav-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.intro-grid {
  display: flex;
  gap: 50px;
  margin-bottom: 80px;
  align-items: flex-start;
}

.intro-text-box {
  flex: 0.7;
  background: rgba(31, 41, 51, 0.8);
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid #42b883;
}

.nav-sidebar {
  flex: 2;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 40px;
  border-radius: 12px;
}

.hub-app {
  min-height: 100vh;
  color: white;
  font-family: 'Inter', sans-serif;
}

.hub-content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 60px 40px;
}

.top-nav {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.2rem 5%;
  background: rgba(10, 15, 10, 0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-right {
  display: flex;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-columns {
  display: flex;
  gap: 40px;
}

.question-list {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
}

.question-list li {
  padding: 12px 0;
  font-size: 0.9rem;
  cursor: pointer;
  color: #9ca3af;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.question-list li:hover {
  color: #42b883;
  transform: translateX(5px);
}

.qa-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.qa-item {
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.qa-question {
  color: #42b883;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.qa-answer {
  color: #e5e7eb;
  line-height: 1.8;
  font-size: 1.05rem;
}

.qa-answer h3 {
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #ffffff;
}

.qa-answer p {
  margin-bottom: 15px;
}

.qa-answer ul,
.qa-answer ol {
  margin-left: 20px;
  margin-bottom: 20px;
}

.qa-answer li {
  margin-bottom: 8px;
}

</style>