import styles from './EventProps.module.css'
export const EventProps =()=>{
    const HandleWelcomeuser =(user)=>{
        alert(`hey ${user}`) };


    const HandleHover=()=>{
        alert("hey ,Thanks For Hovering Me");
    };
    return(
    <>
    <Welcomeuser onClick={()=>HandleWelcomeuser("Shivam Maurya")}
        onMouseEnter={HandleHover}
        />
   
    
    
    
    </>
    );
};

const Welcomeuser=(props)=>{
    const {onClick,onMouseEnter}=props;
    const HandleGreeting =()=>{
        console.log("hey User,Welcome");
        props.onClick();
    }

    return(
        <div className={styles.button}>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover Me</button>
        <button onClick={HandleGreeting}>Greeting</button>
        </div>
    )
}