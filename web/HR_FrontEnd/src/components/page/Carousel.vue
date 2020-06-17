<template>
    <div>
        <div class="top_carousel">
            <div class="top_background"></div>
            <div class="carousel">
                <Banner :slideLists="carouselList" :isAutoplay="true"></Banner>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from './../common/Banner'
export default {
    data(){
        return{
            carouselList: {}
        }
    },
    components:{
        Banner
    },
    mounted(){
        this.getCarouselImage();
    },
    methods:{
        getCarouselImage(){
            let _this = this;
            this.$store.dispatch('GetCarouselImage').then((result)=> { 
                console.log(result);
                // this.loading = false;
                if(result && result.status == "success"){
                    this.carouselList = result.list;
                }
                return false;
            }).catch(err=>{
                // this.loading = false;
                this.$message.error(err.message);
            }); 
        },
    }
}
</script>

<style lang="scss" scoped>
  .top_carousel {
        width: 100%;
        position: relative;
    }

    .top_background {
        position: absolute;
        width: 100%;
        height: 100px;
        background-color: #121313;
    }

    .carousel {
        padding-top: 10px;

    }
</style>


