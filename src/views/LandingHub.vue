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
            <p><strong>My tech stack includes:</strong></p>
            <ul>
              <li>Vue 3 (Composition API)</li>
              <li>Vite</li>
              <li>Vue Router (Hash Mode)</li>
              <li>DeepSeek-R1:8B</li>
            </ul>
            </br>
            <p>Since this was my first time using Netlify, one challenge I encountered was deployment compatibility. Some configurations from my previous projects (especially routing behavior and build settings) did not immediately translate cleanly. I resolved this by reviewing build settings, adjusting the publish directory, and ensuring the router configuration aligned with static hosting requirements. Overall, the issue was manageable and helped me better understand Netlify’s deployment workflow.</p>
          `
        },

        {
          question: "What did you think of our service during the time you used it?",
          answer: `
            <p>My experience using Netlify was smooth and impressive, particularly the AI-assisted deployment guidance.</p>
            <p>I appreciated how quickly a project can go from repository to live deployment.</p></br>
            <p><strong>Constructive feedback:</strong> A small constructive criticism would be related to AI terminology and explanation depth. While the assistance is helpful, some guidance assumes a certain level of technical familiarity. For non-technical users, more detailed explanations or contextual examples could make the experience even clearer and more accessible. Overall, the service feels developer-focused, efficient, and fast.</p>
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
            <p>GitHub Pages documentation is well done because:</p>
            <ul>
              <li>Clear structure: It provides a logical progression from basic setup to advanced custom domain configuration.</li>
              <li>Practical examples: Step-by-step guides with real configuration examples make it easy to follow.</li>
              <li>Well segmented topics: DNS configuration, Jekyll integration, and deployment methods are separated clearly.</li>
              <li>Beginner to advanced friendly: It balances accessibility while still being technically detailed enough for developers.</li>
            </ul>
            </br>
            <p>The documentation avoids unnecessary jargon and focuses on actionable steps, which improves usability.</p>
          `
        },

        {
          question: "Explain two major DNS challenges.",
          answer: `
            <h3>1. DNS Propagation Delays</h3>
            <p>Many users expect DNS changes to be instant. When records are updated, propagation can take several hours depending on TTL values and global DNS caching. This delay often leads customers to believe something is broken, when in reality the system is still updating.</p>
</br>
            <h3>2. Incorrect Record Configuration Common mistakes</h3>
            <ul>
              <p>Mixing up A records and CNAME records Leaving old DNS records active Misconfiguring nameservers Since DNS involves multiple providers (domain registrar vs hosting platform), customers may become confused about where changes should be made. Clear visual guides and DNS validation tools significantly reduce confusion in these</p>
            </ul>
          `
        },

        {
          question: "How would you troubleshoot a build error with exit code 2?",
          answer: `
            <h3>Troubleshooting Steps</h3>
            <ol>
              <li>Troubleshooting Process Identify: Review full build logs to locate where the non-zero exit code occurred. Check for dependency errors, environment variable issues, or configuration problems.</li>
              <li>Replicate: Ask the customer if the build works locally using the same build command and Node version.</li>
              <li>Test: Confirm: Correct build command Proper publish directory Node version alignment Dependencies in package.json</li>
              <li>Resolve: Guide the customer to fix any dependency mismatch, missing environment variables, or incorrect build configuration.</li>
              <li>Release: Trigger a new deployment after fixes are confirmed.</li>
            </ol>
</br>
            <h3>Customer Response</h3>
            <p>Hi [Customer Name],</p>
            <p>Thanks for reaching out! I can see that your build is failing with a non-zero exit code, which typically means the build script encountered an error. </br></br>To help narrow this down:</p>
     
            <ul>
              <li>Does the site build successfully on your local machine?</li>
              <li>Were there any recent dependency or configuration changes?</li>
              <li>Could you share the full build logs from your deploy details?</li>            
              </ul>
              </br>
            <p>Common causes include dependency issues, missing environment variables, or Node version mismatches. Once I have a bit more information, I’ll be able to pinpoint the issue and help get your site deployed successfully.</p>
            </br>
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
            <h3>I deployed a "Hello World" function to Netlify. Here is the breakdown:</h3>
            <ol>
              <li>Setup: Created netlify/functions/hello-world.js using the standard Web Request/Response API.</li>
              <li>Testing: Used the Netlify CLI (netlify dev) to verify the endpoint worked on my local machine first.</li>
              <li>Deployment: Linked my repository to Netlify for an automatic build upon pushing to GitHub.</li>
              <li>Verification: Confirmed the function was live by visiting the /.netlify/functions/hello-world endpoint.</li>
            </ol>
</br>
            <p><strong>Challenges & Troubleshooting:</strong></p>
            <p> The main challenge was ensuring the directory structure was correct. I initially put the file in a top-level functions/ folder, but Netlify didn't "see" it. I checked the Functions tab in the Netlify dashboard, noticed it was empty, and realized I needed to move the file into a netlify/functions/ directory. Once moved and redeployed, it worked perfectly.</p>

          `
        },

        {
          question: "How would you respond to a severe security report?",
          answer: `
            <h3>Investigation Steps</h3>
            <ul>
              <li>Document everything: Record affected URLs, reproduction steps, timestamps, and any proof-of-concept details provided.</li>
              <li>Attempt to isolate identified issue</li>
              <li>Gather context: Check for related reports and review recent platform updates.</li>
              <li>Assess severity: Determine potential impact (data exposure, authentication bypass, service disruption)</li>
            </ul>
</br>
            <h3>Initial Response</h3>
            <p>Thank you for reporting this security concern. We take security reports extremely seriously. I have documented your report and am escalating it to our security team for immediate investigation. To ensure proper handling, a secure internal ticket has been created and our incident response team has been notified. We appreciate responsible disclosure. Please refrain from sharing details publicly while we investigate. If you have additional technical information or proof-of-concept, please share it securely. We will follow up as soon as more information is available.</p>
</br>
            <h3>Escalation</h3>
            <ul>
              <li>Notify security lead and on-call engineer immediately</li>
              <li>Create high-severity incident ticket Inform engineering leadership if impact is large</li>
              <li>Assemble relevant system owners Coordinate communication plan if disclosure becomes necessary</li>
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