<script setup>
</script>

<template>
  <div class="topnav">
    <div class="col-1 col-s-3"></div>
    <div class="col-10 col-s-6">
      <div class="left">
        <router-link to="/">Ders Planlayıcı</router-link>
      </div>
      <div class="right">
        <router-link to="/">Ders Planlayıcı</router-link>
        <router-link to="/ders-ekle">Ders Ekle</router-link>
        <router-link to="/egitmen-ekle">Eğitmen Ekle</router-link>
        <router-link to="/sinif-ekle">Sınıf Bilgisi Ekle</router-link>
      </div>
    </div>
    <div class="col-1 col-s-3"></div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
br.space {
  margin-top: 3px;
  margin-bottom: 3px;
  color: inherit;
}
</style>
