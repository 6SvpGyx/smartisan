<template>
	<mt-navbar class="indexNav">
			<mt-tab-item id="1"
			 v-for="item,index in indexNav"
			 :key="index"
			  @click.native="navList(item)"
			 >
		  		<img class="navImg" :src="item.imgUrl"">
		  		<span class="navSpan">{{item.title}}</span>
		    </mt-tab-item>
	  
	</mt-navbar>
</template>

<script>
	let navConfig = [
		{
			pathId:64,
			title:'手机',
			imgUrl:'../../../../static/img/nav_phone.png'
		},
		{
			pathId:77,
			title:'空气净化',
			imgUrl:'../../../../static/img/nav_air.png'
		},
		{
			pathId:60,
			title:'官方配件',
			imgUrl:'../../../../static/img/nav_pats.png'
		},
		{
			pathId:69,
			title:'品牌周边',
			imgUrl:'../../../../static/img/nav_brand.png'
		},
		{
			pathId:61,
			title:'好物优选',
			imgUrl:'../../../../static/img/nav_godd.png'
		}
	]

	export default {
		data(){
			return {
				indexNav:navConfig
			}
		},
		methods:{
			navList(item){
				this.$router.push({
					name:'Navitem',
					params:{id:item.pathId}
				})
			}
		}
	}
</script>


<style>
	.indexNav{
		padding:.8rem 0;
	}
	.navImg{
		width:1.5625rem;
		height:1.5625rem;
	}
	.navSpan{
		display:block;
		font-size:.5rem;
		line-height:.8rem;
		color:#666;
	}

</style>

