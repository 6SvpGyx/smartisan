<template>
	
	<div>
		<mt-header class="navHead">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回首页</mt-button>
		  </router-link>
		</mt-header>
		<h2 class="notFindBack">您请求的页面不存在了...</h2>
	</div>

</template>
<style>
.navHead{
	height:2.888777rem;
	background:#000
}
.notFindBack{
	text-align:center;
}
</style>