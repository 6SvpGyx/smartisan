<template>
	<div class="car">
		<div>
			<p class="caeHead">购物车</p>
			<div class="remove"
			v-show="recommendIsShow"
			 @click="removeShop">删除</div>
		</div>
		<ShopItem v-show="carIsShow"></ShopItem>
		<Nologin v-show="loginIsShow"></Nologin>
		<relevantRecommend v-show="recommendIsShow"></relevantRecommend>
	</div>
	
</template>

<script>
 import Nologin from './noLogin/noLogin'
 import ShopItem from './shopItem/shopItem'
 import relevantRecommend from './relevantRecommend/relevantRecommend'
import { MessageBox } from 'mint-ui';
 export default {
 	data(){
 		return {
 			carIsShow:false,
 			loginIsShow:true
 		}
 	},
 	components:{
 		Nologin,
 		ShopItem,
 		relevantRecommend
 	},
 	created(){
 		let token = window.localStorage.getItem('token')
 		if ( token == null ){
 			this.carIsShow = false
 			this.loginIsShow = true
 		}else{
 			this.carIsShow = true
 			this.loginIsShow = false
 		}
 	},
 	methods:{
 	
 		removeShop(){
 			if( this.$store.getters.changeNum==0 ){
		 		MessageBox('提示', '请选择要删除的商品');
		 	}else{
		 		MessageBox.confirm('确定删除吗?').then(action => {
	  				this.$store.commit('remove')
				}).catch(() => {
					
                });
		 	}
 			
 			
 		}
 	},
		computed:{
			recommendIsShow(){
				let token = window.localStorage.getItem('token')
				if ( !token||token==null||this.$store.state.dataList.length==0 ){
					return false
				}else{
					return true
				}
			
			}
		}

 }
</script>
<style>
	.car{
		padding-top:2.8125rem;
		padding-bottom:6.7rem;
	}
	.remove{
		width:3rem;
		height:2rem;
		border:1px solid #6d8ca3;
		border-radius:.5rem;
		margin-top:.3rem;
		color:#fff;
		text-align:center;
		line-height:2rem;
		position:fixed;
		top:0;
		right:0;
	}
	.caeHead{
		width:100%;
		height:2.8125rem;
		background:#000;
		text-align:center;
		font-size:1rem;
		line-height:2.8125rem;
		color:#fff;
		font-weight:700;
		position:fixed;
		top:0;
		left:0;
	}
</style>