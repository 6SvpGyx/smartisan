<template>
	<div class="newShop">
		<router-link
		tag="div"
		:to="{name:'HotShop',params:{num:2}}"
		 class="newShopHead">
			<h2 class="newShopTitle">新品首发</h2>
			<span class="goToIco"></span>
		</router-link>
		<ul class="newShopContent">
			<router-link
			 v-for="item,index in newShopData"
			 :key='index'
			 tag="li"
			 :to="{name:'Bannerphone',params:{ids:item.id}}"
			 >
				<div class="newShopImg">
					<img :src="item.sku_info[0].ali_image" />
				</div>
				<div class="itemContent">
					<h3 class="itemTitle">{{item.product_info.product_name}}</h3>
					<p class="itemSubTitle">{{item.shop_info.spu_sub_title}}</p>
					<div class="itemMoney">
						<span>￥</span>
						<span>{{item.price}}</span>
					</div>
				</div>
			</router-link>
			
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				idData:[],
				newShopData:[]
			}
		},
		async created(){
			let {data} = await this.$api.getIndexDataA()
			console.log(data.floors[2].dataList)
			this.idData = data.floors[2].dataList.map( item=>item.slice(0,7) )

			let dataList = await this.$api.getBannerPhone(this.idData)
			this.newShopData = dataList.data.data.list
		}
	}
</script>

<style>
	.newShop{
		box-sizing:border-box;
		margin-top:.6rem;
		background:#fff;
	}
	.newShopHead{
		width:100%;
		height:2.5rem;
		position:relative;
		padding:0 .6rem 0 .6rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.newShopHead .newShopTitle{
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
	.newShopContent{
		padding:0 0 .9rem 1.5rem;
		overflow:hidden;
	}
	.newShopContent li{
		width:45%;
		float:left;
		margin-right:.8rem;
		margin-top:1rem;
	}
	.newShopContent .newShopImg{
		width:100%;
		height:10.9375rem;
		border:1px solid #d6c7c7;
		border-radius:.5rem;
	}
	.newShopContent .newShopImg img{
		width:100%;
		height:100%;
	}
	.newShopContent .itemContent{
		width:100%;
		padding-left:.7rem;
		box-sizing:border-box;

	}
	.newShopContent .itemContent .itemTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.9rem;
		color:#333;
		font-weight:900;
		margin-top:.5rem;
	}
	.newShopContent .itemContent .itemSubTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.8rem;
		color:#7f7f7f;
		line-height:1.7;
	}
	.newShopContent .itemContent .itemMoney{
		color:#d44d44;
		font-weight:700;
		font-size:.8rem;
	}
</style>