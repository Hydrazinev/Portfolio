<template>
  <transition name="fade">
    <div v-if="visible" class="overlay-container">
      <div class="overlay"></div>

      <div class="dialog-wrapper">
        <div class="dialog" :style="{ backgroundColor: color }">
          <h1 class="dialog-title">{{ title }}</h1>

          <div @click="$emit('close')" class="dialog-close">
            <i class="fa fa-times fa-lg fa-fw"></i>
          </div>

          <div class="dialog-content">
            <div v-html="htmlContent"></div>

            <div class="dialog-bottom">
              <a @click="$emit('close')" class="dialog-close-button">Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
});
</script>

<style scoped>
/* Outer wrapper: allows page scroll if content is large */
.overlay-container {
  position: fixed;
  inset: 0;
  z-index: 999;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Transparent overlay layer */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 998;
}

/* Dialog wrapper centers the content */
.dialog-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  min-height: 100%;
  z-index: 999;
}

/* Actual dialog */
.dialog {
  background-color: white;
  color: #696969;
  border-radius: 10px;
  width: 100%;
  max-width: 1000px;
  position: relative;
  overflow: visible;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  padding-bottom: 20px;
}

/* Title */
h1.dialog-title {
  text-align: center;
  font-size: 1.8em;
  margin: 0;
  padding: 24px 16px;
  color: white;
}

/* Content */
.dialog-content {
  padding: 24px;
  background-color: #fcfcfc;
  color: #696969;
  overflow: visible;
}

/* Bottom CTA */
.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin-top: 20px;
  color: #444;
  font-weight: bold;
}

/* Close icon */
.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
  color: white;
}

.dialog-close:hover {
  opacity: 0.6;
}

/* Ensure all images inside content show fully */
.dialog-content img {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media only screen and (max-width: 620px) {
  .dialog {
    margin: 20px 0;
  }

  h1.dialog-title {
    font-size: 1.4em;
  }

  .dialog-content {
    padding: 16px;
  }
}
</style>
