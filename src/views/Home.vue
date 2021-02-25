<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "@/components/Column/ColumnList.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "bilibili",
    description: "BiliBili",
    avatar:
      "https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/%E5%AF%BC%E8%88%AAList_bilibili.png",
  }, 
  {
    id: 2,
    title: "qq",
    description: "Tencent",
    avatar:
      "https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/%E5%AF%BC%E8%88%AAList_%E8%85%BE%E8%AE%AF.png",
  },
];
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup(props, context) {
    return {
      list: testData,
    };
  },
});
</script>

<style >
</style>