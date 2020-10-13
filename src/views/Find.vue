<template>
    <div class="finddiv">
         
        <find-header />

        <router-view></router-view>
    </div>
</template>

<script>
import FindHeader from "../components/header/FindHeader";

export default {
   data () {
     return {}
   },
   components: {
       FindHeader
   }
}
</script> 

<style lang = "stylus">

</style>