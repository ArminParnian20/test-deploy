import React from 'react';
import Task from './Task';

const Taskes = ({taskes,deletTask,changeTask,editbBtn}) => {
    return ( 
          <div> 
              {taskes.map(p=>{
                  return(
                    <Task mytask={p.mytask}
                    key={p.id}
                    time={p.time}
                    deleted={()=>deletTask(p.id)}
                    changed={(event)=>changeTask(event,p.id)}
                    showedit={p.editshow}
                    editbBtn={()=>editbBtn(p.id)}
                    ></Task>)
                  })
              }
          </div>
          
     );
}
 
export default Taskes;