import './index.css'
import '@/modules/css/common.css'
import Vue from 'vue'
import axios from 'axios'
import url from '@/modules/js/api.js'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

Vue.$http=axios
Vue.filter('priceFilter',(value)=>{
    let afterDotNum =value.toString().split('.')[1].length
    if(afterDotNum!==2){
        return value.toFixed(2)
    }else{
        return value
    }
})
new Vue({
    el:'#app',
    data:{
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false,
        allLoaded:false,
    },
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
        }  
    },
    created(){
        this.getHotLists()
    }
})