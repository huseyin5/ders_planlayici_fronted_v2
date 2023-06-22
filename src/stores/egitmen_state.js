import {defineStore} from "pinia";
import {useYukleniyorState} from "@/stores/yukleniyor_state";
import axios from "axios";

export const useEgitmenlerState = defineStore('egitmen', {
    state: () => ({
        egitmenler: [],
        seciliEgitmen: null
    }),
    actions: {
        yukle() {
            const load = useYukleniyorState();
            load.yuklemeBasla();
            this.seciliEgitmen = null;
            axios.get('http://127.0.0.1:5000/api/v1/egitmen')
                .then((response) => {
                    this.egitmenler = response.data;
                    load.yuklemeBitir();
                })
        },
        egitmenEkle(egitmen) {
            axios.post('http://127.0.0.1:5000/api/v1/egitmen/', egitmen)
                .then((response) => {
                    const egitmen = response.data;
                    console.log(egitmen);
                    //this.egitmenler.push(egitmen);
                    this.yukle();
                })
        },
        egitmenSil(egitmen) {
            axios.delete('http://127.0.0.1:5000/api/v1/egitmen' + egitmen["egitmen_id"])
                .then((response) => {

                    const egitmen = response.data;
                    console.log(egitmen);
                    this.yukle();
                })
        }
    }
});