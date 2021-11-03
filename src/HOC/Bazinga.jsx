import React from 'react';

const Bazinga = (RootComponet) => {
    return props=>(
          <div className="rtl text-center bg-dark">
            <RootComponet {...props}></RootComponet>
        </div>
    );
      
    
}
 
export default Bazinga;