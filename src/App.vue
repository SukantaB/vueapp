<template>
      <Loader />
      <Header v-if="loggedin" tittle="Tasker" />
      <Notification />
      <router-view />
      <Footer />
</template>

<script>
  import {useRoute, useRouter} from "vue-router"
  import Header from "./components/Header/Header.vue"
  import Loader from "./components/ui/Loader/Loader.vue"
  import Notification from "./components/ui/Notification/Notification.vue"
  import Footer from "./components/Footer/Footer.vue"

  import { firebase }  from "./utils/Firebase"

  export default {
    name: 'App',
    components:{
      Header,
      Loader,
      Notification,
      Footer
    },
    beforeMount(){
      const router = useRouter();
      const route = useRoute();
        this.$store.commit("_togglespinnig",true)
        firebase.auth().onAuthStateChanged(user => {
          if(!user) {
            this.$store.commit("_user", {id : "", login: false})
            router.replace("/login");
            this.$store.commit("_togglespinnig",false)
            return
          }
          else if(route.path === "/login" || route.path === "/signup" || route.path=="/"){ 
            router.replace("/");
          }
          this.$store.commit("_user", {id : user.uid, login: true})
          this.$store.dispatch("getCurrentList", user.uid);
          this.$store.dispatch("getMessage");
          this.$store.commit("_togglespinnig",false)
        })  
    },
    computed:{
      loggedin(){return this.$store.getters.getuser.login}
    }
  }
</script>

<style>
body{
  margin: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.background-container{
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
}
</style>
