import styles from "./EventHandle.module.css";
 const EventHandling =() =>{


//  function ClickHandle (){
//  alert("hello how are you");
//  }


// Synthetic base Event happens when code is written in thhis format.
  const ClickHandle =(event)=>{

    console.log(event);
    console.log(event.target);
    console.log(event.type);

    alert("hello how are you");
  };
  const HandleWelcome =(user)=>{
    console.log(`hey ${user} How are you`)
  }


return(
 <>
 {/*function Components with named Function */}
 <p className="text-center mt-10 font-sans text-lg font-bold ...">
<button onClick={ClickHandle} className={styles.button}>Click Me</button>
</p>
<br />

{/* fat arrow function */}
 <p className="text-center mt-10 font-sans text-lg font-bold ...">
<button onClick={(event)=>ClickHandle(event)}>Click Me 2</button>
</p>
<br />


{/* Inline Event Handlers */}

 <p className="text-center mt-10 font-sans text-lg font-bold ...">
<button onClick={(event)=>console.log(event)}>Inline Function</button>

</p>


{/* function components with  Inline Arrow Function */}
<p className="text-center mt-10 font-sans text-lg font-bold ...">
<button onClick={()=>alert("hello how are you bro")}>Inline Arrow Function</button>

</p>
<br />
<p className="text-center mt-10 font-sans text-lg font-bold ...">
<button onClick={()=>HandleWelcome ("Shivam ")}>For Name</button>

</p>



</>
)
}

export default EventHandling;