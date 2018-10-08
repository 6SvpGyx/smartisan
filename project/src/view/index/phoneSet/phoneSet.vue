<template>
	<div class="phoneSet">
		<router-link
		tag="div"
		:to="{name:'HotShop',params:{num:3}}"
		 class="phoneSetHead">
			<h2 class="phoneSetTitle">坚果 Pro 2S “足迹”系列保护套</h2>
			<span class="goToIco"></span>
		</router-link>
		<ul class="phoneSetContent">
			<router-link 
			v-for="item,index in phoneSetList"
			:key="index"
			tag="li"
			:to="{name:'Bannerphone',params:{ids:item.id}}"
			>
				<img :src="item.sku_info[0].ali_image" />
				<h2 class="phoneSetItemTitle">{{item.shop_info.spu_mobile_title}}</h2>
				<h4 class="phoneSetItemSubTitle">{{item.shop_info.spu_sub_title}}</h4>
				<div class="phoneSetMoney">
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
					phoneSetList:[]
				}
			},
			async created(){
				let {data} = await this.$api.getIndexDataA()
				this.idConfig = data.floors[3].dataList.map( (item) => item.slice(0,7) )

				let dataList = await this.$api.getBannerPhone(this.idConfig)
				this.phoneSetList = dataList.data.data.list
			}
		}
	</script>

<style>
	.phoneSet{
		box-sizing:border-box;
		margin-top:.6rem;
		background:#fff;
	}
	.phoneSetHead{
		width:100%;
		height:2.5rem;
		position:relative;
		padding:0 .6rem 0 .6rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.phoneSetHead .phoneSetTitle{
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
	.phoneSet .phoneSetContent{
		display:-webkit-box;
		overflow-y:hidden;
		overflow-x:auto;
		padding:0 .6rem 1rem 0;
	}
	.phoneSet .phoneSetContent li{
		width:36%;
		padding-right:.8rem;
	}
	.phoneSetContent img{
		display:block;
		width:100%;
	}
	.phoneSetContent .phoneSetItemTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.9rem;
		text-align:center;
		font-weight:600;
	}
	.phoneSetContent .phoneSetItemSubTitle{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
		font-size:.8rem;
		line-height:1.5;
		color:#7f7f7f;
		text-align:center;
	}
	.phoneSetMoney{
		color:#d44d44;
		font-weight:700;
		text-align:center;
		line-height:1.5;
		margin-top:.4rem;
	}
</style>