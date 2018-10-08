<template>
	<div class="chargLine">
		<h3 class="chargLineTitle">壳套膜</h3>
		<div
		class="chargLineHeadImg"
		>
			<img @click="goToChargLinellImg" :src="imgData.src" />
		</div>
		<ul class="chargLineContent">
			<router-link
			tag="li"
			 v-for="item,index in dataList"
			 :key="index"
			 :to="{name:'Bannerphone',params:{ids:item.id}}"

			 >
				<div class="chargLineItemImg">
					<img :src="item.sku_info[0].ali_image""/>
				</div>
				<span class="chargLineItemTitle">{{item.shop_info.spu_title}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgData:[],
				idList:[],
				dataList:[]
			}
		},
		async created(){
			let {data} = await this.$api.getTypeData()
			this.imgData = data[2].image

			this.idList = data[2].layout.dataList.map(item => item.sku.slice(item.sku.length-9).slice(0,7))

			let datas =await this.$api.getBannerPhone(this.idList)
			this.dataList = datas.data.data.list
		},
		methods:{
			goToChargLinellImg(){
				this.$router.push({
					name:'Navitem',
					params:{
						id:71
					}
				})
			}
		}
	}
</script>

<style>
	.chargLine{
		background:#fff;
	}
	.chargLine .chargLineTitle{
		height:2.4rem;
		line-height:2.4rem;
		font-size:.95rem;
		font-weight:700;
		color:#666;
		padding-left:.7rem;
		border-bottom:1px solid #f5f5f5;
	}
	.chargLine .chargLineHeadImg{
		width:100%;
		padding:.7rem .7rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.chargLine .chargLineHeadImg img{
		background-size:contain|cover;
		width:100%;
		height: auto;
	}
	.chargLine .chargLineContent{
		padding:.9rem .6rem;
		display:flex;
		flex-wrap:wrap;

	}
	.chargLine .chargLineContent li{
		width:calc((100% - 1.2rem)/3);
		margin-right:.4rem;
		margin-top:.5rem;
	}
	.chargLine .chargLineContent li .chargLineItemImg{
		width:100%;
		padding:.7rem;
		box-sizing:border-box;
		border:1px solid #f0f0f0;
		border-radius:.4rem;
	}
	.chargLine .chargLineContent li .chargLineItemImg img{
		width:100%;
		height:100%;
		background-size:contain|cover;
	}
	.chargLineContent li .chargLineItemTitle{
		width:100%;
		text-align:center;
		display:block;
		margin:.3rem 0 .8rem;
		font-size:.65rem;
		font-weight:700;
		line-height:1.8;
		color:rgba(0,0,0,.8);
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>