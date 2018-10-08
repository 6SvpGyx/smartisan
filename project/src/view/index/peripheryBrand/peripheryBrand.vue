<template>
	<div class="peripheryBrand">
		<router-link
		tag="div"
		:to="{name:'HotShop',params:{num:8}}"
		 class="peripheryBrandHead">
			<h2 class="peripheryBrandTitle">品牌周边</h2>
			<span class="goToIco"></span>
		</router-link>
		<ul class="peripheryBrandList">
			<li
			 tag="li"
			  v-for="item,index in peripheryBrandData"
			 :key="index"
			 @click="lookItem(item)"
			 >
				<div class="item-left">
					<span class="buyGive">买赠</span>
					<img class="itemPng" :src="item.sku_info[0].ali_image" />
				</div>
				<div class="item-right">
					<h4 class="item-title">{{item.shop_info.spu_mobile_title}}</h4>
					<h3 class="sub_title">{{item.shop_info.spu_mobile_sub_title}}</h3>
					<div class="item-type" v-for="option in item.shop_info.spec_v2[0].spec_values">
						<img :src="option.image"></img>
					</div>
					<div class="money"><span>￥</span>{{item.price}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				idData:[],
				peripheryBrandData:[]
			}
		},
		async created(){
			let {data} = await this.$api.getIndexDataA()
			this.idData = data.floors[8].dataList.slice(0,6).map( item=>item.slice(0,7) )

			let dataList = await this.$api.getBannerPhone(this.idData)
			this.peripheryBrandData = dataList.data.data.list
		},
		methods:{
			lookItem(item){
				this.$router.push({
					name:'Bannerphone',
					params:{ids:item.id}
				})
			}
		}
	}
</script>

<style>
	.peripheryBrand{
		box-sizing:border-box;
		margin-top:.6rem;
		background:#fff;
	}
	.peripheryBrandHead{
		width:100%;
		height:2.5rem;
		position:relative;
		padding:0 .6rem 0 .6rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.peripheryBrandHead .peripheryBrandTitle{
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
	.peripheryBrandList{
		width:100%;
		overflow:hidden;
	}
	.item-left{
		float:left;
		width:42%;
		height:8.75rem;
		margin-right:1.11111rem;
	}
	.peripheryBrandList li{
		height:11.25rem;
		padding:1rem;
		border-bottom:1px solid #ebebeb;
	}
	.buyGive{
		display:block;
		width:2.2rem;
		height:1.1888rem;
		border:1px solid #f0948d;
		border-radius:1rem;
		text-align:center;
		color:red;
		font-size:0.75rem;
		line-height:1.2rem;
	}
	.itemPng{
		width:8.6875rem ;
		height:8.6875rem ;
		vertical-align:middle;

	}
	.item-right{
		margin-top:2.4rem;
		width:50%;
		float:left;
	}
	.item-title{
		width:100%;
		height:1.31111111111rem;
		overflow:hidden;
		font-size:1rem;
		text-overflow:ellipsis;
		white-space:nowrap;
		line-height:1.19rem;
	}
	.sub_title{
		width:100%;
		height:2rem;
		overflow:hidden;
		font-size:0.8rem;
		line-height:2.3rem;
		color:gray
	}
	.item-type{
		margin-left:3px;
		display:inline-block;
		width:.8rem;
		height:.8rem;
		margin-to:hidden;
	}
	.item-type img{
		verticalp:.7rem;
		border:1px solid #e8d4d4;
		border-radius:30px;
		overflow-align:top;
		border-radius:30px;
		padding:0;
		width:100%;
		height:100%;
	}
	.money{
		color:red;
		margin-top:.93rem;
	}
</style>