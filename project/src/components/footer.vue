<template>

	<mt-tabbar>
	<router-link
		exact
		v-for="item,index in navList"
	   :key="index"
	   tag="span"
	   :to="item.path">
		<mt-tab-item>
	    <img slot="icon" :src="item.img_url" />
	    	{{item.title}}
	  </mt-tab-item>
	</router-link>

		  
	</mt-tabbar>
</template>

<script>
	let footerConfig = [
		{
			path:'/',
			title:'首页',
			img_url:'../../static/img/footer_index.png'
		},
		{
			path:'/type',
			title:'分类',
			img_url:'../../static/img/footer_type.png'
		},
		{
			path:'/car',
			title:'购物车',
			img_url:'../../static/img/footer_car.png'
		},
		{
			path:'/my',
			title:'个人中心',
			img_url:'../../static/img/footer_my.png'
		}
	]

	export default {
		data(){
			return {
				navList:footerConfig
			}
		}
	}
</script>

<style>
.mint-tabbar > .mint-tab-item.is-selected{
	color:#9a9a9a;
}
.mint-tabbar span{
	display:block;
	float:left;
	width:25%;
}
.router-link-active{
	color:red
}
.mint-tabbar{
	position:fixed;
	left:0;
	bottom:0;
	box-shadow:0 -11px 32px rgba(0,0,0,.08);
}
</style>