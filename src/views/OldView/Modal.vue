<template>
  <teleport to="#modal">
    <div class="center" v-if="isOpen">
      <slot> this is modal </slot>
      <div @click="btnclick" class="btncss">hello</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-modal": null,
  },
  setup(props, context) {
    const btnclick = () => {
      context.emit("close-modal");
    };
    return {
      btnclick,
    };
  },
});
</script>

<style lang="scss" scoped>
.btncss {
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  margin-left: 10px;
}
.center {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  background-color: #f2f2ff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}
</style>