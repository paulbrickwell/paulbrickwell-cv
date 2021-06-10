<template>
  <div class="site">
    <div class="page">
      <Sidebar v-scrollanimation />
      <Experience v-scrollanimation class="d600" />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Experience from "./components/Experience.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Paul Brickwell",
    };
  },
  components: {
    Sidebar,
    Experience,
  },
};
</script>
