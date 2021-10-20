import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({mytask,deleted,time,showedit,changed,editbBtn}) => {
 const warn=()=>{
  deleted(); 
  toast.warn('یک وظیفه با موفقیت حذف شد.',{
    position:'top-right',
    closeButton:true,
    closeOnClick:true,
    draggable:true
});}
  return ( 
    <div className="card text-center mb-2 ">
      <div className="card-header">
        <h5> </h5>
      </div>  
      <div className="card-body">
        <p className="card-text">{`${mytask}`}</p>
        </div> 
      <div className={`edit-box`} style={{display:`${showedit}`}}>
    <input type="text" className="p-2 m-2 rounded-3 w-75 text-end lead fs-6" value={`${mytask}`} onChange={changed}>
    </input>
    </div>
    <ToastContainer draggable/>
  <div className="btn-group w-50 mb-4 m-auto" role="group" aria-label="Basic outlined example">
      <i className="fas fa-trash-alt btn btn-outline-primary"onClick={warn}></i>
      <i className="fas fa-edit btn btn-outline-primary" onClick={editbBtn}></i>
      </div>
  <div className="card-footer text-muted display-3"> 
        <p>{time}</p>
      </div>
   </div>
   );
} 
export default Task;