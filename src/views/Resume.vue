<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Vaidik Shah</strong>, An ML engineer and developer passionate about AI, LLMs, and real-world applications, I am actively exploring opportunities through internships, collaborations, and innovation-driven challenges like hackathons.
      <br />
      <br />I’ve built intelligent systems using Python, Scikit-learn, and modern ML frameworks, with hands-on experience in LLMs, data pipelines, and backend integration. I'm especially excited about applying AI to real-world problems through research, automation, and scalable solutions.
      <br />
      <br />I am currently seeking internship opportunities where I can gain real-world experience. My passion for technology and design drives me to continually improve and explore new possibilities, and I look forward to contributing my expertise to new and exciting projects. If you have any opportunity feel free to
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides development, I'm passionate about surfing, formula 1, anime, powerlifting.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Vaidik Resume_Amazon.pdf" target="_blank">
  <i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
</a>

        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">

      <h2>Work experience</h2>


      <h3>Technolee</h3>
      <h4>ML Engineer</h4>
      <h4>July 2024-July 2026</h4>
      <br>
      <div>
        <ul>
          <li>Developed a logistic regression model to predict sales trends for 20+ products, achieving ~80% prediction accuracy while adhering to
robust data handling practices.</li>
          <li>Conducted data cleaning, feature selection, and established a training pipeline using Python and scikit-learn, aligning with best practices
for custom ML model development.</li>
          <li>Constructed and integrated a backend API to serve real-time predictions within a dashboard, ensuring seamless deployment and user
accessibility.</li>
          <li>Leveraged Python, scikit-learn, Flask, and Pandas to deploy machine learning solutions, facilitating efficient data processing and model
monitoring.</li>
        </ul>
      </div>
      <br>

      <h3>Indian Space Research Organization (ISRO)</h3>
      <h4>AI/ML Associate Engineer</h4>
      <h4>Jan 2024-July 2024</h4>
      <br>
      <div>
        <ul>
          <li>Engineered scalable machine learning models using Python, scikit-learn, and XGBoost to forecast solar insolation, achieving over 92%
real-world prediction accuracy.</li>
          <li>Optimized model performance through feature engineering and hyperparameter tuning, reducing forecasting errors by 25% and
improving computational efficiency by 20%.</li>
          <li>Streamlined a backend pipeline to preprocess large satellite datasets and automate model inference, enhancing data processing speed
and accuracy.</li>
          <li>Designed and presented interactive data visualizations with Matplotlib and Seaborn to effectively communicate insights and forecasting
trends to scientific stakeholders.</li>
        </ul>
      </div>
      <br>
      <h3>Cre-Art Solutions</h3>
      <h4>Software Engineer Intern</h4>
      <h4>June 2023-August 2023</h4>
      <br>
      <div>
        <ul>
          <li>Developed and optimized RESTful APIs with Django, streamlining financial data processing, improving system efficiency by 20%.</li>
          <li>Implemented data validation and optimizations, reducing accounting entry errors by 18% and compliance with reporting norms</li>
          <li>Built interactive Power BI dashboards connected to SQL databases, gives insights into revenue, expenses, and key financial metrics..</li>

        </ul>
      </div>
      <br>





      <h2>Skills</h2>

<div class="skill-set" style="font-weight: bold;">
  <h3 style="margin-bottom: 8px;"></h3>
  <div style="display: flex; flex-wrap: nowrap; gap: 8px;">
<div class="skill-set" style="display: flex; flex-wrap: wrap; gap: 15px; font-weight: bold;">
      <div style="overflow-x: auto; white-space: nowrap; font-weight: bold; padding-bottom: 8px;">
        <span style="display: inline-block; margin-right: 63px;">
          <SkillRate name="Python, Scikit-learn, TensorFlow, PyTorch," />
        </span>
        <span style="display: inline-block; margin-right: 88px;">
          <SkillRate name="LLMs, LangChain, Hugging Face, OpenAI API," />
        </span>
        <span style="display: inline-block; margin-right: 93px;">
          <SkillRate name="Prompt Engineering, RAG, Machine Learning," />
        </span>
        <span style="display: inline-block; margin-right: 5px;">
          <SkillRate name="Git, Docker, AWS, CI/CD" />
        </span>
      </div>

</div>



  </div>
</div>



<!--      <div class="skill-set">-->
<!--        <h3>Non-Tech</h3>-->
<!--        <SkillRate name="Binge watching" :rate="5" />-->
<!--        <SkillRate name="Skateboarding" :rate="4" />-->
<!--        <SkillRate name="Seduction" :rate="1" />-->
<!--        <SkillRate name="Sense of humor" :rate="4" />-->
<!--      </div>-->
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>M.S (Aug 2025-Present)</h3>
      <h4>Computer Science and Engineering (California State University Long Beach, CA)</h4>

      <h3>B.Tech (2020-2024)</h3>
      <h4>Computer Science and Engineering(GTU,Ahmedabad)</h4>
      <div>CGPA - 9.24</div>

      <h3>High School</h3>
      <h4>SS Divine(Ahmedabad)</h4>
      <div>percentage - 80%</div>



      <h2>Besides...</h2>
      <div>
        <h3>I love️</h3>
        <div>Gaming</div>
        <div>Working Out</div>
        <div>Beaches</div>
        <div>Go-Karting</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>