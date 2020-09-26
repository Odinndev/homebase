<template>

<div class="header">

<b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
               <img :src="icon" width="20" height="20" alt="">
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-item href="/klor/nymaling">
                +Ný Mæling
            </b-navbar-item>
            <b-navbar-item href="/klor/klor">
                Mælingar
            </b-navbar-item>
        </template>

        <template slot="end">

            <b-navbar-item tag="div">

        <!-- // If you are logged in -->
          <ul class="uk-navbar-nav" v-if="loggedIn">

              <li><a href="#" class="uk-link-reset"><v-icon size="16">mdi-account-box</v-icon>Sund.skr</a></li>
              <li><a href="#" @click="logout"><span uk-icon="icon: sign-out"></span>Útskrá</a></li>
          </ul>

          <!-- // If you are not logged in -->
          <ul class="uk-navbar-nav" v-else>
              <li><a href="/"><span uk-icon="icon: sign-in"></span>Innskrá</a></li>
              <li><a href="/users/register"><span uk-icon="icon: push"></span>Nýskrá</a></li>
          </ul>
            </b-navbar-item>

        </template>
    </b-navbar>

</div><!-- .header -->

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
 loggedIn: false,
 userId: '',
 icon: "icon.png",
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

filters: {

},

mounted(){
 this.setupFirebase();

},

methods: {

 logout(){
   alert('test')
 },

 setupFirebase(){
   firebase.auth().onAuthStateChanged(user=> {
    if(user){
      console.log('logged in');
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
   })
 },

 logout(){
 firebase.auth().signOut().then(()=> {
  this.$router.push("/")
 }) 
}

},

}

</script> 