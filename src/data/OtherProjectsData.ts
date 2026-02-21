import ProjectData from '@/data/ProjectData.ts';

export default [
new ProjectData(
  "project-10",
  "DrugShield AI",
  "",
  `
    <div class="paragraph">
      <strong>DrugShield AI</strong> | <em><strong>FastAPI</strong>, <strong>Pydantic</strong>, <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>RxNav APIs</strong>, <strong>OpenAI Responses API</strong>, <strong>ReportLab</strong> - 2026</em><br>
      Production-focused medication safety platform engineered for reliable, real-time prescription risk analysis and structured clinical decision support.
      <br/>Code is <a target="_blank" href="https://github.com/Hydrazinev/drugshield-ai">here</a>.
      <br/>Live demo is <a target="_blank" href="https://drug-shield.up.railway.app/">here</a>.
    </div>

    <div class="paragraph">
      Key engineering highlights:
      <ul>
        <li>Developed and deployed <strong>DrugShield AI</strong> using <strong>FastAPI</strong>, <strong>Pydantic</strong>, <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, delivering real-time medication safety analysis with normalized <strong>RxNorm mapping</strong>, interaction checks, and clinician-ready <strong>PDF exports</strong>.</li>
        <li>Built a rule-based risk engine in <strong>Python</strong> with weighted <strong>DDI</strong>, dose, and vulnerability subscores (0-10), then optimized latency using <strong>async concurrency</strong> + <strong>caching</strong> + <strong>fail-fast LLM fallback</strong>, improving reliability under unstable external API conditions.</li>
        <li>Implemented an end-to-end data and explanation pipeline with <strong>RxNav APIs</strong>, <strong>OpenAI Responses API</strong>, and <strong>ReportLab</strong>, producing patient/caregiver/doctor summaries and structured decision-support outputs for safer medication review workflows.</li>
      </ul>
    </div>
  `,
  "#FF6B6B",
  false,
  true
),

new ProjectData(
  "project-8",
  "AI-Powered Professor Rating Platform",
  "",
  `
    <div class="paragraph">
      <strong>AI-Powered Professor Rating Platform</strong> | <em><strong>LangChain</strong>, <strong>Pinecone</strong>, <strong>FastAPI</strong>, <strong>Redis</strong>, <strong>WebSockets</strong>, JavaScript - August 2025</em><br>
      Built an AI-powered professor search platform using <strong>LangChain + Pinecone (RAG)</strong> on RateMyProfessor data. Designed a <strong>FastAPI + WebSocket</strong> backend with <strong>Redis</strong>, load-tested to <strong>250+ users</strong> at ~<strong>99% uptime</strong>. Added a responsive UI with AI-driven recommendations that boosted engagement by <strong>45%</strong>.
      <br/>Code is <a target="_blank" href="https://github.com/Hydrazinev/Rate-My-Professor">here</a>.
    </div>

    <div class="paragraph">
      Main features:
      <ul>
        <li><strong>RAG</strong> search with <strong>LangChain + Pinecone</strong> for accurate professor discovery</li>
        <li><strong>FastAPI</strong> backend with <strong>WebSockets</strong> for real-time interaction</li>
        <li><strong>Redis caching</strong>, tested at <strong>250+ concurrent</strong> users</li>
        <li>Responsive UI with AI-driven recommendations</li>
        <li>Improved engagement (+45% session duration)</li>
      </ul>
    </div>
  `,
  "#FF8E72",
  false,
  true
),

  new ProjectData(
    "project-6",
    "Academic Video and text Summarizer",
    "",
    `
      <div class="paragraph">
        <strong>Academic Video and text Summarizer</strong> helps students handle information overload by creating clear, focused summaries. It uses advanced AI (like <strong>GPT-3.5/4</strong>) to combine video and reading materials for better context. With techniques like <strong>RAG</strong> and few-shot learning, it outperforms traditional summarizers in accuracy and clarity.
      </div>
      
      <div class="paragraph">
        <strong>Code is </strong><a href="https://github.com/Hydrazinev/Academic-Video-and-text-Summarizer" target="_blank">here</a>.
      </div>
      
      <div class="paragraph">
        Technologies Used:
        <ul>
          <li><strong>LLMs</strong> like <strong>GPT-3.5</strong>, <strong>GPT-4</strong>, and <strong>LLaMA-2</strong> for generating summaries</li>
          <li><strong>Retrieval-Augmented Generation (RAG)</strong> to enhance contextual understanding</li>
          <li>EDUVSUM dataset with educational videos, subtitles, and annotations</li>
          <li>Evaluation tools like <strong>G-Eval</strong>, <strong>BERTScore</strong>, and <strong>ROUGE</strong> to measure summary quality</li>
        </ul>
      </div>
    `,
    "#FF5A5F",
    false,
    false
  ),

  new ProjectData(
    "project-7",
    "Solar Insolation forecasting",
    "",
    `
      <div class="paragraph">
        <strong>Solar-Insolation-forecasting</strong><br>
        When I was an intern at <strong>ISRO</strong>, I built a machine learning model with over 92% accuracy to predict solar insolation in Jodhpur and Rewa. Improved solar power efficiency by 20% by aligning energy output with peak sunlight hours. Used 10+ years of weather data and created easy-to-use pipelines for training and testing the model.
        <br/>Code is <a target="_blank" href="https://github.com/Hydrazinev/Hydrazinev-Solar-Insolation-forecasting">here</a>.
      </div>

      <div class="paragraph">
        Main features:
        <ul>
          <li>Forecast solar insolation for Jodhpur and Rewa using <strong>ML</strong></li>
          <li>Utilizes 10+ years of weather data</li>
          <li>Optimizes energy output with sunlight prediction</li>
          <li>Scalable pipelines for data preprocessing and model evaluation</li>
          <li>Visual outputs for energy planning decisions</li>
        </ul>
      </div>
    `,
    "#F77F00",
    false,
    true
  ),

  new ProjectData(
    "project-9",
    "Neural Network from scratch",
    "",
    `
      <div class="paragraph">
        <strong>Neural Network from scratch</strong> is a repository containing the implementation of a neural network built entirely from scratch without using external machine learning libraries. Demonstrates core concepts like <strong>forward propagation</strong>, <strong>backpropagation</strong>, and <strong>gradient descent</strong> using only <strong>Python</strong>.
      </div>

      <div class="paragraph">
        <div class="notice">
          Source code available on <a href="https://github.com/Hydrazinev/Neural-Network-from-scratch" target="_blank">GitHub</a>.
        </div>
      </div>
    `,
    "#C855BC",
    false,
    true
  ),

  new ProjectData(
    "",
    "H&M Reviews and images scraper",
    "",
    `
      <div class="paragraph">
        <strong>H&M Reviews and images scraper</strong> is a <strong>Python</strong>-based web scraper designed to extract customer reviews and product images from the H&M website. Useful for sentiment analysis, product research, and visual content analysis.
        <br/>
        <br/>Code is <a target="_blank" href="https://github.com/Hydrazinev/H-M-Reviews-and-images-scraper">here</a>.
      </div>

      <div class="paragraph">
        Main features:
        <ul>
          <li>Scrapes H&M reviews and images with <strong>Python</strong></li>
          <li>Supports sentiment and product performance analysis</li>
          <li>Generates generic customer reviews for simulations</li>
          <li>Outputs structured data for <strong>ML pipelines</strong></li>
        </ul>
      </div>

      <div class="paragraph">
        <div class="notice">
          Source code available on <a href="https://github.com/Hydrazinev/H-M-Reviews-and-images-scraper" target="_blank">GitHub</a>.
        </div>
      </div>
    `,
    "#2A9D8F"
  )
];


