export default{
    name: "ListItem",
    props: {
        name : String,
        index: Number,
        id: String
    },
    methods: {
        onClick(){ console.log("hit") },
        onDelete(e, id){ 
            e.stopPropagation();
            this.$store.dispatch("deleteTask", {id, userid: this.$store.getters.getuser.id})
        },
        ondragEnd(...arg){console.log(arg)},
        ondragStart(e, id){
            e.dataTransfer.dropEffect = "move"
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.setData("id", id)
        }
    },
}