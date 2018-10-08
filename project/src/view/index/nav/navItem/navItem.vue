<template>
	<div class="navItem">
		<mt-header class="navHead" :title="navItemTitle">
		  <div @click="goBack" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </div>
		</mt-header>
		<ul class="navList">
			<li
			 tag="li"
			  v-for="item,index in navItem"
			 :key="index"
			 @click="lookItem(item)"
			 >
				<div class="item-left">
					<span class="buyGive">买赠</span>
					<img class="itemPng" v-lazy="item.sku_info[0].ali_image" />
				</div>
				<div class="item-right">
					<h4 class="item-title">{{item.shop_info.spu_mobile_title}}</h4>
					<h3 class="sub_title">{{item.shop_info.spu_mobile_sub_title}}</h3>
					<div class="item-type" v-for="option in item.shop_info.spec_v2[0].spec_values">
						<img :src="option.image"></img>
					</div>
					<div class="money"><span>￥</span>{{item.price}}</div>
				</div>
			</li>
		</ul>
		<p class="footNo" v-show="isALLloding">全部加载完成</p>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				navItem:[],
				itemImg:[],
				navItemTitle:'',
				idConfig:[],
				isALLloding:false
			}
		},
		methods:{
			lookItem(item){
				this.$router.push({
					name:'Bannerphone',
					params:{ids:item.id}
				})
			},
			goBack(){
				this.$router.go(-1)
			}
		},
		async created(){
				this.$store.commit('showLoading')
				this.isALLloding = false
				let id = this.$route.params.id

				//需要传入四个id 获取四个导航数据
				let {data} =await this.$api.getNavItem({category_id:id})

				//除了四个导航 其他的数据
				let datas = await this.$api.getIndexDataA()
				if ( id == 64 ){
					this.navItem = data.data.list.slice(0,5)
				}else if ( id==77||id==60||id==69||id==61||id==70||id==71||id==72||id==75||id==74 ) {
					this.navItem = data.data.list
				}else if ( this.$route.params.num == 0 ) {
					this.idConfig = datas.data.floors[0].dataList.map( (item) => item.slice(0,7) )

					let dataList = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataList.data.data.list
				}else if ( this.$route.params.num == 2 ){
					this.idConfig = datas.data.floors[2].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}else if ( this.$route.params.num == 2 ){
					this.idConfig = datas.data.floors[2].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}else if ( this.$route.params.num == 3 ){
					this.idConfig = datas.data.floors[3].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}else if ( this.$route.params.num == 4 ){
					this.idConfig = datas.data.floors[4].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}else if ( this.$route.params.num == 5 ){
					this.idConfig = datas.data.floors[5].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}else if ( this.$route.params.num == 8 ){
					this.idConfig = datas.data.floors[8].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}else if ( this.$route.params.num == 10 ){
					this.idConfig = datas.data.floors[10].dataList.map( item=>item.slice(0,7) )

					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list

				}else if ( this.$route.name == 'Sousuo' ){
					let {data} = await this.$api.searchItem(this.$route.params.sousuoId)
					this.idConfig = data.data.spu
					let dataLists = await this.$api.getBannerPhone(this.idConfig)
					this.navItem = dataLists.data.data.list
				}
				this.$store.commit('hideLoading')
				this.isALLloding = true
		},
		watch:{
			$routr:{
				handler(){
					let id = this.$route.params.id
					let num = this.$route.params.num
					if ( id == 64 ){
						this.navItemTitle = '手机'
					}else if( id == 77 ){
						this.navItemTitle = '空气净化类'
					}else if ( id == 60 ){
						this.navItemTitle = '官方配件'
					}else if ( id == 69 ){
						this.navItemTitle = '品牌周边'
					}else if ( id == 61 ){
						this.navItemTitle = '第三方商品'
					}else if ( id == 70 ){
						this.navItemTitle = '壳套膜'
					}else if ( id == 71 ){
						this.navItemTitle = '充电线材'
					}else if ( id == 72 ){
						this.navItemTitle = '耳机音响'
					}else if ( id == 74 ){
						this.navItemTitle = '图书'
					}else if ( id == 75 ){
						this.navItemTitle = '文具'
					}else if ( num == 0 ){
						this.navItemTitle = '热销商品'
					}else if ( num == 2 ){
						this.navItemTitle = '新品首发'
					}else if ( num == 3 ){
						this.navItemTitle = '坚果 Pro 2S “足迹”系列保护套'
					}else if ( num == 4 ){
						this.navItemTitle = '坚果系列手机及配件'
					}else if ( num == 5 ){
						this.navItemTitle = '官方配件'
					}else if ( num == 8 ){
						this.navItemTitle = '品牌周边'
					}else if ( num == 10 ){
						this.navItemTitle = '品牌精选'
					}
				},
        		immediate: true
			}
		}
	}
</script>

<style scoped>
	.footNo{
		width:100%;
		height:6rem;
		display:flex;
		justify-content:center;
		line-height:2.3rem;
		font-size:.85rem;
		color:#999;
	}
	.navHead{
		width:100%;
		height:3.125rem;
		background:#000;
		position:fixed;
		top:0;
		left:0;
	}
	.navList{
		width:100%;
		padding-top:3.125rem;
		overflow:hidden;
	}
	.item-left{
		float:left;
		width:42%;
		height:8.75rem;
		margin-right:1.11111rem;
	}
	.navList li{
		height:11.25rem;
		padding:1rem;
		border-bottom:1px solid #ebebeb;
	}
	.buyGive{
		display:block;
		width:2.2rem;
		height:1.1888rem;
		border:1px solid #f0948d;
		border-radius:1rem;
		text-align:center;
		color:red;
		font-size:0.75rem;
		line-height:1.2rem;
	}
	.itemPng{
		width:8.6875rem ;
		height:8.6875rem ;
		vertical-align:middle;

	}
	.item-right{
		margin-top:2.4rem;
		width:50%;
		float:left;
	}
	.item-title{
		width:100%;
		height:1.31111111111rem;
		overflow:hidden;
		font-size:1rem;
		text-overflow:ellipsis;
		white-space:nowrap;
		line-height:1.19rem;
	}
	.sub_title{
		width:100%;
		height:2rem;
		overflow:hidden;
		font-size:0.8rem;
		line-height:2.3rem;
		color:gray
	}
	.item-type{
		margin-left:3px;
		display:inline-block;
		width:.8rem;
		height:.8rem;
		margin-to:hidden;
	}
	.item-type img{
		verticalp:.7rem;
		border:1px solid #e8d4d4;
		border-radius:30px;
		overflow-align:top;
		border-radius:30px;
		padding:0;
		width:100%;
		height:100%;
	}
	.money{
		color:red;
		margin-top:.93rem;
	}
	.navItem{
		background:#fff;
	}
	img[lazy=loading] {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	  background: url("../../../../../static/lazy_img/loading.gif") no-repeat;
	}
</style>