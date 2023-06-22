import {defineStore} from "pinia";
import {useYukleniyorState} from "@/stores/yukleniyor_state";
import axios from "axios";

export const useSiniflarState = defineStore('sinif', {
    state:()=>({
        siniflar:[],
        seciliSinif:null
    }),
    actions:{
        yukle(){
          const load=useYukleniyorState();
          load.yuklemeBasla();
          this.seciliSinif=null;
          axios.get('http://127.0.0.1:5000/api/v1/sinif')
              .then((response)=>{
                  this.siniflar=response.data;
                  load.yuklemeBitir();
              })
        },
        sinifEkle(sinif) {
            axios.post('http://127.0.0.1:5000/api/v1/sinif/', sinif)
                .then((response) => {
                    const sinif = response.data;
                    console.log(sinif);
                    this.siniflar.push(sinif);
                    // this.yukle();
                })
        },
        sinifSil(sinif) {
            axios.delete('http://127.0.0.1:5000/api/v1/sinif' + sinif["sinif_id"])
                .then((response) => {
                    const sinif = response.data;
                    console.log(sinif);
                    this.yukle();
                })
        }
    }
});