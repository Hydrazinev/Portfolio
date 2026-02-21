<template>
  <div class="footer">
    
    <div class="left"> <strong>Made with ❤️ by Vaidik</strong></div>
    <div class="right"><strong>Reach me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vaidikshah03@gmail.com" target="_blank" rel="noopener noreferrer">vaidikshah03@gmail.com</a> or <a href="/contact" target="_blank" rel="noopener noreferrer">through here</a></strong></div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: #1d4ed8;
  color: #ffffff;
  width: 100%;
  font-size: 0.8em;
  opacity: 1;
  padding-bottom: 30px;
}

.footer a{
  color: #ffffff;
  opacity: 1 !important;
  text-decoration: underline;
}

.left, .right {
    padding-top: 10px;
    text-align: center;
  }

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>
