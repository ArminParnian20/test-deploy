import { createContext } from "react";

const SimpleContext=createContext({
    task:'',
    taskes:[],
    handlDeletetask:()=>{},
    addtask:()=>{},
    handelChangeTask:()=>{},
    newTask:()=>{},
    Editbtn:()=>{}

})
export default SimpleContext;