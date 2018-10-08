<template>
	<div class="phoneShell">
		<h3 class="phoneShellTitle">壳套膜</h3>
		<div
		class="phoneShellHeadImg"
		>
			<img @click="goTophoneShellImg" :src="imdData.src" />
		</div>
		
		<ul class="phoneShellList">
			<router-link 
			tag="li"
			v-for="item,index in dataList"
			:key='index'
			:to="{name:'Bannerphone',params:{ids:item.id}}"
			>
				<img class="phoneShellItemImg" :src="item.sku_info[0].ali_image"/>
				<span class="phoneShellItemTitle">{{item.shop_info.spu_title}}</span>
				<span class="goToLoockIco"></span>
			</router-link>

		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imdData:[],
				idList:[],
				dataList:[]
			}
		},
		async created(){
			let {data} = await this.$api.getTypeData()
			this.imdData = data[1].image
			this.idList = data[1].layout.dataList.map(item => item.sku.slice(item.length-9).slice(0,7))

			let datas = await this.$api.getBannerPhone(this.idList)
			this.dataList = datas.data.data.list
		},
		methods:{
			goTophoneShellImg(){
				this.$router.push({
					name:'Navitem',
					params:{id:70}
				})
			}
		}
	}
</script>

<style>
	.phoneShell{
		background:#fff;
	}
	.phoneShell .phoneShellTitle{
		height:2.4rem;
		line-height:2.4rem;
		font-size:.95rem;
		font-weight:700;
		color:#666;
		padding-left:.7rem;
		border-bottom:1px solid #f5f5f5;
	}
	.phoneShell .phoneShellHeadImg{
		width:100%;
		padding:.7rem .7rem;
		box-sizing:border-box;
		border-bottom:1px solid #f5f5f5;
	}
	.phoneShell .phoneShellHeadImg img{
		background-size:contain|cover;
		width:100%;
		height: auto;
	}
	.phoneShell .phoneShellList{
		overflow:hidden;
	}
	.phoneShell .phoneShellList li{
		position:relative;
		float:left;
		display:flex;
		align-items:center;
		width:50%;
		height:5rem;
		box-sizing:border-box;
		border-right:1px solid #f5f5f5;
		border-bottom:1px solid #f5f5f5;
	}
	.phoneShell .phoneShellList li .phoneShellItemImg{
		float:left;
		width:2.5rem;
		height:2.5rem;
		margin:0 .6rem;
	}
	.phoneShell .phoneShellList li .phoneShellItemTitle{
		float:left;
		overflow:hidden;
		text-overflow:ellipsis;
		line-height:1.2;
		font-weight:700;
		font-size:.8rem;
		color:#666;
		white-space:nowrap;
		padding-right:1.5rem;
		box-sizing:border-box;
	}
	.phoneShell .phoneShellList li .goToLoockIco{
		position:absolute;
		top:40%;
		right:.5rem;
		width:1rem;
		height:1rem;
		background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAFWC366AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDNCQzM4MDc4NkU5MTFFNzg0NkJBNUJBMEI4RjU4REIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDNCQzM4MDg4NkU5MTFFNzg0NkJBNUJBMEI4RjU4REIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0M0JDMzgwNTg2RTkxMUU3ODQ2QkE1QkEwQjhGNThEQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0M0JDMzgwNjg2RTkxMUU3ODQ2QkE1QkEwQjhGNThEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuBXYiMAAAIkSURBVHjaYmDAAtJABCOUIw3EHiAGJ0wGIIBAwBlEMAOxFYZGMAEQQCApHyB2AGIOIH6MbCQIJAExCxDvYoIKCEIFQOABioEwABBADOjWgbTqYFOVhu4JuFlMDDhAGrI5KByYltkwAYAAAhlqAsRGUP4dIN6Hbh4oAJ4BsSoQswOxEBAbQzU/QzYJGcRBQwsGDgDxLUYcLk5B9g66IjEgDkDi/wd5AKaIF4gj0TTMQjYpEYhZsUnCAEAAIcciziBlRIua2VB3MKDHITJIxWYSKDBvALEekhgoMM+iK/oNxLehqQKrQmYo/ROI7wOxFjaFzEiC34H4CRBrIIkZAvE5ZjQ3fgXiV9AIh/leA1vYuKHx96MrSkBzwh5QkmFCSyZsSPxDQHwPOTCj0dLRCWj4wUM8HIi5kRRcAOJL6NHCj8QH6T6FLVo4oIkNZP9+bHEHEGCwRGcLxJpI4vehPvvPQCRgRCo1sIGbQHyQGINAzr4OxPJooQQDItC0wAqNerwuggEeIPaD0rjAaSA+T8ggGBCAGsiBx8DDUJ/gNQgGRIHYGy3lMKAVEXthKYmRiHCUgtYMuCLkHxDvYCbCoM9A/BaIlXBYDBKTJOQiCSD2IuCaXUD8CJdBwkDsSyB89kOLe6yBzQ81gAuPK48B8RVc0c8NNYAPjwFnQGUPvgQJMkASjwFXoK7AC0CB+ByHQbeg+ew/sZkWBiygJcA9aMr9x0ACAABJcFceB3MiAAAAAABJRU5ErkJggg==) no-repeat 50%;
		background-size:contain;
	}
</style>