<template>
    <div>
      <div class="projects-list">
        <template v-for="(project, index) in projects">
          <div
            :key="`${project.id || 'project'}-${index}`"
            @click="showDetails(project)"
            class="project-item">
            <div class="project-accent" :style="{ 'background-color': project.accentColor || '#ff5a5f' }"></div>
            <div class="project-content">
              <div class="title-text">{{ project.name || "Untitled Project" }}</div>
              <div class="project-meta"><strong>Problem:</strong> {{ getHighlights(project.name).problem }}</div>
              <div class="project-meta"><strong>Stack:</strong> {{ getHighlights(project.name).stack }}</div>
              <div class="project-meta"><strong>Impact:</strong> {{ getHighlights(project.name).impact }}</div>
              <button class="project-action">View details</button>
            </div>
              </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
    getHighlights: function (name: string) {
      const map: Record<string, { problem: string; stack: string; impact: string }> = {
        "DrugShield AI": {
          problem: "Medication safety review is slow and error-prone.",
          stack: "FastAPI, Pydantic, Next.js, React, RxNav, OpenAI API",
          impact: "Real-time risk scoring with clinician-ready summaries."
        },
        "AI-Powered Professor Rating Platform": {
          problem: "Finding the right professor from noisy reviews.",
          stack: "LangChain, Pinecone, FastAPI, Redis, WebSockets",
          impact: "Improved discovery relevance and +45% engagement."
        },
        "Academic Video and text Summarizer": {
          problem: "Students face information overload from mixed sources.",
          stack: "GPT-3.5/4, LLaMA, RAG, EDUVSUM, ROUGE/BERTScore",
          impact: "More coherent multi-source summaries for study efficiency."
        },
        "Solar Insolation forecasting": {
          problem: "Inaccurate sunlight forecasts reduce solar planning quality.",
          stack: "Python, ML forecasting, time-series weather pipelines",
          impact: "92%+ accuracy and improved energy efficiency decisions."
        },
        "Neural Network from scratch": {
          problem: "Opaque ML abstractions hide core learning mechanics.",
          stack: "Pure Python, forward pass, backpropagation, gradient descent",
          impact: "Clear understanding of end-to-end neural network internals."
        },
        "H&M Reviews and images scraper": {
          problem: "Retail review/image data is hard to collect at scale.",
          stack: "Python web scraping, data structuring for analytics/ML",
          impact: "Created reusable datasets for sentiment and product insights."
        }
      };
      return map[name] || {
        problem: "Complex real-world workflow requiring automation.",
        stack: "Modern full-stack and AI tooling.",
        impact: "Faster decisions with reliable outputs."
      };
    },
  },
});
</script>

<style scoped>

.projects-list {
  display: grid;
  gap: 14px;
}

.project-item {
  display: grid;
  grid-template-columns: 8px minmax(0, 1fr);
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 14px;
  background: rgba(255,255,255,0.65);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.13);
}

.project-accent {
  min-height: 100%;
}

.project-content {
  padding: 14px 16px;
  display: grid;
  gap: 10px;
}

.title-text {
  color: #121212;
  font-size: 1.08em;
  line-height: 1.25em;
  font-family: 'League Spartan', 'Inter', Helvetica, Arial, sans-serif;
  font-weight: 700;
}

.project-meta {
  color: rgba(0,0,0,0.76);
  font-size: 0.92em;
  line-height: 1.45;
}

.project-action {
  width: fit-content;
  border: 0;
  border-radius: 999px;
  background: #5a2a4a;
  color: #fff;
  padding: 8px 12px;
  font-size: 0.82em;
  font-weight: 600;
  cursor: pointer;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 980px;
    gap: 16px;
  }
}



</style>
