<template>

<div class="header">

<b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">

            <b-navbar-item tag="div">

        <!-- // If you are logged in -->
          <ul class="uk-navbar-nav" v-if="loggedIn">

              <li><a href="#" class="uk-link-reset"><v-icon size="16">mdi-account-box</v-icon>{{ userId }}</a></li>
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