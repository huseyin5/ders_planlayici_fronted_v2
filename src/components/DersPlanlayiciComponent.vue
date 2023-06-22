<script setup>
import {useYukleniyorState} from "@/stores/yukleniyor_state";
import {useDerslerState} from "@/stores/ders_state";

const yukleme = useYukleniyorState();
const dersStore = useDerslerState();
</script>

<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div class="loader" v-if="yukleme.yukleniyor"></div>
      <div class="col-12">
        <h1>Ders Planlayıcı</h1>
        <hr class="style">

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>