import React from 'react';

export default function Counter() {
 const [counter,setCounter]=  React.useState(0);

 const handleIncrement = (value)=>{
   setCounter(counter + value);
 }

  return (
    <>
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={()=> handleIncrement(1)}>Add</button>
      <button onClick= {()=> handleIncrement(-1)  } >Reduce</button>
    </>
  );
}

