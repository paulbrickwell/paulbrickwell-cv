<template>
  <div class="skills">
    <h3 class="title">Skills</h3>
    <ul class="skills-list">
      <li>IT Infrastructure Management</li>
      <li>IT Operations</li>
      <li>IT Strategy</li>
      <li>Network Design</li>
    </ul>
    <ul class="skills-list with-rating">
      <li><Rating5 /> HTML / CSS</li>
      <li><Rating4 /> JavaScript</li>
      <li><Rating4 /> Vue.js</li>
      <li><Rating1 /> React</li>
    </ul>
  </div>
</template>

<script>
import Rating5 from "../utilities/Rating5.vue";
import Rating4 from "../utilities/Rating4.vue";
import Rating1 from "../utilities/Rating1.vue";

export default {
  components: {
    Rating5,
    Rating4,
    Rating1,
  },
};
</script>
