// import  EventHandling  from "./EventHandle"
// import { EventProps } from "./EventProps";
//import "./App.css";
//import { EventPropagation } from "./EventPropagation";
import { DerivedState } from "./assets/DerivedState";
import {State}  from "./assets/Hooks/State";
import { LiftingStateUp } from "./assets/Hooks/LiftingStateUp";
function App (){


    return(<>
      <div>
    < div className="container">
{/*     
    <EventHandling></EventHandling>
    <EventProps></EventProps> */}
   
     </div>
   <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg className="h-6 w-6 stroke-white" fill="none"  viewBox="0 0 24 24" >
      
      </svg>
    </span>
  </div>
  <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p> 
 
  {/* <EventPropagation></EventPropagation>  */}
 
</div>


 
   
</div>
<div className="Increment">
   <State></State>
   <DerivedState></DerivedState>
</div>

<LiftingStateUp></LiftingStateUp>

</>
 )
}

export default App;