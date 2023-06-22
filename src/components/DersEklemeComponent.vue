<script setup>
import {ref} from "vue";
import {useDerslerState} from "@/stores/ders_state";

const dersStore = useDerslerState();
const ekleme_acik=ref(false);
const eklenecek_ders = ref({
  ders_adi: '',
  ders_saati: ''
});

function dersKaydet() {
  debugger;
  dersStore.dersEkle(eklenecek_ders.value);
  dersİptal();
}

function dersİptal() {
  eklenecek_ders.value.ders_adi = "";
  eklenecek_ders.value.ders_saati = "";
  ekleme_acik.value = false;
}

</script>

<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h1>Yeni Ders Ekle</h1>
      <hr class="style">
      <div class="row">
        <div class="col-3">
          <label for="dersAdi">Ders Adı</label>
        </div>
        <div class="col-9">
          <input type="text" placeholder="Ders Adı Giriniz" v-model="eklenecek_ders.ders_adi">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="dersSaati">Ders Saati</label>
        </div>
        <div class="col-9">
          <input type="text" placeholder="Ders Saati Giriniz" v-model="eklenecek_ders.ders_saati">
        </div>
      </div>
      <div class="right">
        <button class="btn" @click="dersKaydet">Kaydet</button>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<style scoped>

</style>