<template>
    <div class="js-image-swiper custom-image-swiper  custom-image-swiper-single" data-images="1">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="list in lists">
                    <div class="swp-page">
                        <a class="js-no-follow" :href="list.clickUrl">
                            <img class="goods-main-photo fadeIn" :src="list.img">
                        </a>
                    </div>
        
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'swiper',
    data(){
        return {
            
        }
    },
    props:['lists'],
    mounted(){
        new swiper('.swiper-container',{
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 2000,
                    }
            })
    }
}
</script>
<style>

</style>
