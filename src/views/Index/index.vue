<template>
  <div class="text">首页</div>
  <button @click="add">按钮</button>
  <div>{{ c }}</div>
  <div>{{ url }}</div>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/store/modules/user.ts'
import { ref } from 'vue';

const store = useUserStore();

let c = ref(store.count);
let url = ref((window as any).baseUrl)

function add() {
  store.count++;
  c.value = store.count;
}

</script>

<style  lang='scss' scoped>
.text {
  color: red;
  font-size: 20px;
  font-weight: bold;
}
</style>
