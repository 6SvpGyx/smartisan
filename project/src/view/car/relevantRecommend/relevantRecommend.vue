<template>
	<div class="relevantRecommend">
		<div class="relevantRecommendHead">
			<h2 class="relevantRecommendTitle">相关推荐</h2>
		</div>
		<ul class="relevantRecommendContent">
			<router-link
			tag="li"
			v-for="item,index in recommendList"
			:key=index
			:to="{name:'Bannerphone',params:{ids:item.id}}"
			 >
				<div class="relevantRecommendImg">
					<img :src="item.sku_info[0].ali_image"/>
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
let idData = ['100051704','100046406','100040601','100035101','100047701','100047001','100042801','100037801','100036002','100053001','100042205','100033802','100051702','100046401','100040601','100040604','100035113','100047901','100047401','100040501','100033802','100041701','100045101','100026601','100026701','100027004','100035104','100035111','100035202','100035703','100039702','100040910']
	export default{
		data(){
			return {
				dataList:[],
				idDataList:[],
				recommendList:[]
			}
		},
		async created(){
		this.idDataList = idData.map( item=>item.slice(0,7) )
			let {data} =await this.$api.getBannerPhone(this.idDataList)
			this.recommendList = data.data.list
		}
	}
</script>

<style>
	.relevantRecommend{
		box-sizing:border-box;
		margin-top:.6rem;
		background:#fff;
	}
	.relevantRecommendHead{
		width:100%;
		height:2rem;
		position:relative;
		padding:0 .6rem 0 .6rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.relevantRecommendHead .relevantRecommendTitle{
		line-height:1.6rem;
		font-size:.95rem;
		font-weight:700;
		color:#666;
	}
	.relevantRecommendContent{
		padding:0 0 .9rem 1.5rem;
		overflow:hidden;
	}
	.relevantRecommendContent li{
		width:45%;
		float:left;
		margin-right:.8rem;
		margin-top:1rem;
	}
	.relevantRecommendContent .relevantRecommendImg{
		width:100%;
		height:10.9375rem;
		border:1px solid #d6c7c7;
		border-radius:.5rem;
	}
	.relevantRecommendContent .relevantRecommendImg img{
		width:100%;
		height:100%;
	}
	.relevantRecommendContent .itemContent{
		width:100%;
		padding-left:.7rem;
		box-sizing:border-box;

	}
	.relevantRecommendContent .itemContent .itemTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.9rem;
		color:#333;
		font-weight:900;
		margin-top:.5rem;
	}
	.relevantRecommendContent .itemContent .itemSubTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.8rem;
		color:#7f7f7f;
		line-height:1.7;
	}
	.relevantRecommendContent .itemContent .itemMoney{
		color:#d44d44;
		font-weight:700;
		font-size:.8rem;
	}
</style>