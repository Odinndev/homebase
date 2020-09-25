<template>

<div class="signin">

  <div class="uk-child-width-1-1@m uk-grid">
    
      <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body">

              <form @submit.prevent="pressed">
                  <fieldset class="uk-fieldset">

                      <legend class="uk-legend">Innskrá</legend>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">E-mail</label>
                        <input class="uk-input" v-model="email" type="email" placeholder="email@email.com">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Lykilorð</label>
                        <input class="uk-input" v-model="password" type="password">
                      </div>

                      <div class="uk-margin">
                        <button style="background: #546E7A; color: white;" class="uk-button uk-width-1-1" type="submit">Innskrá</button>
                      </div>

                      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <strong class="font-bold">Holy smokes!</strong>
                      <span class="block sm:inline">{{ error.message }}</span>
                      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                      </span>
                    </div>

                      <div class="uk-margin">
                        <p>
                          Enginn aðgangur?
                          <router-link :to="{ name: 'users-register'}">
                            Nýskráning
                          </router-link>
                        </p>
                      </div>

                  </fieldset>
              </form>

          </div>
      </div>
  </div>

</div><!-- .signin -->

</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { data } from 'uikit/dist/js/uikit-core'

export default {

data () {

return {
 email: '',
 password: '',
 error: '',
}

},

computed: {

},

filters: {

},

methods: {

 pressed(){
   firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
    console.log(data);
    this.$router.push('/lenda'); 
   }).catch(error => this.error = error);
 }

},

}

</script>