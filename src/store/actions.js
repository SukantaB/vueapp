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