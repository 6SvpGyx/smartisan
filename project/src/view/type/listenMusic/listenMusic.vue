<template>
	<div class="listenMusic">
		<h3 class="listenMusicHeadTitle">耳机音响</h3>
		<div
		class="listenMusicHeadImg"
		>
			<img @click="goTolistenMusicImg" :src="imgData.src" />
		</div>
		<ul class="listenMusicContent">
			<router-link
			tag="li"
			 v-for="item,index in dataList"
			 :key="index"
			 :to="{name:'Bannerphone',params:{ids:item.id}}"

			 >
				<div class="listenMusicItemImg">
					<img :src="item.sku_info[0].ali_image""/>
				</div>
				<span class="listenMusicItemTitle">{{item.name}}</span>
			</router-link>
			<router-link
			tag="li"
			 v-for="oneItem,index in oneDataList"
			 :key="oneItem.id"
			 :to="{name:'Bannerphone',params:{ids:oneItem.id}}"

			 >
				<div class="listenMusicItemImg">
					<img :src="oneItem.imgURL""/>
				</div>
				<span class="listenMusicItemTitle">{{oneItem.name}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	let oneData = [
			{
				id:1000378,
				name:'蓝牙运动耳机',
				imgURL:'https://resource.smartisan.com/resource/dbb13e2e05afd140044dfc38b0f6f025.jpg?x-oss-process=image/resize,w_348/format,webp'
			}
		]
	export default {
		
		data(){
			return {
				imgData:[],
				idList:[],
				dataList:[],
				oneDataList:oneData
			}
		},
		async created(){
			let {data} = await this.$api.getTypeData()
			this.imgData = data[3].image

			this.idList = data[3].layout.dataList.map(item => item.sku.slice(item.sku.length-9).slice(0,7))

			let datas =await this.$api.getBannerPhone(this.idList)
			this.dataList = datas.data.data.list
		},
		methods:{
			goTolistenMusicImg(){
				this.$router.push({
					name:'Navitem',
					params:{
						id:72
					}
				})
			}
		}
	}
</script>

<style>
	.listenMusic{
		background:#fff;
	}
	.listenMusic .listenMusicHeadTitle{
		height:2.4rem;
		line-height:2.4rem;
		font-size:.95rem;
		font-weight:700;
		color:#666;
		padding-left:.7rem;
		border-bottom:1px solid #f5f5f5;
	}
	.listenMusic .listenMusicHeadImg{
		width:100%;
		padding:.7rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.listenMusic .listenMusicHeadImg img{
		background-size:contain|cover;
		width:100%;
		height: auto;
	}
	.listenMusic .listenMusicContent{
		padding:.9rem .6rem;
		display:flex;
		flex-wrap:wrap;

	}
	.listenMusic .listenMusicContent li{
		width:calc((100% - 1.2rem)/3);
		margin-right:.4rem;
		margin-top:.5rem;
	}
	.listenMusic .listenMusicContent li .listenMusicItemImg{
		width:100%;
		border:1px solid #f0f0f0;
		border-radius:.4rem;
	}
	.listenMusic .listenMusicContent li .listenMusicItemImg img{
		width:100%;
		height:100%;
		background-size:contain|cover;
	}
	.listenMusicContent li .listenMusicItemTitle{
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