<template>

<div class="lenda">

</div><!-- .lenda -->


</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {

data () {

return {

}

},

created(){
 let user = firebase.auth().currentUser;
 if(!user){
  this.$router.push('/')
 }     
},

computed: {

},

methods: {

},

}

</script>