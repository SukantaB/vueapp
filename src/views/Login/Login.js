import Input from "../../components/ui/Input/Input.vue"
import Button from "../../components/ui/Button/Button.vue"

export default {
    name:"Login",
    components:{
        Input,
        Button
    },
    data: () => ({
        email: "",
        password: ""
    }),
    methods: {
        _email(e){
            this.email = e.target.value.trim()
        },
        _password(e){
            this.password = e.target.value.trim()
        },
        _onSubmit(){
            if(!this.email || !this.password){
                return this.$store.commit("_togglenotification", {show: true, info: "Email or password can not be empty"});
            }
            this.$store.dispatch("signin", { email: this.email, password : this.password })
        }
    }
}