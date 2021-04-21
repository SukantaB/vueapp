import ListItem from "../ListItem/ListItem.vue";

export default {
    name: "List",
    components: {
        ListItem
    },
    props: {
        newtasks: Array,
        completedtasks: Array
    },
    methods: {
        onDrop(e, zone){
            const id = e.dataTransfer.getData("id");
            const tasks = this.$store.getters.gettasklist;
            const task = tasks.find(l => l.id == id);
            this.$store.dispatch("updateTask", {...task, status: zone , userid: this.$store.getters.getuser.id} )
        },
        onCheck(e, id){
            const tasks = this.$store.getters.gettasklist;
            const task = tasks.find(l => l.id == id);
            this.$store.dispatch("updateTask", {...task, status: task.status === "new" ? "completed" : "new" , userid: this.$store.getters.getuser.id} )
        }
    },
}