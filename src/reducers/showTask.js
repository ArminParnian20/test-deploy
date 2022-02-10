export const showTaskReducer=(state=true,action)=>{
    switch(action.type){
        case "SHOW_TASK":
            return !state;
        default:
            return state;
    }
}