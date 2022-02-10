export const addTask=()=>{
    return async (dispatch,getState)=>{
    const taskes=[...getState.taskes];
    let time=new Date();
    const task={
        id:Math.floor(Math.random()*1000),
        mytask:getState.task,
        time:`${time.getHours()}:${time.getMinutes()}`,
        editshow:`none`,   
    }
    if(getTask!=='' && getTask!==' ' ){
      taskes.push(task);
      await dispatch({type:'ADD_TASK',payload:taskes})
     toast.success('وظیفه با موفقیت اضافه شد',{
         position:'top-right',
         closeButton:true,
         closeOnClick:true,
         draggable:true
     }); 
    }  
    }
}
export const deleteTask=(taskId)=>{
    return async (dispatch,getState)=>{
    const taskes=[...getState.taskes];
    const filtertask=alltask.filter(p=>p.id!==taskId);
    await dispatch({type:"DELETE-TASK",payload:filtertask})
    }
}
export const handelChangeTask=(event,id)=>{
    return async (dispatch,getState)=>{
        const alltask=[...getState.taskes];
        const taskIndex=alltask.findIndex(t=> t.id===id);
        alltask[taskIndex].mytask=event.target.value;
        await dispatch({type:"UPDATE-TASK",payload:alltask})
    }
}