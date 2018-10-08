<template>
	<div class="login">
			<mt-header title="注册" class="loginHead">
			  <span  slot="left">
			    <mt-button icon="back" @click.native="back">返回登录</mt-button>
			  </span>
			</mt-header>
			<div class="loginInput">
				<input type="text" ref="ZH" class="zhInput"  placeholder="账号 (4到16位 :字母,数字,下划线,减号)"/>
				<input type="text" ref="password" class="passwordInput" placeholder="密码    (必须为纯数字)"/>
			</div>
			<p class="tip">{{tipText}}</p>
			<div class="loginReg">
				<span class="goLogin" @click="register">注册</span>
			</div>
	</div>
	
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
	components:{MessageBox},
		data(){
			return {
				tipText:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			register(){
				let reZH = /^[a-zA-Z0-9_-]{4,16}$/;
				let passwordRe = /^[0-9]*$/;
				let ZH = this.$cookie.getCookieUserName(this.$refs.ZH.value.trim())
				if ( this.$refs.ZH.value.trim()  == ''|| this.$refs.password.value.trim()  == '' ){
					this.tipText = '账号或密码不能为空'
				}else if ( !reZH.test( this.$refs.ZH.value.trim() ) ){
					this.tipText = '账号不符合规则'
					this.$refs.ZH.value = ''
					this.$refs.password.value = ''
				}else if ( !passwordRe.test( this.$refs.password.value.trim() ) ){
					this.tipText = '密码不符合规则'
					this.$refs.ZH.value = ''
					this.$refs.password.value = ''
				}else if (ZH == this.$refs.ZH.value.trim()){
					MessageBox('提示', '该账号已存在');
					return
				}else{
					MessageBox.alert('注册成功').then(action => {
  						this.$cookie.setCookie(this.$refs.ZH.value.trim(), this.$refs.password.value.trim(),10)
						this.$router.push({name:'Login'})
					});
					
				}
			}
		}
	}
	
</script>

<style>
	.login{
		height:100%;
		padding-top:2.8125rem;
	}
	.tip{
		color:red;
		text-align:center;
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