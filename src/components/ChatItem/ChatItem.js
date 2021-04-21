
export default {
    name: "ChatItem",
    props: {
        chat: Object,
    },
    computed:{
        position(){
            const userid = this.$store.getters.getuser.id
            if(this.chat.sender  ===  userid) return "me"
            else return "other"
        }
    }
}