import foot from 'components/Foot.vue'
let mixin={
    filters:{
        priceFilter(value){
            let afterDotNum =value.toString().split('.')[1].length
            if(afterDotNum!==2){
                return value.toFixed(2)
            }else{
                return value
            }
        }
    },
    components:{
        foot
    }
}
export default mixin
