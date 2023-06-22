<script setup>
import {useEgitmenlerState} from "@/stores/egitmen_state";
import {ref} from "vue";

const egitmenStore = useEgitmenlerState();
const ekleme_acik=ref(false);
const eklenecek_egitmen = ref({
  egitmen_id:"",
  egitmen_adi: "",
  egitmen_soyadi: "",
  egitmen_alani: ""
});

function egitmenKaydet() {
  egitmenStore.egitmenEkle(eklenecek_egitmen.value);
  egitmenIptal();
}

function egitmenIptal(){
  eklenecek_egitmen.value.egitmen_adi= "";
  eklenecek_egitmen.value.egitmen_soyadi= "";
  eklenecek_egitmen.value.egitmen_alani= "";
  ekleme_acik.value = false;
}

</script>

<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h1>Yeni Egitmen Ekle</h1>
      <hr class="style">
      <div class="row">
        <div class="col-3">
          <label for="egitmen_adi">Eğitmen Adı</label>
        </div>
        <div class="col-9">
          <input type="text" placeholder="Eğitmen Adı Giriniz" v-model="eklenecek_egitmen.egitmen_adi">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="egitmen_soyadi">Eğitmen Soyadı</label>
        </div>
        <div class="col-9">
          <input type="text" placeholder="Eğitmen Soyadı Giriniz" v-model="eklenecek_egitmen.egitmen_soyadi">

        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="egitmen_alani">Eğitmen Alanı</label>
        </div>
        <div class="col-9">
          <input type="text" placeholder="Eğitmen Alanını Giriniz" v-model="eklenecek_egitmen.egitmen_alani">
        </div>
      </div>
      <div class="right">
        <button class="btn" @click="egitmenKaydet">Kaydet</button>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<style scoped>

</style>