function Dynamic(){
 let myName ='Shivam Maurya';
 let fullName ='Shivam Maurya';
 let number =456;
     return (
        <div>
     <h1>This is {myName}</h1>
   <h1>{number}</h1>
     <h2>My name is {fullName}</h2>
     </div>)
   
}
export default Dynamic;

export function Multiple(){
    let fullName =()=>{
        return 'shivam maurya';
    }

    return <h1>this is {fullName()}</h1>;
}
export function Random(){
    let number =Math.random()*100;
    return <h1>Random Number is: {number}</h1>
}
 export function Randomm(){
    let number=Math.random()*100;
    return <h1 style={{'background-color':'red'}}>Random number is: {Math.round(number)}</h1>
 }


  
    
