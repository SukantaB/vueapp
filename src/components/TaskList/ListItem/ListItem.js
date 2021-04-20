export default{
    name: "ListItem",
    props: {
        name : String,
        index: Number,
        id: String
    },
    methods: {
        onClick(id){ this.$router.push({ name: 'task', params: { id } }) },
        onDelete(e, id){ 
            e.stopPropagation();
            const tasks = this.$store.getters.gettasklist.filter(t => t.id !== id);
            this.$store.commit("_tasklist", tasks)
        },
        ondragEnd(...arg){console.log(arg)},
        ondragStart(e, id){
            e.dataTransfer.dropEffect = "move"
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.setData("id", id)
        }
    },
}