let url={
 hotLists:'/index/hotLists',
 banner:'/index/banner',
 topList:'/category/topList',
 rank:'/category/rank',
 subList:'/category/subList',
 list:'/search/list',
}
//用于开发环境与真实环境切换
let host='http://rap2api.taobao.org/app/mock/7058'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key]=host+url[key]
    }
}

export default url