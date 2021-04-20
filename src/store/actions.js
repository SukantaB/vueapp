import { firebase } from "../utils/Firebase"


export const getCurrentList =  async (state) => {
    try{
        state.commit("_togglespinnig",true)
        state.commit("_tasklist", [])
    }
    catch(err){console.log(err)}
}

export const deleteTask =  async (state) => {
    try{
        state.commit("_togglespinnig",true)
        state.commit("_tasklist", [])
    }
    catch(err){console.log(err)}
}

export const updateTask = async (state) => {
    try{
        state.commit("_togglespinnig",true)
        state.commit("_tasklist", [])
    }
    catch(err){console.log(err)}
}

export const addTask = async (state, payload) => {
    try{
        state.commit("_togglespinnig",true);
        state.commit("_tasklist", payload);
    }
    catch(err){console.log(err)}
}

export const signup = async (state, payload) => {
    state.commit("_togglespinnig",true);
    firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
            state.commit("_user", {id: data.uid, login: true })
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
            state.commit("_user", {id: data.uid, login: true })
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
            state.commit("_user", {id: "", login: false })
            state.commit("_togglespinnig",false)
        })
        .catch(err =>  {
            state.commit("_togglespinnig",false);
            state.commit("_togglenotification", {show: true, info: err.message})
        })
}