<template>
  <!-- <div>
    <h1>
      {{ count }}
    </h1>
    <h2>
      {{ double }}
    </h2>
    <div @click="increase" class="btn">+1</div>
  </div> -->

  <div>
    <h1>
      {{ count }}
    </h1>
    <h2>
      {{ double }}
    </h2>

    <h1>
      {{ x }}
    </h1>
    <h1>
      {{ y }}
    </h1>
    <div class="btn" @click="increase">+++</div>
    <modal :isOpen="modalIsOpen" @close-modal="closeModal"> my modal！ </modal>
    <div @click="openModal">打开modal</div>
    <br />
    <br />
    <!-- 异步组件 -->
    <Suspense>
      <template #default>
        <async-show> </async-show>
      </template>
      <template #fallback>
        <h2>loading</h2>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, onMounted, onUnmounted } from "vue";
import Modal from "./Modal.vue";
import AsyncShow from "./AsyncShow.vue";

interface dataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  name: "Home",
  components: {
    Modal,
    AsyncShow,
  },
  setup() {
    // const count = ref(0)
    // const increase = ()=>{
    //     count.value++
    // }
    // const double = computed(()=>{
    //    return count.value * 2
    // })
    // return {
    //     count,
    //     increase,
    //     double
    // }

    const data: dataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
    });

    const x = ref(0);
    const y = ref(0);
    const updatedMouse = (e: MouseEvent) => {
      x.value = e.pageX;
      y.value = e.pageY;
    };
    onMounted(() => {
      document.addEventListener("click", updatedMouse);
    });
    onUnmounted(() => {
      document.removeEventListener("click", updatedMouse);
    });

    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const closeModal = () => {
      modalIsOpen.value = false;
    };

    // 使得reactive变得依然具有响应性
    const refData = toRefs(data);
    return {
      ...refData,
      x,
      y,
      modalIsOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 2vh;
  width: 20vw;
  height: 5vh;
  background-color: skyblue;
}
</style>