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
            Hello, I’m Alfred and presented on this page  are my responses to the assessment questions along with my honests thoughts on my experience throughout this activity.
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
          <div class="qa-answer">
            <p>{{ qa.answer }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// ... (script remains the same as previous version)
const BASE = import.meta.env.BASE_URL;

export default {
  name: "LandingHub",
  data() {
    return {
      videoBg: `${BASE}backgrounds/pages-dash-bg.mp4`,
      icons: {
        github: `${BASE}icons/github-icon.svg`,
        email: `${BASE}icons/contact.png`, 
      },
      qaData: [
        { question: "Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.", answer: "Detailed explanation here..." },
        { question: "What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.", answer: "Details here..." },
        { question: "Rank your 5 favorite and 5 least favorite activities from this list: https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab", answer: "Ranking here..." },
        { question: "Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.", answer: "Link and explanation..." },
        { question: "Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.", answer: "DNS challenges here..." },
        { question: "A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.", answer: "Troubleshooting steps..." },
        { question: "How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site!", answer: "Redirect formatting..." },
        { question: "Please attempt to deploy a function on our service. This need not be complicated. It could be 'Hello World'. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.", answer: "Experience description..." },
        { question: "We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?", answer: "Security response..." }
      ]
    };
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
  /* Added height: auto to ensure it only takes what it needs */
  height: auto; 
}

.intro-text-box h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.nav-sidebar {
  flex: 2; 
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 40px;
  border-radius: 12px;
}

.hub-app { position: relative; min-height: 100vh; color: white; font-family: 'Inter', sans-serif; }
.hub-content { max-width: 1500px; margin: 0 auto; padding: 60px 40px; }
.bg-video { position: fixed; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; }
.bg-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.75); z-index: -1; }
.top-nav { position: sticky; top: 0; width: 100%; padding: 1.2rem 5%; background: rgba(10, 15, 10, 0.95); display: flex; justify-content: space-between; align-items: center; z-index: 100; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.nav-right { display: flex; gap: 20px; }
.contact-item { display: flex; align-items: center; gap: 10px; }
.nav-columns { display: flex; gap: 40px; }
.question-list { flex: 1; list-style: none; padding: 0; margin: 0; }
.question-list li { padding: 12px 0; font-size: 0.9rem; cursor: pointer; color: #9ca3af; line-height: 1.4; transition: all 0.3s ease; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
.question-list li:hover { color: #42b883; transform: translateX(5px); }
.qa-container { display: flex; flex-direction: column; gap: 50px; }
.qa-item { padding: 40px; background: rgba(255, 255, 255, 0.03); border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.1); scroll-margin-top: 100px; }
.qa-question { color: #42b883; font-size: 1.5rem; margin-bottom: 20px; }
.qa-answer { color: #e5e7eb; line-height: 1.8; font-size: 1.1rem; }
</style>