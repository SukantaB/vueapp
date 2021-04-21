import Input from "../../components/ui/Input/Input.vue"
import Button from "../../components/ui/Button/Button.vue"

export default {
    name:"Signup",
    components:{
        Input,
        Button
    },
    data: () => ({
        email: "",
        password: "",
        confirmpassword:""
    }),
    methods: {
        _email(e){
            this.email = e.target.value.trim()
        },
        _password(e){
            this.password = e.target.value.trim()
        },
        _passwordconfirm(e){
            this.confirmpassword = e.target.value.trim()
        },
        _onSubmit(){
            if(!this.email || !this.password){
                return this.$store.commit("_togglenotification", {show: true, info: "Email or password  can not be empty"});
            }
            if(this.password !== this.confirmpassword){
                return this.$store.commit("_togglenotification", {show: true, info: "Password and confirm password is different"});
            }
            this.$store.dispatch("signup", { email: this.email, password : this.password })
        }
    }
}