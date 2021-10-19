import { createContext } from "react";

const SimpleContext=createContext({
    state:{},
    handlDeletetask:()=>{},
    addtask:()=>{},
    handelChangeTask:()=>{},
    newTask:()=>{},
    Editbtn:()=>{}

})
export default SimpleContext;