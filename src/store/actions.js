import moment from "moment";
import { firebase } from "../utils/Firebase"


export const getCurrentList =  async (state, payload) => {
    try{
        state.commit("_togglespinnig",true);
        const db = firebase.firestore()
        const data = await db
                            .collection("tasks")
                            .where("user", "==", payload)
                            .get()
        state.commit("_tasklist", data.docs.map(d=> ({...d.data(), id : d.id})))
    }
    catch(err){
        state.commit("_togglespinnig",false)
        state.commit("_togglenotification", {show: true, info: err.message})
    }
}

export const deleteTask =  async (state, payload) => {
    try{
        state.commit("_togglespinnig",true)
        const db = firebase.firestore()
        await db
            .collection("tasks")
            .doc(payload.id)
            .delete()
        state.dispatch("getCurrentList", payload.userid);
    }
    catch(err){
        state.commit("_togglespinnig",false)
        state.commit("_togglenotification", {show: true, info: err.message})
    }
}

export const updateTask = async (state, payload) => {
    try{
        state.commit("_togglespinnig",true)
        const db = firebase.firestore()
        await db
            .collection("tasks")
            .doc(payload.id)
            .set({name: payload.name, status: payload.status, description: "", user: payload.userid})
        state.dispatch("getCurrentList", payload.userid);
    }
    catch(err){
        state.commit("_togglespinnig",false)
        state.commit("_togglenotification", {show: true, info: err.message})
    }
}

export const addTask = async (state, payload) => {
    try{
        state.commit("_togglespinnig",true);
        const db = firebase.firestore()
        await db
            .collection("tasks")
            .add({name: payload.name, status: "new", description: "", user: payload.userid})
        state.dispatch("getCurrentList", payload.userid);
    }
    catch(err){
        state.commit("_togglespinnig",false)
        state.commit("_togglenotification", {show: true, info: err.message})
    }
}

export const signup = async (state, payload) => {
    state.commit("_togglespinnig",true);
    firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
            console.log(data);
            // state.commit("_user", {id: data.uid, login: true })
            state.commit("_togglespinnig",false)
        })
        .catch(err =>  {
            state.commit("_togglespinnig",false);
            state.commit("_togglenotification", {show: true, info: err.message})
        })
}

export const signin = async (state, payload) => {
    state.commit("_togglespinnig",true);
    firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
            console.log(data);
            // state.commit("_user", {id: data.uid, login: true })
            state.commit("_togglespinnig",false)
        })        
        .catch(err =>  {
            state.commit("_togglespinnig",false);
            state.commit("_togglenotification", {show: true, info: err.message})
        })
}

export const signout = async (state, ) => {
    state.commit("_togglespinnig",true);
    firebase
        .auth()
        .signOut()
        .then(() =>{
            // state.commit("_user", {id: "", login: false })
            state.commit("_togglespinnig",false)
        })
        .catch(err =>  {
            state.commit("_togglespinnig",false);
            state.commit("_togglenotification", {show: true, info: err.message})
        })
}

export const getMessage = async (state) => {
    try{
        const db = firebase.firestore();
        await db
            .collection("chats")
            .limit(50)
            .onSnapshot(q=> {
                const data = q.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                .sort((c1,c2) =>{
                    if ( moment(c1.createdAt).isBefore(c2.createdAt)) return -1
                    else 1
                })
                state.commit("_chats", data)
            })
    }
    catch(err){
        state.commit("_togglenotification", {show: true, info: err.message})
    }
}

export const sendMessage =  async (state, payload) => {
    try{
        const db = firebase.firestore();
        const user = firebase.auth().currentUser
        await db
            .collection("chats")
            .add({sendername: user.email, message: payload.message, sender: user.uid, createdAt: moment().toISOString()})
    }
    catch(err){
        state.commit("_togglenotification", {show: true, info: err.message})
    }
}