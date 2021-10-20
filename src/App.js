import React, { useState } from 'react';
import Taskes from './Components/Taskes';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddNewTask from './Components/AddNewTask';
import SimpleContext from './Context';
import Header from './Components/Header';
const App = () => {
    const [getTaskes,setTaskes]=useState([]);
    const [getShowTask,setShowTask]=useState(false);
    const [getTask,setTask]=useState("");
    
    const newTask=(event)=>{
        setTask(event.target.value);
    }
    const handlDeletetask=(id)=>{
      const alltask=[...getTaskes];
      const filtertask=alltask.filter(p=>p.id!==id);
      setTaskes(filtertask);
    }
    const addtask=()=>{
       const taskes=[...getTaskes];
       let time=new Date();
       const task={
           id:Math.floor(Math.random()*1000),
           mytask:getTask,
           time:`${time.getHours()}:${time.getMinutes()}`,
           editshow:`none`,   
       }
       if(getTask!=='' && getTask!==' ' ){
            taskes.push(task);
         setTaskes(taskes);
         setTask('');
        toast.success('وظیفه با موفقیت اضافه شد',{
            position:'top-right',
            closeButton:true,
            closeOnClick:true,
            draggable:true
        }); 
       }
    
    }
    const handelShowTask=()=>{
       setShowTask(!getShowTask);
    }
    const handelChangeTask=(event,id)=>{
         const alltask=[...getTaskes];
         const taskIndex=alltask.findIndex(t=> t.id===id);
         alltask[taskIndex].mytask=event.target.value;
         setTaskes(alltask);
    }
    const Editbtn=(id)=>{
       const alltask=[...getTaskes];
       const taskIndex=alltask.findIndex(t=> t.id===id);
       if(alltask[taskIndex].editshow===`none`){
           alltask[taskIndex].editshow=`block`;
       }
       else{
           alltask[taskIndex].editshow=`none`;
       }
       setTaskes(alltask)
    }
    let taskTag=null;  
    if(getShowTask){
        taskTag=<Taskes></Taskes>
    } 
    return ( 
        <SimpleContext.Provider
        value={{taskes:getTaskes,task:getTask,addtask:addtask,newTask:newTask,handelChangeTask:handelChangeTask,
        handlDeletetask:handlDeletetask,Editbtn:Editbtn}}>
            <div className='container text-center bg-dark'>
        <Header></Header> 
        <AddNewTask/>
        <button className={`btn btn-lg notify  m-3 ${getShowTask? 'btn-success':'btn-warning'}`} onClick={handelShowTask}>نمایش</button>
        {taskTag}
        </div>
        <ToastContainer></ToastContainer>
        </SimpleContext.Provider>
     );
}
 
export default App;

 
    


