<template>
    <div class="inicio">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tabla VIP</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Vips</th>
                                    <th scope="col">Tiempo VIP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="vip in vips">
                                    <th scope="row">{{ vip.empresa }}</th>
                                    <th scope="row">{{ vip.diasvip }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="nav-inner">
                <div class="logo">
                    <img src="@/assets/logo.jpg" alt=""/>
                    <a style="width: 4%; height: 10%; position: absolute;" href="/home"></a>
                    <h2>Nisira</h2>  
                </div>
            </div>
            
            <div class="icons">
                <h2>Jose Martinez</h2>
                <span class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698 6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525 1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027 5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994 4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093 21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518 3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475 14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504 19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97 22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595 19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71V12.71ZM12 12C11.2089 12 10.4355 11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686 7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956 3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16 7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z" fill="black"/>
                    </svg>
                </span>
                <span class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.32 9.55L19.43 8.92L20.32 7.14C20.4102 6.95369 20.4404 6.74396 20.4064 6.53977C20.3723 6.33558 20.2758 6.14698 20.13 6L18 3.87C17.8522 3.72209 17.6618 3.62421 17.4555 3.59013C17.2493 3.55604 17.0375 3.58748 16.85 3.68L15.07 4.57L14.44 2.68C14.3735 2.48299 14.2472 2.31163 14.0787 2.18975C13.9102 2.06787 13.7079 2.00154 13.5 2H10.5C10.2904 1.99946 10.0858 2.06482 9.91537 2.18684C9.7449 2.30886 9.61709 2.48138 9.55 2.68L8.92 4.57L7.14 3.68C6.95369 3.58978 6.74397 3.5596 6.53978 3.59364C6.33558 3.62767 6.14699 3.72423 6 3.87L3.87 6C3.72209 6.14776 3.62421 6.33817 3.59013 6.54446C3.55605 6.75074 3.58748 6.96251 3.68 7.15L4.57 8.93L2.68 9.56C2.483 9.62653 2.31163 9.75283 2.18975 9.92131C2.06787 10.0898 2.00155 10.2921 2 10.5V13.5C1.99946 13.7096 2.06482 13.9142 2.18685 14.0846C2.30887 14.2551 2.48138 14.3829 2.68 14.45L4.57 15.08L3.68 16.86C3.58978 17.0463 3.55961 17.256 3.59364 17.4602C3.62767 17.6644 3.72423 17.853 3.87 18L6 20.13C6.14777 20.2779 6.33818 20.3758 6.54446 20.4099C6.75074 20.444 6.96251 20.4125 7.15 20.32L8.93 19.43L9.56 21.32C9.62709 21.5186 9.7549 21.6911 9.92537 21.8132C10.0958 21.9352 10.3004 22.0005 10.51 22H13.51C13.7196 22.0005 13.9242 21.9352 14.0946 21.8132C14.2651 21.6911 14.3929 21.5186 14.46 21.32L15.09 19.43L16.87 20.32C17.0551 20.4079 17.2628 20.4369 17.4649 20.4029C17.667 20.3689 17.8538 20.2736 18 20.13L20.13 18C20.2779 17.8522 20.3758 17.6618 20.4099 17.4555C20.444 17.2493 20.4125 17.0375 20.32 16.85L19.43 15.07L21.32 14.44C21.517 14.3735 21.6884 14.2472 21.8103 14.0787C21.9321 13.9102 21.9985 13.7079 22 13.5V10.5C22.0005 10.2904 21.9352 10.0858 21.8132 9.91537C21.6911 9.7449 21.5186 9.61709 21.32 9.55ZM20 12.78L18.8 13.18C18.5241 13.2695 18.2709 13.418 18.0581 13.6151C17.8452 13.8122 17.6778 14.0533 17.5675 14.3216C17.4571 14.5899 17.4064 14.8789 17.419 15.1688C17.4315 15.4586 17.5069 15.7422 17.64 16L18.21 17.14L17.11 18.24L16 17.64C15.7436 17.5122 15.4627 17.4411 15.1763 17.4313C14.89 17.4215 14.6049 17.4734 14.3403 17.5834C14.0758 17.6934 13.8379 17.8589 13.6429 18.0688C13.4479 18.2787 13.3003 18.5281 13.21 18.8L12.81 20H11.22L10.82 18.8C10.7305 18.5241 10.582 18.2709 10.3849 18.0581C10.1878 17.8452 9.94671 17.6778 9.67842 17.5675C9.41014 17.4571 9.12105 17.4064 8.83123 17.419C8.5414 17.4315 8.25777 17.5069 8 17.64L6.86 18.21L5.76 17.11L6.36 16C6.4931 15.7422 6.56852 15.4586 6.58105 15.1688C6.59357 14.8789 6.5429 14.5899 6.43254 14.3216C6.32218 14.0533 6.15478 13.8122 5.94195 13.6151C5.72912 13.418 5.47595 13.2695 5.2 13.18L4 12.78V11.22L5.2 10.82C5.47595 10.7305 5.72912 10.582 5.94195 10.3849C6.15478 10.1878 6.32218 9.94671 6.43254 9.67842C6.5429 9.41013 6.59357 9.12105 6.58105 8.83122C6.56852 8.5414 6.4931 8.25776 6.36 8L5.79 6.89L6.89 5.79L8 6.36C8.25777 6.49309 8.5414 6.56852 8.83123 6.58105C9.12105 6.59357 9.41014 6.5429 9.67842 6.43254C9.94671 6.32218 10.1878 6.15478 10.3849 5.94194C10.582 5.72911 10.7305 5.47594 10.82 5.2L11.22 4H12.78L13.18 5.2C13.2695 5.47594 13.418 5.72911 13.6151 5.94194C13.8122 6.15478 14.0533 6.32218 14.3216 6.43254C14.5899 6.5429 14.879 6.59357 15.1688 6.58105C15.4586 6.56852 15.7422 6.49309 16 6.36L17.14 5.79L18.24 6.89L17.64 8C17.5122 8.25644 17.4411 8.53735 17.4313 8.82369C17.4215 9.11003 17.4734 9.39513 17.5834 9.65968C17.6934 9.92424 17.8589 10.1621 18.0688 10.3571C18.2787 10.5521 18.5281 10.6997 18.8 10.79L20 11.19V12.78ZM12 8C11.2089 8 10.4355 8.2346 9.77772 8.67412C9.11993 9.11365 8.60724 9.73836 8.30448 10.4693C8.00173 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61217 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8V8ZM12 14C11.6044 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3036 13.1308 10.1522 12.7654C10.0009 12.3999 9.96126 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1156 11.6098 10.0384C11.9978 9.96126 12.3999 10.0009 12.7654 10.1522C13.1308 10.3036 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6044 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z" fill="black"/>
                    </svg>
                </span>
            </div>
        </div>
        <div class="titulo">
            <h1>Clientes VIP</h1>
        </div>

        <div class="main">
            <div class="header-main">
                <div class="fechacliente">
                    <h3>Programar desde</h3>
                    <input type="date">
                    <h3>al</h3>
                    <input type="date">
                </div>

                <div class="btn_header">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openModal">Mostrar tabla VIP</button>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Usuario</th>
                        <th scope="col" v-for="cabecera in cabeceras">{{ formatearfecha(cabecera) }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vip in vips">
                        <th scope="row">{{ vip.usuarioID }}</th>
                        <th scope="row">{{ vip.usuario }}</th>
                        <th scope="row" v-for="fecha in fechas">{{ fecha == vip.fecha?vip.empresa:''}}</th>
                        <!-- <th scope="row" v-for="cabecera in cabeceras">{{ vip[cabecera] = '2024-03-02T05:00:00.000+00:00'?vip.empresa:'no existe' }}</th>         -->
                    </tr>
                </tbody>
            </table>

            <div class="footer_btn">
                <button><a href="/vip">Grabar</a></button>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { Modal } from 'bootstrap';

export default {
  data(){
    return{
      vips:[],
      cabeceras:[],
      fechas:[],
      modal:''
    };
  },
  mounted(){

    this.modal = new Modal(document.getElementById('exampleModal'))

    this.traervips()

    }, methods: {

        openModal() {
            this.modal.show()
        },
        closeModal() {
            this.modal.hide()
        },
        async traervips(){
            const data = await axios.get('http://localhost:8089/api/v1/asignaciones')
            this.vips = data.data
            console.log (this.vips)
            for(let d of this.vips){
                this.cabeceras.push(d.fecha)
                this.fechas.push(d.fecha)
            }
            console.log ("cabeceras", this.cabeceras)

        },
        formatearfecha(fecha){
            return fecha.slice(0, -19)
        }

    }
}

</script>

<style>
.header{
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(1440px - 170px);
    width: 100%;
    margin: auto;
    margin-top: 40px;
}
.header img{
    height: 60px;
}

.logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
}
.logo h2{
    margin-top: 15px;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
}
.logo-home{
    display: flex;
}
.icons{
    display: flex;
    align-items: center;
}
.icons h2{
    font-size: 20px;
    margin-top: 10px;
    font-family: 'Poppins';
    margin-right: 7px;
}
.icons span{
    margin: 0 2px;
    display: inline-block;
    justify-content: center;
    align-items: center;
}
.titulo{
    width: 100%;
    background-color: rgb(255, 192, 103);
    color: black;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    width: 100%;
    height: auto;
    margin-top: 40px;
    padding: 0 100px;
}
.header-main{
    display: flex;
    justify-content: space-between;
}
.fechacliente{
    width: 590px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.fechacliente h3{
    margin: 0;
}
.fechacliente input{
    height: 35px;
    border: none;
    background-color: rgb(255, 192, 103);
    border-radius: 15px;
    padding: 0 10px;
}
.btn_header button{
    background-color: #0f0;
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 152px;
}
.footer_btn{
    display: flex;
    justify-content: end;
}
.footer_btn a{
    text-decoration: none;
    color: black;
}
.footer_btn button{
    background-color: #f00;
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 152px;
    color: #fff;
}
.table {
    margin-top: 20px;
}
</style>