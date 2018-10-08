<template>
  <div id="app">
    <router-view />
    <router-view name="footer"/>
    <loading v-if='$store.state.LOADING'/>
  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components:{
    loading
  }
}
</script>


