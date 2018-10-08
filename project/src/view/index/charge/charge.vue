<template>
	<div class="charge">
		<router-link 
		v-for="item,index in dataList"
		:key="index"
		:to="{name:'Bannerphone',params:{ids:item.linkUrl.slice(item.linkUrl.length-9).slice(0,7)}}">
			<img
			 :src="item.src"/>
		</router-link to="{name:'Bannerphone'}">
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				dataList:[]
			}
		},
		async created(){
			let {data} = await this.$api.getIndexDataA()
			this.dataList = data.floors[6].dataList
		}
	}
</script>

<style>
	.charge{
		padding:.7rem .6rem;
		background:#fff;
		margin-top:.7rem;
	}
	.charge img{
		display:block;
		width:100%;
		height:calc((100vw - 24px)/2.625);
		margin-bottom:.6rem;
		border-radius:.4rem;
	}
</style>