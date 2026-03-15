import {useState} from "react";


//parent Component :- It holds the inputvalue and state handler setInputvalue.
export const LiftingStateUp=()=>{
    const[inputValue,setInputValue] =useState("");
    return(
    <>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue} ></InputComponent>
    <DisplayComponent inputValue={inputValue}></DisplayComponent>
    
    </>
    );
};
  

//Input Component :- it receives the inputvalue and setInputvalue as props.
// It updates the state via setinput value when the input changes
const InputComponent =({inputValue ,setInputValue})=>{
    
    return (
        <>

        <input type="text" placeholder="Enter your Name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        
        </>
    );
};

//Display Component :- Receives input value as a props and dislplays the current input value


const DisplayComponent = ({inputValue}) =>{
    return (
    <>
    <p> The current input value is : {inputValue} </p>;
    
    
    </>
    );
};