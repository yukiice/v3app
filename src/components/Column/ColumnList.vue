<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {},
});
</script>

<style lang="scss" scoped>
</style>