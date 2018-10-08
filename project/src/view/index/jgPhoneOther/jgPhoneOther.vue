<template>
	<div class="jgPhoneOther">
		<router-link
		tag="div"
		:to="{name:'HotShop',params:{num:4}}"
		 class="jgPhoneOtherHead">
			<h2 class="jgPhoneOtherTitle">坚果系列手机及配件</h2>
			<span class="goToIco"></span>
		</router-link>
		<ul class="jgPhoneOtherContent">
			<router-link
			 v-for="item,index in jgPhoneOtherData"
			 :key='index'
			 tag="li"
			 :to="{name:'Bannerphone',params:{ids:item.id}}"
			 >
				<div class="jgPhoneOtherImg">
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
				jgPhoneOtherData:[]
			}
		},
		async created(){
			let {data} = await this.$api.getIndexDataA()
			this.idData = data.floors[4].dataList.slice(0,6).map( item=>item.slice(0,7) )

			let dataList = await this.$api.getBannerPhone(this.idData)
			this.jgPhoneOtherData = dataList.data.data.list
		}
	}
</script>

<style>
	.jgPhoneOther{
		box-sizing:border-box;
		margin-top:.6rem;
		background:#fff;
	}
	.jgPhoneOtherHead{
		width:100%;
		height:2.5rem;
		position:relative;
		padding:0 .6rem 0 .6rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.jgPhoneOtherHead .jgPhoneOtherTitle{
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
	.jgPhoneOtherContent{
		padding:0 0 .9rem 1.5rem;
		overflow:hidden;
	}
	.jgPhoneOtherContent li{
		width:45%;
		float:left;
		margin-right:.8rem;
		margin-top:1rem;
	}
	.jgPhoneOtherContent .jgPhoneOtherImg{
		width:100%;
		height:10.9375rem;
		border:1px solid #d6c7c7;
		border-radius:.5rem;
	}
	.jgPhoneOtherContent .jgPhoneOtherImg img{
		width:100%;
		height:100%;
	}
	.jgPhoneOtherContent .itemContent{
		width:100%;
		padding-left:.7rem;
		box-sizing:border-box;

	}
	.jgPhoneOtherContent .itemContent .itemTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.9rem;
		color:#333;
		font-weight:900;
		margin-top:.5rem;
	}
	.jgPhoneOtherContent .itemContent .itemSubTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.8rem;
		color:#7f7f7f;
		line-height:1.7;
	}
	.jgPhoneOtherContent .itemContent .itemMoney{
		color:#d44d44;
		font-weight:700;
		font-size:.8rem;
	}
</style>