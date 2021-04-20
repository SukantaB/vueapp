export default {
    name: 'button-component',
    methods: {
        onClick() {  this.onAddTask() }
    },
    props: {
        text: String,
        classname: String,
        onAddTask: Function
    }
  }