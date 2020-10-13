<template>
    <div>
        <router-view></router-view>
        <play-fooder />
    </div>
</template>

<script>
import PlayFooder from "../components/header/PlayFooder";

export default {
   data () {
     return {

     }
   },
   components: {
       PlayFooder
   }
}
</script>
