<template>
	<div class="login">
			<mt-header title="登录官网" class="loginHead">
			  <span  slot="left">
			    <mt-button icon="back" @click.native="back">返回</mt-button>
			  </span>
			</mt-header>
			<div class="loginInput">
				<input type="text" ref="ZH" class="zhInput"  placeholder="账号"/>
				<input type="text" ref="passWord" class="passwordInput" placeholder="密码"/>
			</div>
			<p></p>
			<div class="loginReg">
				<span class="goLogin" @click="loGin">登录</span>
				<span class="goIndex" @click="goZC">注册</span>
			</div>
	</div>
	
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		components:{MessageBox},
		data(){
			return {
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			goZC(){
				this.$router.push({name:'Register'})
			},
			loGin(){
				let passWordText = this.$cookie.getCookiePassword(this.$refs.passWord.value.trim())
				console.log(this.$refs.passWord.value.trim())
				let ZH = this.$cookie.getCookieUserName(this.$refs.ZH.value.trim())
				
				if ( passWordText == this.$refs.passWord.value.trim() && ZH == this.$refs.ZH.value.trim() ){
					window.localStorage.setItem('token',this.$refs.passWord.value.trim())
					MessageBox.alert('登录成功').then(action => {
					localStorage.setItem('userName',JSON.stringify(ZH))
						this.$store.state.userNumber = ZH
 						this.$router.push({name:'Index'})
					})
				}else{
					MessageBox('提示', '账号或密码错误');
				}
			}
		},
		created(){
			let token = window.localStorage.getItem('token')
			if ( !token || token == '' ){
					this.$router.push({name:'Login'})
				}else {
					this.$router.push({name:'Car'})
				}
		}
	}
	
</script>

<style>
	.login{
		height:100%;
		padding-top:2.8125rem;
	}
	.loginHead{
		width:100%;
		height:2.8125rem;
		background:#000;
		text-align:center;
		font-size:1rem;
		line-height:2.8125rem;
		color:#fff;
		font-weight:700;
		position:fixed;
		top:0;
		left:0;
	}
	.loginInput{
		padding:.8rem .8rem;
	}
	.loginInput input{
		display:block;
		width:100%;
		height:44px;
		border:1px solid #d1d1d1;
		outline:none;
		padding: 0 0 0 .8em;
		box-sizing:border-box;
	}
	.loginInput .zhInput{
		border-bottom:none;
		border-radius:6px 6px 0 0;
	}
	.loginInput .passwordInput{
		border-radius:0 0 6px 6px;
	}
	.loginReg{
		
		text-align:center;
	}
	.loginReg span{
		display:inline-block;
		width:142px;
		height:42px;
		line-height:42px;
		font-size:.8rem;
		font-weight:700;
		border-radius:.6rem;
		color:rgba(0,0,0,.6);
		background:#ededed;
		margin:0 auto;
	}
	.loginReg .goLogin{
		background:#5178df;
		color:#fff;
		margin:16px 1px 0;

	}
</style>