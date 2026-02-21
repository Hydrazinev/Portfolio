<template>
  <div id="app">
    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([

]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
  overflow-x: hidden;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.05em;
  line-height: 1.7em;
  text-align: left;
}

h1, h2, h3, h4, h5 {
  text-align: left;
  font-family: 'League Spartan', 'Inter', Helvetica, Arial, sans-serif;
  letter-spacing: -0.01em;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.72;
  transition: opacity 0.2s ease;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: clamp(2.1rem, 5.5vw, 2.8rem);
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 30px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
  padding: 12px;
}

img {
  max-width: 100%;
  height: auto;
}

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
    font-size: 2.5em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
