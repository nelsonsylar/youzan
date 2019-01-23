import './search.css'
import 'css/common.css'
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import velocity from 'velocity-animate'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

let {id,keyword}=qs.parse(location.search.substr(1))
new Vue({
    el:'.container',
    data:{
        pageNum:1,
        pageSize:8,
        listData:null,
        isShow:false,
        keyword,
        allLoaded:false,
        loading:false,
    },
    mixins:[mixin],
    methods:{
        getList(){
            this.loading = true;
            if(this.allLoaded){
                return
            }else{
                axios.get(url.list,{
                    pageNum:this.pageNum, 
                    pageSize:this.pageSize,
                    id,
                    keyword,
                }).then((res)=>{   
                    this.pageNum++   
                    if(res.data.lists.length<8){
                        this.allLoaded=true
                    }
                    if(this.lists==null){
                        //第一次获取lists
                        this.listData=res.data.lists
                    }else{
                        //后续获取到的lists
                        this.listData=this.listData.concat(res.data.lists)
                         
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }
            this.loading=false
        },
        showTop(){
            var roll = document.body.scrollTop || document.documentElement.scrollTop
            if(roll>80){
                this.isShow=true
            }else{
                this.isShow=false
            }
        },
        toTop(){
            velocity(document.body,'scroll',{duration:300})
        },
    },
        
    created(){
        
        this.getList()
    },
    
})