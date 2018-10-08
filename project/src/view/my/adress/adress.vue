<template>
	<div class="adress" v-show="adressIsShow">
		<div class="adressHead">
				<span class="adressTitle">地址管理</span>
				<span class="adressAdd" @click="add" v-show="$store.state.edit"></span>
				<span class="cancel" v-show="$store.state.isEdit" @click="cancelEdit">取消</span>
			</div>
		<div>
		<div class="noAdress" v-show="addAdressIsShow">当前没有收货地址,点击右上按钮添加一个吧！</div>
		<div class="writeAdress" v-show="$store.state.isEdit">
			<input type="text"
			 ref="nameInput"
			  placeholder="收货人姓名"
			  @blur="finishNameEdit"
			  v-model="$store.state.adressName"
			   />
			<input type="text"
			 ref="phoneInput"
			  placeholder="电话号码"
			  @blur="finishPhoneEdit"
			  v-model="$store.state.adressTel"
			  />

			<span>{{$store.state.adressInfo}}</span>
			<router-link class="changeAdress" :to="{name:'ChangeAdress'}">点击选择地址</router-link>
			<input
			 type="text"
			  ref="editInput" 
			placeholder="详细地址，如街道名称，楼层，门牌号码等"
			v-show="$store.state.adressInfo == ''?false:true"
			@blur="finishDatailEdit"
			v-model="$store.state.adressDatail"
			/>
			<div class="subAdress" @click="save">确定</div>
		</div>
		<ul class="adressList">
			<li
			 v-for="item,index in adressData"
			 :key="index"
			 >
				<span class="name">{{item.userName}}</span>
				<span class="phone">{{item.tel}}</span>
				<span class="detailAdress">{{item.adress}}</span>
				<span class="setDefault" @click="setDefault(item.userId)" v-show="item.isDefault == true? false :true">设为默认地址</span>
				<span class="removeAdress" @click="removeAdress(item)"></span>
				<span class="defaultAdress" v-if="item.isDefault==true?true:false">默认地址</span>
			</li>
		</ul>
		</div>
		<div class="SignOut" @click="SignOut">退出登录</div>
	</div>
  
</template>

<script>

import { MessageBox } from 'mint-ui';
import axios from 'axios'
let reName=/^[\u4e00-\u9fa5]{2,3}$/
let reTel=/^[1][3,4,5,7,8][0-9]{9}$/
let adressData = JSON.parse( localStorage.getItem('adressData') )||[]
export default {
  components: { MessageBox },
  data(){
  	return {
  		province:'',
  		city:'',
  		area:'',
  		adressData,
  		adressIsShow:false
  	}
  },
  methods:{
  	
  	add(){
  		this.$store.state.isEdit = true;
  		this.$store.state.edit = false;
  	},
  	cancelEdit(){
  		MessageBox.confirm('确定取消编辑吗?').then(action => {
	  		this.$store.state.isEdit = false;
	  		this.$store.state.edit = true;
	  		this.$refs.editInput.value = '';
	  		this.$refs.nameInput.value = '';
	  		this.$refs.phoneInput.value = '';
	  		this.$store.state.adressInfo = '';
	  		this.$store.state.adressName = '';
	  		this.$store.state.adressTel = '';
	  		this.$store.state.adressDatail = ''
		}).catch(() => {
			
           });
  	},
  	save(){
  	console.log(this.adressData)
  		if ( !reName.test(this.$refs.nameInput.value) ){
  			MessageBox('提示', '姓名格式错误');
  			return;
  		}else if ( !reTel.test(this.$refs.phoneInput.value) ){
  			MessageBox('提示', '电话号码格式错误');
  			return;
  		}else if (this.$store.state.adressDatail == '' ||this.$store.state.adress == '' ){
  			MessageBox('提示', '地址格式错误');
  			return;
  		}
  		this.adressData.push({
  			userId:Math.random(),
  			userName:this.$store.state.adressName,
  			adress:`${this.$store.state.adressInfo}|${this.$store.state.adressDatail}`,
  			tel:this.$refs.phoneInput.value,
  			isDefault:false
  		})
  		MessageBox('提示', '添加成功');
  		this.$store.state.isEdit = false;
  		this.$store.state.edit = true;
  		this.$store.state.adressInfo = '';
  		this.$store.state.adressName = '';
  		this.$store.state.adressTel = '';
  		this.$store.state.adressDatail = ''
  		localStorage.setItem('adressData',JSON.stringify(this.adressData))
  	},
  	finishNameEdit(){
  		this.$store.state.adressName = this.$refs.nameInput.value;
  	},
  	finishPhoneEdit(){
  		this.$store.state.adressTel = this.$refs.phoneInput.value;
  	},
  	finishDatailEdit(){
  		this.$store.state.adressDatail = this.$refs.editInput.value;
  	},
  	removeAdress(option){
  		let index = this.adressData.findIndex(item=>item.userId == option.userId)
  		MessageBox.confirm('确定删除这条地址吗?').then(action => {
	  		this.adressData.splice(index,1)
		}).catch(() => {
			
            });
  	},
  	SignOut(){
  	MessageBox.confirm('确定退出登录吗?').then(action => {
  		localStorage.removeItem('token');
  		window.location.reload();
		}).catch(() => {
			
            });
  	},
  	setDefault(adressId){
  		this.adressData.forEach(item=>{
  			if ( item.userId ==  adressId){
  				item.isDefault = true
  			}else{
  				item.isDefault = false
  			}
  		})
  	}
  },
  created(){
	let token = window.localStorage.getItem('token')
	if ( !token || token==null ){
		this.adressIsShow = false
	}else{
		this.adressIsShow = true
	}
  },
  computed:{
  	addAdressIsShow(){
  		if ( this.adressData&&this.adressData.length ==0  ){
  		console.log(1)
  			return true
  		}else {
  		console.log(2)
  			return false
  		}
  	}
  }
 }
 
