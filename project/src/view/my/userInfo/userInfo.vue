<template>
	<div class="userInfo">
		<div class="userName" v-show="userInfoIsShow">
			<div class="userImg">
				<img src="//static.smartisanos.cn/account/asset/img/default-user-avatar.png" />
			</div>
			<div class="userNumber">用户&nbsp {{$store.state.userNumber}}&nbsp欢迎您 !</div>
		</div>
		<UserInfoNoLogin v-show="userInfoIsLogin"></UserInfoNoLogin>
	</div>
</template>

<script>
import UserInfoNoLogin from '../noLogin/noLogin'
	export default {
		data(){
			return {
				userInfoIsShow:false,
				userInfoIsLogin:true
			}
		},
		components:{ UserInfoNoLogin },
		created(){
			let token = window.localStorage.getItem('token')
			if ( !token || token==null ){
				this.userInfoIsShow = false
				this.userInfoIsLogin = true
			}else{
				this.userInfoIsShow = true
				this.userInfoIsLogin = false
			}
			this.$store.state.userNumber = JSON.parse( localStorage.getItem('userName') )
			console.log(this.$store.state.userNumber)
		}
	}
</script>

<style>
	.userInfo{
		height:100%;
		padding:.7rem .6rem 0;

	}
	.userName{
		height:6rem;
		padding-left:25%;
		position:relative;
		box-sizing:border-box;
		border-radius:.4rem .4rem 0 0;
		background:#fff;
		border-bottom:1px solid #bfadad;
		font-size:1rem;
		font-weight:800;
	}
	.userName .userImg{
		width:15%;
		height:60%;
		position:absolute;
		left:5%;
		top:20%;
		border-radius:50%;
		overflow:hidden;
	}
	.userName .userImg img{
		width:100%;
		height:100%;
	}
	.userName .userNumber{
		line-height:6rem;
		color:gray;
	}
</style>