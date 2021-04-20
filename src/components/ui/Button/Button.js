export default {
    name: 'button-component',
    methods: {
        onClick() {this.onSubmit() }
    },
    props: {
        text: String,
        classname: String,
        onSubmit: Function
    }
  }