import './category.css'
import 'css/common.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';
import foot from 'components/foot.vue'


new Vue({
    el:'#app',
    data(){
        return {
            topLists:null,
            nowtab:0,
            rank:[],
            subLists:null,
        }
    },
    components:{
        foot
    },
    created(){
        this.getTopList()
        this.getRank()
        this.getSubList()
    },
    methods:{
        changeTab(index){
            this.nowtab=index
        },
        getTopList(){    
            axios.get(url.topList).then(res=>{
                this.topLists=res.data.lists
                
            }).catch(err=>{
                console.log(err)
            })
        },
        getRank(){
            axios.get(url.rank).then(res=>{
                this.rank=res.data.data
            }).catch(err=>{
                console.log(err)
            })
        },
        getSubList(){
            axios.get(url.subList).then(res=>{
                this.subLists=res.data.data
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },
    }
    
})