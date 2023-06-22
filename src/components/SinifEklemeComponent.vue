<script setup>

import {ref} from "vue";
import {useSiniflarState} from "@/stores/sinif_state";

const sinifStore = useSiniflarState();

const eklenecek_sinif = ref({
  sinif_adi: ''
});

function sinifKaydet() {
  sinifStore.sinifEkle(eklenecek_sinif.value);
  eklenecek_sinif.value = {
    sinif_id: "",
    sinif_adi: ""
  };
}

</script>

<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h1>Yeni Sınıf Bilgisi Ekle</h1>
      <hr class="style">
      <div class="row">
        <div class="col-3">
          <label for="sinifAdi">Sınıf Adı</label>
        </div>
        <div class="col-9">
          <input type="text" placeholder="Sınıf Adı Giriniz" v-model="eklenecek_sinif.sinif_adi">
        </div>
      </div>
      <div class="right">
        <button class="btn" @click="sinifKaydet">Kaydet</button>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<style scoped>

</style>