<template>
	<div class="footImg">
		<router-link
		 v-for="oneItem,index in oneData"
		 :key="oneItem.id"
		 tag="div"
		 :to="{name:'Bannerphone',params:{ids:oneItem.id}}"
		 >
			<img :src="oneItem.imgURL" />
		</router-link>

		<router-link
		v-for="item,index in dataList"
		tag="div"
		:key="index"
		:to="{name:'Bannerphone',params:{ids:item.linkUrl.slice(item.linkUrl.length-9).slice(0,7)}}"
		>
			<img :src="item.src" />
		</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				dataList:[],
				oneData:[
					{
						id:1000536,
						imgURL:'https://resource.smartisan.com/resource/04c2f7e2d5931673c10eb206baf2edc9.png?x-oss-process=image/resize,w_495/format,webp'
					}
				]
			}
		},
		async created(){
			let {data} = await this.$api.getIndexDataA()
			this.dataList = data.floors[11].dataList.slice(1,4)
		}
	}
</script>

<style>
	.footImg{
		padding:.7rem 0 0 1.3rem;
		background:#fff;
		overflow:hidden;
		margin-top:.7rem;
	}
	.footImg > div{
		width:44%;
		height:47%;
		float:left;
		margin-right:1.1rem;
		margin-bottom:.5rem;
	}
	.footImg img{
		width:100%;
		height:100%;
		
	}
</style>