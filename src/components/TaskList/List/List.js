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
            const index = tasks.findIndex(l => l.id == id);
            tasks[index].status = zone
            this.$store.commit("_tasklist", tasks )
        }
    },
}