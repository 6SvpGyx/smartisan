<template>
<div>
  <mt-header title="选择地区" class="bannerPhoneHead">
	  <span  slot="left">
	    <mt-button icon="back" @click.native="back">返回</mt-button>
	  </span>
	</mt-header>
  <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
 </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
  components: { VDistpicker },
  methods: {
    onSelected(data) {
      this.$store.state.adressInfo = data.province.value + ' | ' + data.city.value + ' | ' + data.area.value
      this.$router.push({name:'My'})
    },
    back(){
		this.$router.go(-1);
	},
  }
}
</script>