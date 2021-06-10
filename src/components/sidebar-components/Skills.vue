<template>
  <div class="skills">
    <h3 class="title">Skills</h3>
    <ul class="skills-list">
      <li>IT Infrastructure Management</li>
      <li>IT Operations</li>
      <li>IT Strategy</li>
      <li>Network Design</li>
    </ul>
    <ul class="skills-list">
      <li>HTML / CSS<Rating5 /></li>
      <li>JavaScript<Rating3 /></li>
      <li>Vue.js<Rating2 /></li>
      <li>React<Rating1 /></li>
    </ul>
  </div>
</template>

<script>
import Rating5 from "../utilities/Rating5.vue";
import Rating3 from "../utilities/Rating3.vue";
import Rating2 from "../utilities/Rating2.vue";
import Rating1 from "../utilities/Rating1.vue";

export default {
  components: {
    Rating5,
    Rating3,
    Rating2,
    Rating1,
  },
};
</script>
