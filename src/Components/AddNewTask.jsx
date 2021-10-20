import React from 'react';
import { useContext } from 'react/cjs/react.development';
import SimpleContext from './../Context';

     const AddNewTask = () => {
      const context=useContext(SimpleContext);
     return ( 
         <div>
           <form onSubmit={event=>event.preventDefault()}>
           <div className="input-group container w-75 mb-3">
                <button className="btn btn-primary" onClick={context.addtask}>افزودن</button>
                <input type="text" className="text-end form-control"
               placeholder="کار جدید" 
               value={context.task} onChange={context.newTask}></input>
            </div>
          </form>
         </div>
       
      );
 }
 export default AddNewTask;