import { createStore } from "vuex";
import {getCurrentList, deleteTask, updateTask, addTask , signin, signout, signup } from "./actions"


// state.commit for mutation , state.dispatch for actions

export default createStore({
    state: () => ({
        spinning: false,
        tasklist : ([{name: "Tast 1", description : "Task 1 Description", id: "1", status:"completed"}, {name: "Tast 2", description : "Task 2 Description", id: "2", status:"new"}]),
        notification : { 
            show: false,
            info : "",
        },
        user: {
            id : "",
            login : false
        }
    }),
    mutations: { 
        //Synch way to update state
        _togglespinnig : (state, payload) =>{
            state.spinning = payload
        },
        _tasklist : (state, payload) => {
            state.tasklist = payload;
            state.spinning = false
        },
        _togglenotification : (state, payload) => {
            state.notification.info = payload.info;
            state.notification.show = payload.show;
        },
        _clearnotification : (state) => {
            state.notification.show = false
            state.notification.info = ""
        },
        _user : (state, payload) => {
            state.user = payload
        }
    },
    actions: {
        // Asych way to update state
        getCurrentList,
        deleteTask,
        updateTask,
        addTask,
        signin, 
        signout, 
        signup
    },
    modules: {},
    getters :{
        gettasklist : (state) => {
            return state.tasklist
        },
        getspinning : (state) => {
            return state.spinning
        },
        getnotificaiton : (state) => {
            return state.notification
        },
        getuser : (state) => {
            return state.user
        },
    }
})