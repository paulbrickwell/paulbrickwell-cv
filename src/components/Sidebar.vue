<template>
  <div class="sidebar">
    <div class="content">
      <Identity />
      <Contact />
      <Intro />
      <Education />
      <Skills />
    </div>
    <div>
      <Social />
      <Download />
    </div>
  </div>
</template>

<script>
import Identity from "./sidebar-components/Identity.vue";
import Contact from "./sidebar-components/Contact.vue";
import Intro from "./sidebar-components/Intro.vue";
import Education from "./sidebar-components/Education.vue";
import Skills from "./sidebar-components/Skills.vue";
import Social from "./sidebar-components/Social.vue";
import Download from "./sidebar-components/Download.vue";

export default {
  components: {
    Identity,
    Contact,
    Intro,
    Education,
    Skills,
    Social,
    Download,
  },
};
</script>
