import styles from "./EventPropagation.module.css";
export const EventPropagation = () => {
  const HandleGrandparentClick = (event) => {
    console.log(event);
    // event.stopPropagation();
    console.log("Grandparent Clicked");
  };
  const HandleParentClick = (event) => {
    console.log(event);
    // event.stopPropagation();
    console.log("Parent Clicked");
  };
  const HandleChildClick = (event) => {
    console.log(event);
    // event.stopPropagation();
    console.log("child Clicked");
  };
  return (
    <>
      <button
        onClick={HandleGrandparentClick}
        className="bg-cyan-500 p-7 m-7 shadow-lg shadow-cyan-500/50 ..."
      >
        Grandparent
      </button>
      <button
        onClick={HandleParentClick}
        className="bg-blue-500 shadow-lg p-7 m-7 shadow-blue-500/50 ..."
      >
        Parent
      </button>
      <button
        onClick={HandleChildClick}
        className="bg-indigo-500 shadow-lg p-7 m-7 shadow-indigo-500/50 ..."
      >
        Children
      </button>

      {/* Bubble/Bubbling  phase in Event Propagation or Bottom to up Approach or Upward*/} 

      <div className={styles.main}>
         <div onClick={HandleGrandparentClick}   className={styles.Grandparent}>Grandparent
    <div  onClick={HandleParentClick} className={styles.Parent}>Parent
        <div  onClick={HandleChildClick}  className={styles.Child}>Child


        </div>


    </div>
</div> 
{/* 

Capture/Capturing  Phase in Event Propagation  or top to down Approach or Downward */}
        {/* <div
          onClickCapture={HandleGrandparentClick}
          className={styles.Grandparent}
        >
          Grandparent
          <div onClickCapture={HandleParentClick} className={styles.Parent}>
            Parent
            <div onClickCapture={HandleChildClick} className={styles.Child}>
              Child
            </div>
          </div>
        </div> */}
      
      </div> 
   
    </>
  );
};
