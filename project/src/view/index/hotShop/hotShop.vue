<template>
	<div class="hotShop">
		<router-link
		tag="div"
		:to="{name:'HotShop',params:{num:0}}"
		 class="hotShopHead">
			<h2 class="hotShopTitle">热销商品</h2>
			<span class="goToIco"></span>
		</router-link>
		<ul class="hotShopContent">
			<router-link 
			v-for="item,index in hotShopList"
			:key="index"
			tag="li"
			:to="{name:'Bannerphone',params:{ids:item.id}}"
			>
				<img :src="item.sku_info[0].ali_image" />
				<h2 class="hotItemTitle">{{item.product_info.product_name}}</h2>
				<h4 class="hotItemSubTitle">{{item.shop_info.spu_sub_title}}</h4>
				<div class="hotItemMoney">
					<span>￥</span>
					<span>{{item.price}}</span>
				</div>
			</router-link>
		</ul>
	</div>
</template>

	<script>
		export default {
			data(){
				return {
					idConfig : [],
					hotShopList:[]
				}
			},
			async created(){
				let {data} = await this.$api.getIndexDataA()
				this.idConfig = data.floors[0].dataList.map( (item) => item.slice(0,7) )

				let dataList = await this.$api.getBannerPhone(this.idConfig)
				this.hotShopList = dataList.data.data.list

			}
		}
	</script>

<style>
	.hotShop{
		box-sizing:border-box;
		margin-top:.6rem;
		background:#fff;
	}
	.hotShopHead{
		width:100%;
		height:2.5rem;
		position:relative;
		padding:0 .6rem 0 .6rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.hotShopHead .hotShopTitle{
		line-height:2.5rem;
		font-size:.95rem;
		font-weight:700;
		color:#666;
	}
	.goToIco{
		position:absolute;
		top:30%;
		right:.6rem;
		display:block;
		width:1rem;
		height:1rem;
		background:url(../../../../static/img/goToIco.png) no-repeat 40%;
	}
	.hotShop .hotShopContent{
		display:-webkit-box;
		overflow-y:hidden;
		overflow-x:auto;
		padding:0 .6rem 1rem 0;
	}
	.hotShop .hotShopContent li{
		width:36%;
		padding-right:.8rem;
	}
	.hotShopContent img{
		display:block;
		width:100%;
	}
	.hotShopContent .hotItemTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.9rem;
		text-align:center;
		font-weight:600;
	}
	.hotShopContent .hotItemSubTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.8rem;
		line-height:1.5;
		color:#7f7f7f;
		text-align:center;
	}
	.hotItemMoney{
		color:#d44d44;
		font-weight:700;
		text-align:center;
		line-height:1.5;
		margin-top:.4rem;
	}
</style>