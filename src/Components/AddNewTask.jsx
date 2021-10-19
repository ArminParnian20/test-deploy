import React from 'react';
 const AddNewTask = ({addtask,task,newTask}) => {
     return ( 
         <div>
           <form onSubmit={event=>event.preventDefault()}>
           <div className="input-group container w-75 mb-3">
                <button className="btn btn-primary" onClick={addtask}>افزودن</button>
                <input type="text" className="text-end form-control" value={task} placeholder="کار جدید" onChange={newTask}></input>
            </div>
          </form>
         </div>
       
      );
 }
 export default AddNewTask;