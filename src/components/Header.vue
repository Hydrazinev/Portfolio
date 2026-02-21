<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">About me</router-link>
      <router-link to="/other-projects">Projects</router-link>
      
<!--        <router-link to="/art">Art</router-link>-->
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 18px 14px 14px;
  line-height: 2.6em;
}

a {
  text-transform: uppercase;
  margin-left: 12px;
  margin-right: 12px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  font-size: 0.92em;
  letter-spacing: 0.03em;
  font-family: 'League Spartan', 'Inter', Helvetica, Arial, sans-serif;
  font-weight: 600;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}



@media only screen and (max-width: 620px){
  .nav-bar {
    text-align: center;
    line-height: 2.2em;
    padding: 10px 6px;
  }

  a {
    margin-left: 6px;
    margin-right: 6px;
    padding-bottom: 0px;
    font-size: 0.76em;
  }
}



</style>
