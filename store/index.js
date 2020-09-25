export default {
 async randomVuexAction({ commit, state, rootState }, userId) {
   const ref = this.$fireStore.collection('users').doc(userId)
   try {
     await exerciseRef.update({
       [`randomFoo.FooFoo`]: this.$fireStoreObj.FieldValue.delete()
     })
   } catch (e) {
     return Promise.reject(e)
   }
 }
}