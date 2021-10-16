import React, { Component } from 'react';
import Taskes from './Components/Taskes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component{
state={
    showTask:false,
    taskes:[],
    task:'',
    
}
newTask=(event)=>{
     this.setState({task:event.target.value})
}
handlDeletetask=(id)=>{
   const {taskes:alltask}=this.state;
   const filtertask=alltask.filter(p=>p.id!==id);
   this.setState({taskes:filtertask});
}
addtask=()=>{
    const taskes=[...this.state.taskes];
    let time=new Date();
    const task={
        id:Math.floor(Math.random()*1000),
        mytask:this.state.task,
        time:`${time.getHours()}:${time.getMinutes()}`,
        editshow:`none`,   
    }
    if(this.state.task!=='' && this.state.task!==' ' ){
         taskes.push(task);
    this.setState({taskes,task:''})  ;
     toast.success('وظیفه با موفقیت اضافه شد',{
         position:'top-right',
         closeButton:true,
         closeOnClick:true,
         draggable:true
     }); 
    }
 
}
handelShowTask=()=>{
    this.setState({showTask:!this.state.showTask})
}
handelChangeTask=(event,id)=>{
      const {taskes:alltask}=this.state;
      const taskIndex=alltask.findIndex(t=> t.id===id);
      alltask[taskIndex].mytask=event.target.value;
      this.setState({taskes:alltask});
}
Editbtn=(id)=>{
    const {taskes:alltask}=this.state;
    const taskIndex=alltask.findIndex(t=> t.id===id);
    if(alltask[taskIndex].editshow===`none`){
        alltask[taskIndex].editshow=`block`;
    }
    else{
        alltask[taskIndex].editshow=`none`;
    }
    console.log(alltask[taskIndex].editshow);
    this.setState({taskes:alltask})
}
render(){
        let taskTag=null;   
        const {taskes,showTask}=this.state;
        let badgeStyle='';
        if(taskes.length >3){badgeStyle='bg-success';}
        if(taskes.length===2 || taskes.length===3){badgeStyle='bg-warning';}
        if(taskes.length <2){badgeStyle='bg-danger'}

        if(this.state.showTask){
                taskTag=<Taskes taskes={taskes} editbBtn={this.Editbtn} changeTask={this.handelChangeTask} deletTask={this.handlDeletetask}></Taskes>
        }
        return(
        <div className="container pt-2 rtl w-100 text-center bg-secondary">
            <h1 className="alert alert-danger m-0">برنامه روزانه</h1>
            <h2 className="alert-info m-4 fw-bolder rtl alert"> کار وجود دارد<span className={`badge m-1 rounded-pill ${badgeStyle}`}>{`${this.state.taskes.length}`}</span></h2>
          <form onSubmit={event=>event.preventDefault()}>
           <div className="input-group container w-75 mb-3">
                <button className="btn btn-primary" onClick={this.addtask}>افزودن</button>
                <input type="text" className="text-end form-control" value={this.state.task} placeholder="کار جدید" onChange={this.newTask}></input>
            </div>
          </form>
            <ToastContainer draggable/>
        
            <div>
                 {taskTag}
            </div>
            <div>
            <button className={`btn btn-lg notify  m-3  ${showTask? 'btn-success':'btn-warning'}`} onClick={this.handelShowTask}>نمایش</button>
            </div>
         
        </div>
    )
}

}

export default App;