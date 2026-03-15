// import React from "react";
// function App(){
//   return(
// <React.Fragment>

//     <h1>Healthy Food</h1>
//     <ul class="list-group">
//   <li class="list-group-item">Daal</li>
//   <li class="list-group-item">Chawal</li>
//   <li class="list-group-item">Sabzi</li>
//   <li class="list-group-item">Achaaar</li>
//   <li class="list-group-item">Water</li>
// </ul>

//    </React.Fragment>
// );
// }
// export default App;

// import FoodItems from "../FoodItems";
// function App(){
//  let foodItems = ['Daal', 'Chawal' ,'Sabzi' ,'Achhar' ,'Water' ];
//   //let foodItems =[];

//   return (
//         <>
//    <h1>Healthy Food</h1>
//    {foodItems.length===0 && <h3>still learning</h3>}
//    <FoodItems items ={foodItems}></FoodItems>
//  </>
//   );

// }
// export default App;
import Error from "./Errormessage";
import FoodItems from "../FoodItems";
import './App.css';

import FoodInput from "./FoodInput";
import Container from "./Container";
import { useState } from "react";
function App() {
 // let foodItems = ["Daal" ,"Chawal" , "Sabzi"  , "Achhar"  , "Water" ,'shaam'];
  // let foodItems = [];
  //let foodItems = ['team','sewa'];
// let textStateArr = useState("food item entered by user");
//let textToShow = textStateArr[0];
// let setTextState =textStateArr[1];
//let [textToShow,setTextState]=useState();
let [foodItems,setFoodItems]=useState([
  // "Daal" ,"Chawal" , "Sabzi"  , "Achhar"  , "Water" ,'shaam'
 
]);
//let [textToShow ,setTextState] = useState("food item entered by user");
//console.log(`current value of textState:${textToShow}`);
//handleonChange

  const onKeyDown =(event) => {
    if(event.key==="Enter"){
      let newFoodItems =event.target.value;
      let newItems =[...foodItems , newFoodItems];
      setFoodItems(newItems);
      //console.log("Food Entered is :"+ newFoodItems);
    }

  //   console.log(event.target.value);
  //   setTextState (event.target.value);
  };


  return <>
   <Container>
    
      <h1> Healthy Food</h1>
<FoodInput handleKeyDown={ onKeyDown }></FoodInput>

      <Error sub={foodItems}></Error>
      <FoodItems sub={foodItems}></FoodItems>
  </Container>
  <Container>
    <h1>healthy life is wealthy life</h1>
  </Container>
</>  
}

export default App;




{/* <Error sub={foodItems}></Error> */}

// (sub) is most important parameter as arguement we can give any value as parameter instead of it we can use (Items)
// according to implemented parameter we use arguement in any file