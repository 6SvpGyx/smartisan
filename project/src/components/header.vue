<template>
	<mt-header class="head" fixed  :title="headTitle">
	  <div slot="left">
	    <mt-button class="iconfont el-icon-erp-toggle"></mt-button>
	  </div>
	  	<mt-button class="iconfont icon-chazhao" slot="right" @click="search"></mt-button>
	</mt-header>
</template>

<script>
	export default {
		methods:{
			search(){
				this.$router.push({name:'SearchItem'})
			}
		},
		computed:{
			headTitle(){
				if ( this.$route.name == 'Index' ){
					return '锤子科技官网'
				}else if ( this.$route.name == 'Type' ){
					return '分类'
				}else if ( this.$route.name == 'Car' ){
					return '购物车'
				}else if ( this.$route.name == 'Car' ){
					return '个人中心'
				}
			}
		}
		
	}
</script>

<style>
.head{
	height:2.8125rem;
	background:#1a1a1a;
}
</style>