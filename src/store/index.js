import { createStore } from "vuex";
import {getCurrentList, deleteTask, updateTask, addTask , signin, signout, signup, getMessage, sendMessage } from "./actions"


// state.commit for mutation , state.dispatch for actions

export default createStore({
    state: () => ({
        spinning: false,
        tasklist : [],
        chats:[],
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
        },
        _chats: (state, payload) => {
            state.chats = payload
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
        signup,
        getMessage,
        sendMessage
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
        getchats: (state) => {
            return state.chats
        }
    }
})