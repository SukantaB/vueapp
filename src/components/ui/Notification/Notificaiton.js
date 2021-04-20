export default {
    name:"notification-component",
    methods: {
        closenotificaiton(){
            this.$store.commit("_clearnotification");
        }
    },
    computed: {
        show() { return this.$store.getters.getnotificaiton.show },
        info() { return this.$store.getters.getnotificaiton.info },
    }
}