<template>
  <div class="container">
    <h1 class="heading">Hello!</h1>

    <div class="content">
      <div class="paragraph">
        <h2>
          I'm <strong>Vaidik Shah</strong>, an ML engineer exploring AI and LLMs.<br />
          I thrive on developing intelligent systems that solve real-world problems, blending my ML expertise with a deep passion for AI innovation.
        </h2>
      </div>

      <div class="photo">
        <img src="/img/vaidik.jpg" alt="Avatar" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
  margin-bottom: 80px;
}

.heading {
  font-size: 8vw;
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paragraph {
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  padding: 0 16px;
  margin-bottom: 30px;
}

.photo img {
  max-width: 80%;
  height: auto;
  border-radius: 12px;
}

/* Tablet and above */
@media screen and (min-width: 768px) {
  .content {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }

  .paragraph {
    text-align: left;
    font-size: 1.2rem;
    padding-right: 40px;
  }

  .photo img {
    width: 250px;
    height: auto;
  }
}
</style>
