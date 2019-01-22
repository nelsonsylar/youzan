import './index.css'
import 'css/common.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';
// import foot from 'components/Foot.vue'
import swiper from 'components/Swiper.vue'
import mixin from 'js/mixin.js'
Vue.use(InfiniteScroll);

Vue.$http=axios

new Vue({
    el:'#app',
    data:{
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false,
        allLoaded:false,
        banners:null,
    },
    components:{
        swiper,
    },
    mixins:[
        mixin
    ],
    methods:{
        getHotLists(){
            if(this.allLoaded){
                return
            }
            this.loading=true
            axios.get(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then((res)=>{    
                if(res.data.lists.length<6){
                    this.allLoading=true
                }
                if(this.lists==null){
                    //第一次获取lists
                    this.lists=res.data.lists
                }else{
                    //后续获取到的lists
                    this.lists=this.lists.concat(res.data.lists)
                    this.pageNum++   
                }
            }).catch((err)=>{
                console.log(err)
            })
            this.loading=false
        },
        getBaners(){
            axios.get(url.banner).then((res)=>{
                this.banners=res.data.lists
            }).catch((err)=>{console.log(err)})
        }
    },
    created(){
        this.getHotLists()
        this.getBaners()
    }
})
