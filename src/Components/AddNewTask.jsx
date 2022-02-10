import React from 'react';
     const AddNewTask = () => {
     return ( 
         <div>
           <form onSubmit={event=>event.preventDefault()}>
           {/* <div className="input-group container w-75 mb-3">
                 <button className="btn btn-primary" onClick={context.addtask}>افزودن</button>
                 <input type="text" className="text-end form-control"
                placeholder="کار جدید" 
                value={context.task} onChange={context.newTask}></input>
          </div> */}
          </form>
         </div>
       
      )
 }
 export default AddNewTask;