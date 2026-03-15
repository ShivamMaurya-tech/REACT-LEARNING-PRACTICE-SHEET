// const User=[
    
//     {
//     name:"Shivam",
//     age:22,
//     city:"Delhi"},
    
//     {
//     name:"Ravi",
//     age:24,
//     city:"Delhi"},
    
//     {
//     name:"Raja",
//     age:21,
//     city:"Delhi"},
    
//     {
//     name:"Rehan",
//     age:20,
//     city:"Delhi"},
    
//     {
//     name:"Sheetal",
//     age:20,
//     city:"Delhi"}

// ];




import { useState } from "react";
 export const DerivedState =()=>{
// eslint-disable-next-line no-unused-vars
const [Users,setUsers]=useState([
   { name:"Shivam",
    age:22,
    city:"Delhi"},
    
    {
    name:"Ravi",
    age:24,
    city:"Delhi"},
    
    {
    name:"Raja",
    age:21,
    city:"Delhi"},
    
    {
    name:"Rehan",
    age:20,
    city:"Delhi"},
    
    {
    name:"Sheetal",
    age:20,
    city:"Delhi"}
]);
console.log(Users);
const totalUsers=Users.length;
console.log(totalUsers);

const AverageCount=Users.reduce((acc,cur)=>acc+cur.age,0)/totalUsers; //reduce method is used to calculate the average 
   
    console.log(AverageCount);

    return<>
    <h1>UserList</h1>
    <ul>
        {Users.map((item,index)=>{
            return(
           
           <li key={index}>
            <h2>Name:{item.name}</h2>
                <h2> Age:{item.age} Years Old</h2>
            <h2>City:{item.city}</h2>
            <h2> {AverageCount}</h2>
           
            
            </li>
            );
        })}
            </ul>
            </>
}        
   
  
