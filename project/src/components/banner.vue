<template>
    <div class="tmp1">
        <!-- 1.0 轮播使用的mint-ui中的swipe组件 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item,index in bannerData" :key=index>
          <router-link :to="{path:item.path}">
          	<img :src="item.imgURL" />
          </router-link>
          </mt-swipe-item>   
        </mt-swipe>
    </div>
</template>

<script>
  let bannerConfig = [
      {
        title:'坚果Pro2s',
        path:'/item/1000517',
        imgURL:'https://resource.smartisan.com/resource/92f8b76d69da287e436479ee76b206ad.png'
      },
      {
        title:'坚果3',
        path:'/item/1000406',
        imgURL:'https://resource.smartisan.com/resource/c6a6af67dbf3452b675dacc840dce7c8.png?x-oss-process=image/resize,w_495/format,webp'
      },
      {
        title:'坚果R1',
        path:'/item/1000464',
        imgURL:'https://resource.smartisan.com/resource/33963815c6f1c71bc1b6d8ae2ceac5a4.png'
      }
  ]
	export default {
		data(){
			return {
				bannerList : [],
        bannerData:bannerConfig
			}
		},
		async created(){
			let {data} = await this.$api.getIndexDataA()
			this.bannerList = data.banner.dataList.splice(0,3)
		}
	}
</script>

<style scoped>
    .mint-swipe{
        height: 156.25px;
    }
    .mint-swipe img{
        width: 100%;
        height:100%;

    }
    .mint-swipe-item{
        color:blue;
    }
    .tmp1{
   	  margin-top:2.9rem ;
    }
</style>

