import {defineStore} from "pinia";
import {useYukleniyorState} from "@/stores/yukleniyor_state";
import axios from "axios";

export const useDerslerState = defineStore(
    'ders',
    {
        state: () => ({
            dersler: [],
            seciliDers: null
        }),
        actions: {
            yukle() {
                const load = useYukleniyorState();
                load.yuklemeBasla();
                this.seciliDers = null;
                axios.get('http://127.0.0.1:5000/api/v1/ders')
                    .then((response) => {
                        this.dersler = response.data;
                        load.yuklemeBitir();
                    })
            },
            dersEkle(ders) {
                axios.post('http://127.0.0.1:5000/api/v1/ders/',ders)
                    .then((response) => {
                        const ders = response.data;
                        console.log(ders);
                        this.yukle();
                    })
            },
            dersSil(ders) {
                axios.delete('http://127.0.0.1:5000/api/v1/ders' + ders["ders_id"])
                    .then((response) => {
                        const ders = response.data;
                        console.log(ders);
                        this.yukle();
                    })
            }
        }
    });