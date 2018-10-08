
import axios from 'axios'


let instace = axios.create({
	baseURL:'https://www.smartisan.com/'
})
 //首页轮播图，新品...
 export function getIndexDataA(){
 	return axios.get('https://resource.smartisan.com/marketing/mobile/index_753de430a421827d8cb0442a01a87ccf.json')
 }
 //https://www.smartisan.com/product/spus?category_id=77&page=1&page_size=20&sort=sort
 //https://www.resource.smartisan.com/product/spus?&category_id=77&page=1&page_size=20&sort=sort 

//https://www.smartisan.com/product/promotions?with_num=true

//请求首页每个导航
 export function getNavItem(data){
 	let defaults = {
 		category_id:'',
 		page:1,
 		page_size:20,
 		sort:'sort'
 	}
 	Object.assign(defaults,data)
 	return axios.get('/api/product/spus?',{params:defaults})
 }



//请求banner图的每个item
 export function getBannerItem(ids){
 	return instace.get('product/spus',{params:ids})
 }

//bannerItem的phone页面
 export function getBannerPhone(id){
 	//https://www.smartisan.com/product/spus?ids=1000464
 	return axios.get(`/api/product/spus?ids=${id}`)
 }



//分类页面
  export function getTypeData(){
  //https://resource.smartisan.com/marketing/mobile/category_a197fb6f11fe50b6032ab211e9f8916d.json
  		return axios.get('https://resource.smartisan.com/marketing/mobile/category_a197fb6f11fe50b6032ab211e9f8916d.json')
  }


 //https://www.smartisan.com/product/skus?ids=100051704,100046406,100040601,100035101,100047701,100047001,100042801,100037801,100036002,100053001,100042205,100033802,100051702,100046401,100040601,100040604,100035113,100047901,100047401,100040501,100033802,100041701,100045101,100026601,100026701,100027004,100035104,100035111,100035202,100035703,100039702,100040910&with_stock=true&with_spu=true
//购物车相关推荐
//

//搜索页面
//https://shopapi.smartisan.com/v1/search/suggest?keyword=1
export function searchPath(keyword){
  //https://shopapi.smartisan.com/v1/search/suggest?keyword=%E5%9D%9A%E6%9E%9C
  return axios.get(`search/v1/search/suggest?keyword=${keyword}`)
}

//搜索每个item
 export function searchItem(value){
  //https://shopapi.smartisan.com/v1/search/result?keyword=ACIL%20E1%20%E9%A2%88%E6%8C%82%E5%BC%8F%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA&page=1&size=20&sort=0
  return axios.get(`/search/v1/search/result?keyword=${value}&page=1&size=20&sort=0`)
 }

 //作为vue的插件
 export default {
 	install(Vue){
 		Vue.prototype.$api = {
 			getIndexDataA,
 			getNavItem,
 			getBannerPhone,
 			getTypeData,
 			searchPath,
 			searchItem
 		}
 	}
 }