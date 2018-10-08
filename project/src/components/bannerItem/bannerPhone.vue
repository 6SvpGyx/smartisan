<template>
	<div style="padding-top:2.8125rem;">
		<mt-header :title="phoneList.name" class="bannerPhoneHead">
		  <span  slot="left">
		    <mt-button icon="back" @click.native="back">返回</mt-button>
		  </span>
		</mt-header>
		<h2 class="shopDetail">{{phoneList.name}}商品详情</h2>
		<ul class="bannerPhone" >
			<li class="detail">
				<img :src="phoneList.sku_info && phoneList.sku_info[0].ali_image"/>
			</li>
			<li class="shopInfo">
				<h2 class="infoTitlt">商品信息</h2>
				<div class="infoSuggest">
					<h4 class="infoName">{{phoneList.shop_info&&phoneList.shop_info.spu_title}}</h4>
					<p class="subTitle">{{phoneList.shop_info&&phoneList.shop_info.highlights}}</p>
					<div class="shopMoney">
						<i>￥</i>
						<span>{{phoneList.price}}</span>
					</div>
				</div>
				
			</li>
			<li class="edition" @click="changePhone($event)">
				<h4 class="editionTitle">已选版本</h4>
				<div class="editionTitleType">
					<p>
						<span>颜色:  </span>
						<span>{{phoneList.sku_info&&phoneList.sku_info[currentIndex].spec_json[0].show_name}}</span>
					</p>
					<p>
						<span>规格:  </span>
						<span>{{phoneList.sku_info&&phoneList.sku_info[currentIndex].spec_json[1]&&phoneList.sku_info[currentIndex].spec_json[1].show_name}}</span>
					</p>
					<p>
						<span>数量:  </span>
						<span>{{buyNum}}</span>
					</p>
				</div>
				<div class="changeEdition"></div>
			</li>
			<li class="shopInfoImg">
				<h4 class="shopInfoImgTitle">商品详情</h4>
				<img v-for="itemImg in phoneList.shop_info&&phoneList.shop_info.tpl_content.base.images.ali_mobile.url" :src="itemImg"/>
			</li>
			<li class="parameter">
				<h4 class="shopInfoImgTitle">技术参数</h4>
				<img
				 v-for="parameterImg,index in phoneList.shop_info&&phoneList.shop_info.tpl_content.base.images.ali.url" 
				 :key="index"
				 :src="parameterImg"/>
			</li>
		</ul>
		<ul class="bannerItemFooter">
			<li class="smallCar">
				<img class="smallCarImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536067535834&di=a46881d01e7c740a5dd751721096d552&imgtype=0&src=http%3A%2F%2Fimage.tupian114.com%2F20140424%2F13101274.png" />
				<div class="buyNum">
					<i class="num">{{$store.state.dataList.length}}</i>
				</div>
			</li>
			<li
			 class="joinCar footerBtn"
			 @click="addShopCar"
			 >加入购物车
			 </li>
			<li class="newBuy footerBtn" @click="noBuy">现在购买</li>
		</ul>
		<div class="changeModel" v-show="isChangeModel">
			<div class="changeModel-head">
				<div class="phone-img">
					<img :src="phoneList.sku_info&&phoneList.sku_info[currentIndex].ali_image" />
				</div>
				<div class="changeModel-info">
					<h4 class="changeModel-info-title">坚果Pro 2S</h4>
					<p class="phone-color">
						<span>{{phoneList.sku_info&&phoneList.sku_info[currentIndex].spec_json[0].show_name}}</span>
						<span v-show="isChangeSize">{{phoneList.sku_info&&phoneList.sku_info[currentIndex].spec_json[1]&&phoneList.sku_info[currentIndex].spec_json[1].show_name}}</span>
					</p>
					<div class="money">
						<span>￥</span>
						<span>{{phoneList.sku_info&&phoneList.sku_info[currentIndex].price}}</span>
					</div>
				</div>
			</div>
			<div class="changeColor">
				<h2 class="changeColor-title">颜色选择</h2>
				<div class="changeColor-content">
					<ul class="change-color-list">
						<li v-for="phoneItem,index in phoneList.sku_info"
							:key="index"
							@click="replace(index)"
						    :class="{active:currentIndex === index}"
						>
							<span class="colorType">
								<img :src="phoneItem.spec_json[0].image" />
							</span>
							<p class="colorText">{{phoneItem.spec_json[0].item_value}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="changeNum">
				<h2 class="changeNum-title">选择数量</h2>
				<i @click="reduce">-</i>
				<span class="num">{{buyNum}}</span>
				<i @click="add">+</i>
			</div>
		</div>
		<div class="mask" v-show="isChangeModel">
			<div class="clickMask" @click="backChange()"></div>
		</div>
		
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
	export default{
	components:{Indicator},
		data(){
			return {
				phoneList: {},
				titles:'',
				isChangeModel:false,
				currentIndex:0,
				buyNum:1,
				popupVisible:false
			}

		},
		computed:{
			isChangeSize(){
				if ( this.phoneList.sku_info&&this.phoneList.sku_info.length == 1 ){
					return false
				}else{
					return true
				}
			}
		},
		methods:{
			changePhone(e){
				this.isChangeModel = true;
			},
			backChange(){
				this.isChangeModel = false;
			},
			back(){
				this.$router.go(-1);
			},
			replace(i){
				this.currentIndex = i;
			},
			reduce(){
				if ( this.buyNum < 2 ) return
				this.buyNum--;
			},
			add(){
				if ( this.buyNum > 9 ){
					alert('单次最多购买10件')
					return
				}
				this.buyNum++;
			},
			addShopCar(){
				let token = window.localStorage.getItem('token')
				if ( !token || token == '' ){
					this.$router.push({name:'Login'})
				}else {
					this.$store.commit('addCar',{
						shopTitle:this.phoneList.shop_info&&this.phoneList.shop_info.spu_title,

						shopInfo:`${this.phoneList.sku_info&&this.phoneList.sku_info[this.currentIndex].spec_json[0].show_name} ${this.phoneList.sku_info&&this.phoneList.sku_info[this.currentIndex].spec_json[1]&&this.phoneList.sku_info[this.currentIndex].spec_json[1].show_name}`,
						num:this.buyNum,

						price:this.phoneList.sku_info&&this.phoneList.sku_info[this.currentIndex].price,

						imgURL:this.phoneList.sku_info&&this.phoneList.sku_info[this.currentIndex].ali_image
						
					})
					MessageBox('提示', '加入成功');
				}
			},
			noBuy(){
				alert('暂未开放 ^_^')
			}
		},
		async created(){
			Indicator.open('加载中...');
			let id = this.$route.params.ids
			let {data} =await this.$api.getBannerPhone(id)
			this.phoneList = data.data.list[0]
			Indicator.close();

		},
		watch:{
			$route:{
				async handler(){
					if ( this.$route.path === "/item/1000517" ){
						this.titles = '坚果 Por 2S'
					}else if ( this.$route.path === "/item/1000464" ){
						this.titles = '坚果 R1'
					}
				},
        		immediate: true
			}
		}
	}
</script>


<style>	
	.clickMask{
		width:100%;
		height:100%;
	}
	.addOk{
		width:100%;
		height:80px;
		background:rgba(0,0,0,.7);
		text-align:center;
		color:#fff;
		line-height:80px;
		font-size:1rem;
	}
	.change-color-list .active{
		border:1px solid green;
	}
	.bannerPhoneHead{
		width:100%;
		height:2.8125rem;
		background:#000;
		position:fixed;
		left:0;
		top:0;
		z-index:10;
		font-size:1rem;
	}
	.shopDetail{
		width:90%;
		margin:auto;
		background:#e8dfdf;
		font-family:'微软雅黑';
		font-weight:920;
		text-align:center;
		line-height:2.8888888888rem;
		border-radius:1rem;
		margin-top:0.7777777rem;
		padding: 0 1rem 0 1rem;
		box-sizing:border-box;
	}
	.bannerPhone{
		width:100%;
		height:100%;
		background:#e3e3e3;
	}
	.detail{
		width:100%;
		background:#fff;
		margin-top:0.88888rem;
	}
	.detail img{
		width:100%;
		height:20rem;
	}
	.shopInfo{
		width:100%;
		background:#fff;
		margin-top:0.555rem;
	}
	.shopInfo .infoTitlt{
		box-sizing:border-box;
		padding:0 .6rem;
		width:100%;
		height:2.5rem;
		line-height:2.5rem;
		font-size:.885rem;
		font-weight:720;
		color:#666;
		white-space:nowrap;
		text-overflow:ellipsis;
		border-bottom:1px solid #ebd0d0;
	}
	.shopInfo .infoSuggest{
		padding:.8rem .9rem;
		user-select:text;
		border-bottom:1px solid #ebd0d0;
	}
	.infoSuggest .infoName{
		font-size:.8555rem;
		margin-bottom:.4rem;
		color:#333;
	}
	.infoSuggest .subTitle{
		font-size:.888rem;
		color:#7f7f7f;
		margin-bottom:.4rem;
		line-height:1.5rem;
	}
	.infoSuggest .shopMoney{
		color:red;
		font-weight:700;
	}
	.infoSuggest .shopMoney i{
		font-style:normal;
		font-size:.777rem;
	}
	.infoSuggest .shopMoney span{
		font-size:.999rem;
	}
	.shopInfo .dscount{
		padding:.8rem .9rem 0;
	}
	.dscount .dscountTitle{
		font-size:.7rem;
		line-height:1.2222rem;
		padding:0 0 .95rem 0;
	}
	.dscount .buyGift{
		padding-bottom:.65rem;
	}
	.dscount .buyGift .buyGiftIco{
		display:inline-block;
		width:2rem;
		height:1.33333rem;
		border:1px solid yellow;
		border-radius:40%;
		color:#e6b217;
		text-align:center;
		font-size:.888rem;
	}
	.dscount .buyGift .buyGiftShop{
		margin-left:.8rem;
		font-size:.85555rem;
		line-height:1.5rem;
	}
	.edition{
		position:relative;
		margin-top:.565rem;
		padding:.8rem 1.5rem .6rem .8rem;
		background:#fff;
	}
	.edition .editionTitle{
		font-size:.8rem;
		color:#999;
		height:2rem;
		line-height:1.77rem;
	}
	.edition .editionTitleType{
		font-size:.8775rem;
	}
	.edition .editionTitleType p{
		line-height:1.85rem;
		color:#333;
		font-weight:800;
	}
	.changeEdition{
		width:1.68rem;
		height:1.45rem;
		position:absolute;
		left:85%;
		top:50%;
		background:url(../../../static/img/changeEdition.png) no-repeat 50%;
	}
	.shopInfoImg{
		margin-top:.565rem;
		background:#fff;
		font-size:.9222rem;
		line-height:2.22rem;
		color:#666;
	}
	.shopInfoImgTitle{
		margin-left:.6rem;
		height:2.33rem;
	}
	.shopInfoImg img{
		width:100%;
		display:block;
	}
	.parameter{
		margin-top:.565rem;
		background:#fff;
		font-size:.9222rem;
		line-height:2.22rem;
		color:#666;
		margin-bottom:4rem;
	}
	.parameter img{
		width:100%;
		display:block;
	}
	.bannerItemFooter{
		width:100%;
		height:3rem;
		position:fixed;
		bottom:0;
		left:0;
		background:#fff;
		overflow:hidden;
		padding:.5rem 0;
		z-index:33;
	}
	.bannerItemFooter li{
		float:left;
	}
	.bannerItemFooter .smallCar{
		width:15%;
		height:100%;
		position:relative;
		text-align:center;
		line-height:3rem;
	}
	
	.smallCar .smallCarImg{
		width:2rem;
		height:2rem;
		vertical-align:middle;
	}
	.smallCar .buyNum{
		position:absolute;
		top:.788rem;
		left:60%;
		line-height:1rem;
	}
	.smallCar .buyNum .num{
		display:block;
		padding:0 .2rem;
		height:1.1rem;
		background:red;
		border:1px solid red;
		text-align:center;
		border-radius:50%;
		font-size:.8rem;
		font-family:'微软雅黑';
		color:#fff;
		font-weight:700;
	}
	.bannerItemFooter .footerBtn{
		width:40%;
		height:100%;
		text-align:center;
		border:1px solid #e5dcdc;
		border-radius:.677rem;
		line-height:3.11rem;
		color:#8c8c8c;
		font-weight:700;
	}
	.bannerItemFooter .joinCar{
		margin:0 .3rem 0 .3rem;
		background:#fcfcfc;
	}
	.bannerItemFooter .newBuy{
		background:#6e98f4;
		color:#fff;
	}

	.changeModel{	
		width:100%;
		overflow-y:auto;max-height:26.375rem;
		padding-top:20px;
		position:fixed;
		left:0;
		bottom:0;
		z-index:10;
		background:#fff;
	}
	.changeModel .changeModel-head{
		height:7rem;
		background:#f7f1f1;
		position:relative;
		box-shadow:0 5px 13px rgba(0,0,0,.12);
	}
	.changeModel .changeModel-head .phone-img{
	display:inline-block;
		width:30%;
		height:7.5rem;
		background:#fff;
		border-radius:.7rem;
		position:absolute;
		top:-1rem;
		left:.6rem;
	}
	.changeModel-head .phone-img img{
		width:100%;
		height:100%;
	}
	.changeModel-head .changeModel-info{
		display:inline-block;
		margin:.8rem .6rem .8rem 38%;
	}
	.changeModel-info .changeModel-info-title{
		font-size:.95rem;
		margin-bottom:.3rem;
		color:#333;
	}
	.changeModel-info .phone-color{
		font-size:.8rem;
		line-height:.85rem;
		margin-bottom:.7rem;
		color:#7f7f7f;
	}
	.changeModel-info .money{
		font-weight:700;
		font-size:1rem;
		color:red;
	}
	.changeColor .changeColor-title{
		padding:0 .6rem;
		height:2rem;
		line-height:2.3rem;
		font-size:1rem;
		color:#666;
		margin-bottom:.8rem;
	}
	.changeColor .changeColor-content{
		padding-top:.94737rem;
		padding:0 .6rem;
	}
	.changeColor-content .change-color-list{
		overflow:hidden;
	}
	.change-color-list li{
		float:left;
		text-align:center;
		width:31.3%;
		border-radius:.2rem;
		box-sizing:border-box;
		padding:.55rem 0;
		margin-right:calc((100% - 31.3% * 3 - 8px) / 2);
		margin-bottom:.6rem;
		border:1px solid #cec9c9;
	}
	.change-color-list li .colorType{
		display:block;
		width:1.3125rem;
		height:1.3125rem;
		margin: 0 auto .4rem;
		border:1px solid #e5e5e5;
		border-radius:50%;
		overflow:hidden;
	}
	.change-color-list li .colorType img{
		width:100%;
		height:100%;
		vertical-align:top; 

	}
	.change-color-list li .colorText{
		color:#333;
		font-size:.8rem;
		line-height:1;
	}
	.changeCapacity .changeCapacity-title{
		padding:0 .6rem;
		height:2rem;
		line-height:2.3rem;
		font-size:1rem;
		color:#666;
		margin-bottom:.8rem;
		margin-top:.5rem;
	}
	.changeCapacity .capacityContent{
		padding-bottom:.3rem;
		padding-left:.6rem;
		overflow:hidden;
	}
	.changeCapacity .capacityContent li{
		font-weight:700;
		padding:.475rem;
		text-align:center;
		margin-right:calc((100% - 31.3% * 3 - 8px) / 2);
		border-radius:.2rem;
		border:1px solid #cec9c9;
		float:left;
		color:#666;
		font-size:.8rem;
		line-height:1.6;
	}
	.changeNum{
		padding-left:.6rem;
		margin-bottom:4rem;
	}
	.changeNum .changeNum-title{
		height:2rem;
		line-height:2.3rem;
		font-size:1rem;
		color:#666;
		margin-bottom:.8rem;
	}
	.changeNum i{
		display:inline-block;
		width:2rem;
		height:2rem;
		border:1px solid gray;
		border-radius:50%;
		text-align:center;
		font-size:1.666rem;
		line-height:2rem;
		vertical-align:middle;
		font-family:'宋体';
	}
	.changeNum .num{
		margin: 0 .8rem 0 .8rem;
	}
	.mask{
		width:100%;
		height:100%;
		position:fixed;
		left:0;
		top:2.8125rem;
		z-index:8;
		background:#000;
		opacity:0.777;
	}
</style>






