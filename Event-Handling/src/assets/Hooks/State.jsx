// import {usestate} from "react";  
// import styles from"./State.module.css";
// export const State=()=>{
// // let value=0;
// // // function Increament(){
// // const Increament=()=>{ //says callback function
// //     value + 1;
// //     console.log(value);
// // eslint-disable-next-line no-unused-vars
// const [count,setCount] = useState(0);
// console.log(count);

//     return(

//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)} className={styles.Design}>Increament</button>
//       </>)
    
    
    
    
  
import { useState } from "react";
import styles from "./State.module.css";

export const State = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component Rendered");
//   console.log(count);
const HandleClick=() => setCount(count + 1);

  return (
    <>
      <h1>{count}</h1>
      <button className={styles.Design} onClick={HandleClick}>
        Increament
      </button>   
      <ChildComponent Hello={count}></ChildComponent>
       </>
  );
};
      <br />
       
  


function ChildComponent({Hello}) { //In destructuring passing props as Hello
  console.log("Child Component Rendered");
  return (
    <>
      <div>
        <h1>Child Component-</h1>{Hello}
        <br />
      </div>
    </>
  );
}


//state refers that the object which holds data information about the component
//and  can use for future references.






