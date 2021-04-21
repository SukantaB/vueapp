import Input from "../../components/ui/Input/Input.vue"
import Button from "../../components/ui/Button/Button.vue"
import ChatItem from "../../components/ChatItem/ChatItem.vue"

export default {
    name:"Login",
    components:{
        Input,
        Button,
        ChatItem
    },
    data: () => ({
        text: "",
    }),
    methods: {
        _text(e){
            this.text = e.target.value.trim()
        },
        _onSubmit(){
            if(!this.text){
                return this.$store.commit("_togglenotification", {show: true, info: "Message can not be empty"});
            }
            this.$store.dispatch("sendMessage", {message: this.text})
            this.text = ""
        }
    },
    computed:{
        chats(){
            setTimeout(()=>{
                const element = document.getElementById("last-div");
                if(element) element.scrollIntoView();
            }, 100)
            return this.$store.getters.getchats
        }
    }
}