import React, { useState, useEffect } from 'react';
import './App.css';
import useCustomeCounter from './Custom';
import Fetchdata from './Fetchdata';

function App() {
  const [name,setName] =useState("Rohit");
  const [age,seAge] =useState(15);
  const [age1,seAge1] =useState(100); 

  const changeclick = () =>{
    setName("rohitttt");
    seAge(age+1)
  }

  const changeclick1 = () =>{
    setName("rohitttt");
    seAge1(age1-1)
  }
  useEffect(() => {
    console.log("run");
  },[age==16]);
  const data1 = useCustomeCounter();
  
  return (
    <div className="App">
  {/* <h1>{name}</h1>
  <h2>{age}</h2>
  <button onClick={changeclick}>Cliick</button>
  <br/>
  <br />
  <h2>{age1}</h2>
  <button onClick={changeclick1}>Cliick</button>
  <br/>
  <br />
  <h1>Custom Hooks</h1>
  <h2>Roll no {data1.sno}</h2>
  <button onClick={data1.increseRollnum}>Cliick</button>  */}
  <Fetchdata />
    </div>
    //other way to use useSate Hooks
    //  <div className="App">
    //  <h1>{name}</h1>
    //  <h2>{age}</h2>
    //  <button onClick={() => seAge(age+1)}>Cliick</button>
    //   <button onClick={changeclick}>Cliick</button> 
    //   </div>
  );
}

export default App;
