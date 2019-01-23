import foot from 'components/Foot.vue'
let mixin={
    filters:{
        priceFilter(value){   
                if(value.toString().indexOf('.')!==-1){
                    let afterDotNum =value.toString().split('.')[1].length
                    if(afterDotNum!==2){
                        return parseFloat(value).toFixed(2)
                    }else{
                        return value
                    }
                }else{
                    return value+'.00'
                } 
        }
    },
    components:{
        foot
    },
    methods:{
        getInfo(list){
            location.href=`search.html?id=${list.id}&keyword=${list.name}`
        }
    }
}
export default mixin
