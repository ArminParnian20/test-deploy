export const taskesReducers=(state=[],action)=>{
     switch(action.type){
         case "ADD-TASK":
             return [...action.payload]
         case "DELETE-TASK":
            return [...action.payload]
         case "UPDATE-TASK":
            return [...action.payload]
         default:
             return state;
     }

}