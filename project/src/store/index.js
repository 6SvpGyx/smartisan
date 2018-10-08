import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let dataList = JSON.parse(localStorage.getItem('carData'))||[]
const store = new Vuex.Store({
	state : {
		LOADING:false,
        userInfo:[],
        dataList,
        userNumber:'',
        isEdit:false,
        edit:true,
        adressInfo:'',
        adressName:'',
        adressTel:'',
        adressDatail:''

	},
	mutations: {
        showLoading(state){
            state.LOADING = true    
        },
        hideLoading (state) {
            state.LOADING = false
        },
        addCar(state,plaload){
            console.log(state.dataList)
            let items = state.dataList.find(item=>item.info == plaload.shopInfo)
            if(items&&plaload.num==1){
                items.num++
            }else if(items&&plaload.num>1){
                items.num+=plaload.num
            }else{
                state.dataList.push({
                    title:plaload.shopTitle,
                    info:plaload.shopInfo,
                    num:plaload.num,
                    checked:false,
                    price:plaload.price,
                    imgURL:plaload.imgURL
                })

            }
            localStorage.setItem('carData',JSON.stringify(state.dataList))
        },
        changeChecked(state,plaload){
            console.log(state.totalMoney)
            let items = state.dataList.find( (item) =>item.info ==  plaload.checkItem)
            console.log(items.checked)
            items.checked = !items.checked
            localStorage.setItem('carData',JSON.stringify(state.dataList))
        },
        checkAll(state,plaload){

            state.dataList.forEach(item=>item.checked = !plaload.isCheckedAll)
            localStorage.setItem('carData',JSON.stringify(state.dataList))
        },
        remove(state){
            let newArr = []
           newArr = state.dataList.filter(item=>item.checked)
            newArr.forEach(item=>{
                let index = state.dataList.indexOf(item)
                state.dataList.splice(index,1)
                console.log(state.dataList)
            })
            localStorage.setItem('carData',JSON.stringify(state.dataList))
        }
    },
    getters:{
        changeNum(state){
                return state.dataList.filter(item=>item.checked).length
            },
            totalMoney(state){
                return state.dataList.reduce((item1,item2)=>{
                    if ( item2.checked ){
                        return  {
                            totalMoney: item1.totalMoney + item2.num * item2.price
                        }
                    }else{
                        return{
                            totalMoney: item1.totalMoney
                        } 
                    }
                },{
                    totalMoney: 0
                })
            }
    }
})

// 检测store里面的state数据
// 第二个回调函数的参数是第一个函数的返回值
// 当坚持到值发生变化时向localStorage里面重新存储数据
// deep 深度检测
// store.watch( (state)=>{
//     return {
//         dataList:state.dataList
//     }
// },(newValue)=>{
    
// },{
//     deep:true
// } )
export default store

