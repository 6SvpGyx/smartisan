<template>
<div class="searchPage">
	<div class="search">
		<div class="input-box">
			<input type="text" v-model="value" @input="search" placeholder="请输入要搜索的内容" >
			<span class="search-ico"></span>
		</div>
		<router-link :to="{name:'Index'}"  class="back">返回</router-link>
	</div>
	<ul class="searchContent">
		<li
		 class="searchItem"
		v-for="item,index in dataList"
		:key="index"
		@click="sousuo($event)"
		>
			<span class="activeText"  ></span>{{item}}
		</li>
	</ul>
</div>
</template>

<script>
export default {
	data(){
		return {
			value:'',
			dataList:[]
		}
	},
	methods:{
		async search(){
			let {data} = await this.$api.searchPath(this.value)
			this.dataList = data.data
		},
		sousuo(e){
			this.value = e.target.innerText
			this.$router.push({
				name:'Sousuo',
				params:{sousuoId:this.value}
			})
		}
	}
	
}
</script>

<style>
.searchPage{
	padding-top:3rem;
}
.search{
	box-sizing:border-box;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:3rem;
	padding:.46rem .3rem;
	z-index:200;
	background-color:#f5f5f5;
	box-shadow:0 1px 10px 0 rgba(0,0,0,.1);
	overflow:hidden;
}
.search .input-box{
float:left;
	width:75%;
	height:1.9rem;
	border-radius:.8rem;
	position:relative;
}
.search .input-box input{
	font-size:.9rem;
	width:100%;
	height:100%;
	padding-left:1.5rem;
	background-color:transparent;
	border-radius:.8rem;
	outline:none;
	font-size:1rem;
}
.search .input-box .search-ico{
	display:inline-block;
	width:1.5rem;
	height:1.5rem;
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyN0JBQ0NFNTQ2QTIxMUU4OTc5MjlEODQyOERGRDZCMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyN0JBQ0NFNjQ2QTIxMUU4OTc5MjlEODQyOERGRDZCMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3QkFDQ0UzNDZBMjExRTg5NzkyOUQ4NDI4REZENkIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3QkFDQ0U0NDZBMjExRTg5NzkyOUQ4NDI4REZENkIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ncNiIgAAA9FJREFUeNrMmVlIVGEUx++MQ7agldkuSlGR0UNQtphBe7RHVNRU5pIPvfRQFNVjYRRRFEkRlGGrVj5lD0EpYoYttkEZBoU1ZJYYlGXbaP9DR5iGOd9d5t7L/OGH8p259/7nu99yvjOepqYmzYJGgflgGkgHaSAB+MAX8AG8BA9BJbgPOjWb5DFhuifYBArARJPPeQvOg+OgxQ3THpAH9oGhUT6vAxSBvaDdKdOp4CLI0uwV9Xw2qLZysVcRmwUeOWC4uzNug21WLvYJ7StAKYg3eJ+PzC+QDIaDOJ1rKH4YDAE7ozU9G5SBHorrfoByhl5xW1icrs0Ay4AfpCjutYOvP2B1TKfxkEgSPk/L1imelM0Gn0FfIAcU8luIpC6wBlwza9rLvSaN4XdgPaixOI4H8rK3QIh/BuPBezMTMV9h+AVvJDVRTL5PYDEoFuL9wVEzPd0LvOZJEa4AGw7YtHJ4eRldK8QngXojPZ0rGA7yzQM2LnedvKs2CvHdRodHgRA/CWodWKdpN9wixJbr7bxkeiyYIGy5hZpzquQNJtIyvErP9FwhVs7ZmpM6IbTP0zOdqTDttG7wGw3XVD3T6UKs2gXTP0GdsKYnq0ynRmhv4cXeDTUI7cNUphOEBMgttQrtiSrTccJa6pZ+Kw4foumvZr6lA+qnWMtF081Ckh7vkunRilxFNN0oJOgZLhimITAlQvs3Vbbn5eN9JC1xwfRkMDhCe71qXpHpKiGWrXN6sUP5Qvstvc2ljhP8cFHSstlBw6ncMZFUpmeaXkOJEKf6xCCHTBcJk/2uIm39LzUtEnKAAeCCgZO1WW0FS4XYQaP5dIviqEMZ12kbjVPaeUSI3QPXzZwR9wOp3JTDWV+iDT1cKnRAkA8GXWZM0w60gS+WThRPwCILZkeCCnBM8caol58ZPWSG6g7Ypfj8CM6Ba7kI00fn3ll8+m7gk7hKmUaHoVSApGPWHoPJDm0Ez0Oytd5gDO+oSRbeSgmv30GzpknbwSFVtuWglMZVVVMqDi5UJS5R6A94oIhT8f6MNFS8Oje/CcaBs0ZmtUHVckFmuqau3YnGvQYeQmM1j8sMl/lcZ1ZdfOakEvIM8JTng9+A8eJw4x4LPxT1BSvBHO6tNGHct3IGWcVr/Bvhfj7uDFWt4xx3XNCq6XBRHTAlZOPp4HpJm4l7kPFLYLXiM1RxpfJd0GfDGCWTr2yYmH7+XzK+kf/m+rTYkVHjrXYMD7sVx2NcMt7u1WJPNNnWgatC/HEsmg41fiWsnQr//lg13W2cxjhVVr9r/346mQkCfwUYACzE4s6QiHG6AAAAAElFTkSuQmCC) no-repeat;
	background-size:1rem 1rem;
	background-position:60% 100%;
	position:absolute;
	left:0;
	top:0;
}
.search .back{
	float:right;
	width:3rem;
	height:1.5rem;
	border-radius:.3rem;
	color:#626262;
	text-align:center;
	margin-left:.3rem;
	margin-top:.1rem;
	font-size:1rem;
	line-height:1.5rem;
	border:1px solid #d7d7d7;
}
.searchContent{
	margin-top:.5rem;
}
.searchContent .searchItem{
	width:100%;
	height:3rem;
	line-height:3rem;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	font-size:1rem;
	height:3rem;
	padding:0 .9rem;
	color:#333;
	border-bottom:1px solid #ddcbcb;
	box-sizing:border-box;
}
.searchContent .searchItem .activeText{
	color:#5275db;
	font-weight:800;
}
</style>

