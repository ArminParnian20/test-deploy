import React,{useContext} from 'react';
import Task from './Task';
const Taskes = () => {
    return ( 
          <div> 
              {/* {taskes.map(p=>{
                  return(
                      <div>
                    <Task mytask={p.mytask}
                    key={p.id}
                    time={p.time}
                    deleted={()=>context.handlDeletetask(p.id)}
                    changed={(event)=>context.handelChangeTask(event,p.id)}
                    showedit={p.editshow}
                    editbBtn={()=>context.Editbtn(p.id)}
                    ></Task> 
                      </div>
               )
                  })
              } */}
          </div>
          
     );
}
 
export default Taskes;