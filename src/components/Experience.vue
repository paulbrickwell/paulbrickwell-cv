<template>
  <div class="experience">
    <h3 class="title">Experience</h3>
    <Freelance />
    <CraigTaylorEquipment />
    <Brickwell />
    <ImmediateCare />
  </div>
</template>

<script>
import Freelance from "./experience/Freelance.vue";
import CraigTaylorEquipment from "./experience/CraigTaylorEquipment.vue";
import Brickwell from "./experience/Brickwell.vue";
import ImmediateCare from "./experience/ImmediateCare.vue";

export default {
  components: {
    Freelance,
    CraigTaylorEquipment,
    Brickwell,
    ImmediateCare,
  },
};
</script>
