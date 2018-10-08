<template>
	<div class="my">
		<mt-header title="个人中心" class="bannerPhoneHead"></mt-header>
		<UserInfo></UserInfo>
		<Adress></Adress>
	</div>
</template>

<script>
	import UserInfo from './userInfo/userInfo'
	import Adress from './adress/adress'
	export default {
		components:{UserInfo,Adress}
	}
</script>

<style>
.my{
	padding-top:2.8125rem;
}
.bannerPhoneHead{
	width:100%;
	position:fixed;
	top:0;
	left:0;
	background:#000;
	height:2.8125rem;
	z-index:10;
}
</style>