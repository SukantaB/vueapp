export default {
    name: 'Header',
    props: {
        tittle: String
    },
    methods:{
        logout(){
            this.$store.dispatch("signout")
        }
    }
  }