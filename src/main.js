import {createApp} from 'vue'
import App from './App.vue'
import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router";
import DersEklemeComponent from "@/components/DersEklemeComponent.vue";
import {createPinia} from "pinia";
import DersPlanlayiciComponent from "@/components/DersPlanlayiciComponent.vue";
import EgitmenEklemeComponent from "@/components/EgitmenEklemeComponent.vue";
import SinifEklemeComponent from "@/components/SinifEklemeComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: DersPlanlayiciComponent},
        {path: '/ders-ekle', component: DersEklemeComponent},
        {path: '/egitmen-ekle', component: EgitmenEklemeComponent},
        {path: '/sinif-ekle', component: SinifEklemeComponent}
    ]
});

const app = createApp(App)
    .use(createPinia())
    .use(router)
app.mount('#app')
