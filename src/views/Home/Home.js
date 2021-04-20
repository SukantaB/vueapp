import Button from "../../components/ui/Button/Button.vue"
import Input from "../../components/ui/Input/Input.vue"
import List from "../../components/TaskList/List/List.vue"

export default {
    name: 'Home',
    components: {
        Button,
        Input,
        List
    },
    data: () => ({
        taskname : ""
    }),
    methods: {
        onAddTask() {
            const taskname = this.taskname;
            if(!taskname) return this.$store.commit("_togglenotification", [{show: true, info: "Task name can not be empty."}]);
            const tasks = this.$store.getters.gettasklist
            this.$store.dispatch("addTask", [...tasks, {name: taskname, description: "", id: "2" , status: "new"}] );
            this.taskname = ""
        },
        setTaskName(e){
            this.taskname = e.target.value;
        }
    },
    computed:{
        newtasks(){
           return this.$store.getters.gettasklist.filter(s => s.status === "new")
        },
        completedtasks(){
            return this.$store.getters.gettasklist.filter(s => s.status === "completed")
         }
    },
    mounted() {
        
    },
  }