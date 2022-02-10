export const taskReducers=(state="",action)=>{
    switch(action.type){
        case "SET-TASK":
            return [...action.payload]
        case "CLEAR-TASK":
           return [...action.payload]
        default:
            return state;
    }

}