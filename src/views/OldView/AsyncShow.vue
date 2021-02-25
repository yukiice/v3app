<template>
  <div>
    <h2>
      {{ result }}
    </h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup(props, context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({
          result: 42,
        });
      }, 3000);
    });
  },
});
</script>

<style lang="scss" scoped>
</style>