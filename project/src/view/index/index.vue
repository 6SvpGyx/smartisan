<template>
	<div class="index">
		<Theader></Theader>
		<Banner></Banner>
		<IndexNav></IndexNav>
		<IndexHotShop></IndexHotShop>
		<RecommenImg></RecommenImg>
		<NewShop></NewShop>
		<phoneSet></phoneSet>
		<jgPhoneOther></jgPhoneOther>
		<OfficialParts></OfficialParts>
		<charge></charge>
		<peripheryBrand></peripheryBrand>
		<footRecommenImg></footRecommenImg>
		<goodShop></goodShop>
		<footImg></footImg>
	</div>
</template>

<script>
	import Theader from '@/components/header'
	import Banner from '@/components/banner'
	import Tfooter from '@/components/footer'
	import IndexNav from './nav/indexNav'
	import IndexHotShop from './hotShop/hotShop'
	import RecommenImg from './recommenImg/RecommenImg'
	import NewShop from './NewShop/NewShop'
	import phoneSet from './phoneSet/phoneSet'
	import jgPhoneOther from './jgPhoneOther/jgPhoneOther'
	import OfficialParts from './OfficialParts/OfficialParts'
	import charge from './charge/charge'
	import peripheryBrand from './peripheryBrand/peripheryBrand'
	import footRecommenImg from './footRecommenImg/footRecommenImg'
	import goodShop from './goodShop/goodShop'
	import footImg from './footImg/footImg'
	
	export default {
		components:{
			Theader,
			Banner,
			Tfooter,
			IndexNav,
			IndexHotShop,
			RecommenImg,
			NewShop,
			phoneSet,
			jgPhoneOther,
			OfficialParts,
			charge,
			peripheryBrand,
			footRecommenImg,
			goodShop,
			footImg
		}
	}
</script>

<style>
	.index{
		background:#e8e8e8;
		padding-bottom:3.4375rem;
	}
</style>