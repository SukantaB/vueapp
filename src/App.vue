<template>
    <div class="background-container" >
      <Loader />
      <Header tittle="Tasker"/>
      <Notification />
      <router-view />
      <Footer />
    </div>
</template>

<script>
  import Header from "./components/Header/Header.vue"
  import Loader from "./components/ui/Loader/Loader.vue"
  import Notification from "./components/ui/Notification/Notification.vue"
  import Footer from "./components/Footer/Footer.vue"

  export default {
    name: 'App',
    components:{
      Header,
      Loader,
      Notification,
      Footer
    }
  }
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.background-container{
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
