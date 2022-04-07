

import React from 'react';


function Counter1(props){
 const {num} = props ;
     const [count, setCount] = React.useState(num);
    const handleInc = ()=>{
        console.log(count)
        setCount(count+1);
    }
    const handleDec = ()=>{
        setCount(count-1);
    }
    const handleMulti = ()=>{
        setCount(count*2);
    }
    return (
        <>
        <h1>Count</h1>
        <h2>{count}</h2>
        <button onClick= {()=> handleInc()}>Add</button>
        <button onClick= {()=> handleDec()}>Reduce</button>
        <button onClick= {()=> handleMulti()}>Multiply</button>
        </>
    )



}

export default Counter1 ;