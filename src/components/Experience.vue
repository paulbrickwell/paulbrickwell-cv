<template>
  <div class="experience">
    <h3 class="title">Experience</h3>
    <CraigTaylorEquipment />
    <Brickwell />
    <ImmediateCare />
  </div>
</template>

<script>
import CraigTaylorEquipment from "./experience/CraigTaylorEquipment.vue";
import Brickwell from "./experience/Brickwell.vue";
import ImmediateCare from "./experience/ImmediateCare.vue";

export default {
  components: {
    CraigTaylorEquipment,
    Brickwell,
    ImmediateCare,
  },
};
</script>
