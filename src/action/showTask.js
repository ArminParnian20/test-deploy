export const showTask=()=>{
    return (dispatch)=>{
        await dispatch({typ:"SHOW_TASK"})
    }
}