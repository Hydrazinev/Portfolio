<template>
  <div>
    <h1>Art</h1>

    <div style="margin-bottom: 30px;">
      I enjoy sketching, designing and making illustrations as well so here are some of the art works that I have created.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";
import ArtData from "@/data/ArtData";

export default Vue.extend({
  name: "Art",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: ArtData,
    };
  },
});
</script>