</script>

<style>
.adress{
	margin-top:.7rem;
	padding-bottom:55px;
}
.adressHead{
	padding:.6rem .7rem;
	overflow:hidden;
}
.defaultAdress{
	display:block;
	width:25%;
	height:2rem;
	padding: 0 .5rem;
	border:1px solid gray;
	border-radius:1rem;
	line-height:2rem;
	color:red;
	text-align:center;
}
.blockDefault:{
	display:block;
}
.SignOut{
	width:85%;
	margin:auto;
	height:3.2rem;
	background:#e87067;
	line-height:3.2rem;
	color:#fff;
	text-align:center;
	border-radius:.7rem;
	margin-top:4rem;
}
.noAdress{
	height:30px;
	background:#6e98f4;
	text-align:center;
	color:#fff;
	margin:auto;
	line-height:30px;
	border-radius:.8rem;
}
.adressHead .adressTitle{
	float:left;
	font-size:1.3rem;
	line-height:2.4555rem;
	font-weight:700;
	color:#5a5a5a;
}
.adressHead .adressAdd{
	float:right;
	width:1.875rem;
	height:1.875rem;
	margin-top:.2rem;
	margin-right:.8rem;
	background:url(../../../../static/img/adressAdd.png) no-repeat;
	background-size:cover;
}
.adressHead .cancel{
	float:right;
	width:10%;
	height:1.875rem;
	margin-top:.2rem;
	margin-right:.8rem;
	line-height:2rem;
	border:1px solid #d6cfcf;
	border-radius:.3rem;
	text-align:center;
	color:#868181;
}
.writeAdress{
	margin-top:-1rem;
	padding:.6rem .7rem;
}
.writeAdress input{
	display:block;
	width:100%;
	height:2.7rem;
	margin-top:.5rem;
	border:1px solid #bfbaba;
	border-radius:.5rem;
	outline:none;
	padding-left:.7rem;
	box-sizing:border-box;
}
.changeAdress{
	line-height:2rem;
	color:#1976bb;
}
.subAdress{
	width:20%;
	height:2.3rem;
	line-height:2.3rem;
	text-align:center;
	background:#6e98f4;
	margin:auto;
	margin-top:.8rem;
	border-radius:.5rem;
	color:#fff;
}
.adressList li{
	position:relative;
	line-height:2rem;
	padding:.4rem .6rem;
	box-sizing:border-box;
	border:1px solid #ecd5d5;
	border-radius:.2rem;
	margin-bottom:.5rem;
}
.adressList li .detailAdress{
	display:block;
	width:80%;
}
.setDefault{
	display:block;
	width:25%;
	height:2rem;
	padding:0 .5rem;
	background:#6e98f4;
	line-height:2rem;
	text-align:center;
	color:#fff;
	border-radius:.7rem;
}
.adressList li .removeAdress{
	position:absolute;
	top:60%;
	right:1rem;
	width:1.5rem;
	height:1.8rem;
	background:url(../../../../static/img/removeAdress.png) no-repeat;
	background-size:cover;

}

</style>