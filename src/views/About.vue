<template>
  <div style="margin-bottom: 80px;">
    <h1 style="font-size: xxx-large">Hello!</h1>

    <div class="paragraph">
<!--      <div>-->
<!--        I'm <strong style="font-size: x-large">Vaidik Shah</strong>, a computer science student who enjoys designing and developing apps and games.<br/>-->
<!--      </div>-->

<!--      <div style="margin-top: 20px;">I've created and contributed heavily to <router-link to="/other-projects">Apps </router-link>and <router-link to="/game-projects">Games</router-link> and worked with Unity and other tech <stacks>  </stacks>.</div>-->

<!--      <div style="margin-top: 40px;">If I'm not busy crafting my next masterpiece, you can find me chugging coffee and scouring the internet for the memes. You can reach me at <a href="mailto:hurshrao@gmail.com">hurshrao@gmail.com</a> or through <router-link to="/contact">here</router-link>.</div>-->

      <h2 style="line-height: 2">I'm <strong>Vaidik Shah</strong>, an ML engineer exploring AI and LLMs.<br>I thrive on developing intelligent systems that solve real-world problems, blending my ML expertise with a deep passion for AI innovation.</h2>
      <div></div>
    </div>

    <div class="photo">
      <img src="/img/vaidik.jpg" alt="Avatar" height="240" width="250" />

    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 30px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>