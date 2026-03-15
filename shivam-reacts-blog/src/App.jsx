// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { App, Apple } from './Header.jsx';

// import Header from './Header';
// function App() {
//   return (
//     <div>
//     <Header/>
//       <h1>coding says</h1>
//       <h1>hello shivam</h1>
//     </div>
//   )
// }

// export default App


import Shivaay, { ArrayComponent, Orange } from './Header';
import Login,{KgButton } from './Usercomponent'
import Dynamic,{Multiple,Random,Randomm} from './Dynamic Components'
function Apple(){
return(
<div>
  <h1>First component {Sum()}</h1>
  <App></App>
 <Shivam></Shivam>
 <Sum></Sum> 
 <Login></Login>
 <Shivaay></Shivaay>
<ArrayComponent></ArrayComponent>
<Orange></Orange>
<KgButton></KgButton>
<Dynamic></Dynamic>
<Multiple></Multiple>
<Random></Random>
<Randomm></Randomm>
<Randomm></Randomm>
<Randomm></Randomm>
<Randomm></Randomm>
<Randomm></Randomm>

</div>
);
}


function App(){
  return(
    <h1>fruit</h1>
  );
}

function Shivam(){
  return(
    <div><h1>Twice</h1>
    <h1>thrice</h1>
    </div>
  )
}

function Sum(){
  return (
10+10

  );
  
}


export default Apple;
