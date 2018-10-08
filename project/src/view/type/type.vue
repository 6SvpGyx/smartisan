<template>
	<div class="type">
		<THead></THead>
		<Phone></Phone>
		<PhoneShell></PhoneShell>
		<chargLine></chargLine>
		<listenMusic></listenMusic>
		<airPurify></airPurify>
		<shoeDress></shoeDress>
		<stationery></stationery>
		<brandGood></brandGood>
		<book></book>
	</div>
</template>

<script>
	import THead from '@/components/header'
	import Phone from './phone/phone'
	import PhoneShell from './PhoneShell/PhoneShell'
	import chargLine from './chargLine/chargLine'
	import listenMusic from './listenMusic/listenMusic'
	import airPurify from './airPurify/airPurify'
	import shoeDress from './shoeDress/shoeDress'
	import stationery from './stationery/stationery'
	import brandGood from './brandGood/brandGood'
	import book from './book/book'
	export default {
		components:{
			THead,
			Phone,
			PhoneShell,
			chargLine,
			listenMusic,
			airPurify,
			shoeDress,
			stationery,
			brandGood,
			book
		}
	}
</script>

<style>
	.type{
		padding-top:2.8125rem;
		padding-bottom:3.4375rem;
		background:#e8e8e8;
	}
</style>