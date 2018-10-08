<template>
	<div class="recommen">
		<div class="leftImg">
			<router-link
			:to="{name:'Bannerphone',params:{ids:index==0?leftItem.linkUrl.slice(31,38) : leftItem.linkUrl.substring(leftItem.linkUrl.length-7)}}"
			 v-for="leftItem,index in leftData"
			 :key="index"
			 >
				<img :src="leftItem.src" />
			</router-link>
			<router-link
			 v-for="item,index in oneData"
			 :key="item.id"
			 :to="{name:'Bannerphone',params:{ids:item.id}}"
			 >
				<img :src="item.imgURL" />
			</router-link>
		</div>
		<router-link
		tag="div"
		 class="rightImg"
		 v-for="rightItem,index in rightData"
		 :key="index"
		 :to="{name:'HotShop',params:{num:5}}"
		 >
			<img :src="rightItem.src" />
		</router-link>
	</div>
</template>

<script>
export default {
	data(){
		return {
			leftData:[],
			rightData:[],
			oneData:[
				{
					id:1000479,
					imgURL:'https://resource.smartisan.com/resource/c10d36c2159244af4ac1fec0cac154a5.png?x-oss-process=image/resize,w_495/format,webp'
				}
			]
		}
	},
	async created(){
		let {data} = await this.$api.getIndexDataA()
		this.leftData = data.floors[1].dataList.slice(0,2)
		this.rightData = data.floors[1].dataList.slice(3,4)
	}
}
</script>

<style>
.recommen{
	height:18rem;
	margin-top:.7rem;
	background:#fff;
	padding:.7rem .8rem;
	box-shadow:0 5px 13px rgba(0,0,0,.1);
	overflow:hidden;
}
.leftImg{
	width:45%;
	float:left;
}
.leftImg > div{
	
}
.leftImg img{
	width:100%;
	height:5.7rem;
	margin-bottom:.2rem;
}
.rightImg{
	width:50%;
	height:100%;
	float:right;
}
.rightImg img{
	width:100%;
	height:100%;
}
</style>