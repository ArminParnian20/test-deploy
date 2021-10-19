import React, { useContext } from 'react';
import SimpleContext from './../Context';
const Header = () => {
    const context=useContext(SimpleContext);
    const {taskes}=context.state;
    let badgeStyle='';
    if(taskes.length >3){badgeStyle='bg-success';}
    if(taskes.length===2 || taskes.length===3){badgeStyle='bg-warning';}
    if(taskes.length <2){badgeStyle='bg-danger'}
    
    return ( 
        <div>
            <h1 className="alert alert-danger m-0">برنامه روزانه</h1>
            <h2 className="alert-info m-4 fw-bolder rtl alert"> کار وجود دارد
            <span className={`badge m-1 rounded-pill  ${badgeStyle}`}>
            {`${taskes.length}`}</span></h2>  
        </div>
     );
}
 
export default Header;