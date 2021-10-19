import React, { Component } from 'react';
import Taskes from './Components/Taskes';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddNewTask from './Components/AddNewTask';
import SimpleContext from './Context';
import Header from './Components/Header';

class App extends Component{
state={
    showTask:false,
    taskes:[],
    task:''
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
        if(this.state.showTask){
            taskTag=<Taskes taskes={taskes} editbBtn={this.Editbtn} changeTask={this.handelChangeTask} deletTask={this.handlDeletetask}></Taskes>
        }    
                return(
                    <SimpleContext.Provider
                    value={{state:this.state,handelChangeTask:this.handelChangeTask}}
                    >
            <div className="container pt-2 rtl w-100 text-center bg-secondary">
             <Header></Header>
          <ToastContainer draggable/>
            <AddNewTask  addtask={this.addtask}  newTask={this.newTask}  task={this.state.task }/>
                 {taskTag}
            <div>
            <button className={`btn btn-lg notify  m-3  ${showTask? 'btn-success':'btn-warning'}`} onClick={this.handelShowTask}>نمایش</button>
            </div>
             </div>

                    </SimpleContext.Provider>

)
}

}

export default App;