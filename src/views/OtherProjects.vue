<template>
  <div class="projects-page">
    <h1>Projects</h1>

    <div class="projects-intro">
      Here are some of the projects I've made or heavily contributed to.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>

<style scoped>
.projects-page {
  display: grid;
  gap: 8px;
}

.projects-intro {
  margin-bottom: 22px;
  max-width: 62ch;
  line-height: 1.7;
  opacity: 0.9;
}
</style>
