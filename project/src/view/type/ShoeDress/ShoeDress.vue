<template>
	<div class="shoeDress">
		<h3 class="shoeDressHeadTitle">鞋服</h3>
		<div
		class="shoeDressHeadImg"
		>
			<img @click="goToshoeDressImg" :src="imgData.src" />
		</div>
		<ul class="shoeDressContent">
			<router-link
			tag="li"
			 v-for="item,index in dataList"
			 :key="index"
			 :to="{name:'Bannerphone',params:{ids:item.id}}"

			 >
				<div class="shoeDressItemImg">
					<img :src="item.sku_info[0].ali_image""/>
				</div>
				<span class="shoeDressItemTitle">{{item.name}}</span>
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
			this.imgData = data[5].image

			this.idList = data[5].layout.dataList.map(item => item.sku.slice(item.sku.length-9).slice(0,7))

			let datas =await this.$api.getBannerPhone(this.idList)
			this.dataList = datas.data.data.list
		},
		methods:{
			goToshoeDressImg(){
				this.$router.push({
					name:'Navitem',
					params:{
						id:73
					}
				})
			}
		}
	}
</script>

<style>
	.shoeDress{
		background:#fff;
	}
	.shoeDress .shoeDressHeadTitle{
		height:2.4rem;
		line-height:2.4rem;
		font-size:.95rem;
		font-weight:700;
		color:#666;
		padding-left:.7rem;
		border-bottom:1px solid #f5f5f5;
	}
	.shoeDress .shoeDressHeadImg{
		width:100%;
		padding:.7rem .7rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.shoeDress .shoeDressHeadImg img{
		background-size:contain|cover;
		width:100%;
		height: auto;
	}
	.shoeDress .shoeDressContent{
		padding:.9rem .6rem;
		display:flex;
		flex-wrap:wrap;

	}
	.shoeDress .shoeDressContent li{
		width:calc((100% - 1.2rem)/3);
		margin-right:.4rem;
		margin-top:.5rem;
	}
	.shoeDress .shoeDressContent li .shoeDressItemImg{
		width:100%;
		padding:.7rem;
		box-sizing:border-box;
		border:1px solid #f0f0f0;
		border-radius:.4rem;
	}
	.shoeDress .shoeDressContent li .shoeDressItemImg img{
		width:100%;
		height:100%;
		background-size:contain|cover;
	}
	.shoeDressContent li .shoeDressItemTitle{
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