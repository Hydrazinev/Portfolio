<template>
    <div>
      <div class="projects-list">
        <template v-for="(project, index) in projects">
          <div
            :key="`${project.id || 'project'}-${index}`"
            @click="showDetails(project)"
            class="project-item">
            <div class="project-accent" :style="{ 'background-color': project.accentColor || '#1ca1e2' }"></div>
            <div class="project-content">
              <div class="title-text">{{ project.name || "Untitled Project" }}</div>
              <div class="project-preview">{{ getPreview(project.htmlDescription) }}</div>
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
    getPreview: function (html: string) {
      const cleaned = html
        .replace(/<style[^>]*>.*?<\/style>/gis, "")
        .replace(/<script[^>]*>.*?<\/script>/gis, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      return cleaned.length > 170 ? `${cleaned.slice(0, 170)}...` : cleaned;
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

.project-preview {
  color: rgba(0,0,0,0.72);
  font-size: 0.96em;
  line-height: 1.55;
}

.project-action {
  width: fit-content;
  border: 0;
  border-radius: 999px;
  background: #111827;
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
