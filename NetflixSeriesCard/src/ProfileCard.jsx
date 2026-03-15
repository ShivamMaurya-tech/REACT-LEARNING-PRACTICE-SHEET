import "./Profilecard.css"

function Profile(){
    return(<>
    <div className="m-8 ">
    <ProfileCard
    name="Shivam Maurya"
  Age={18}
  Greetings={
    <div>
        <h2>Hi! Shivam Maurya How Are you</h2>
        </div>
  } >
<p>Hobbies: Reading ,Filming</p>
<button>Contact</button>
    </ProfileCard>
    </div>
    <div  className=" m-8  ">
    <ProfileCard
    name="John"
  Age={20}
  Greetings={
    <div>
        <h2>Hi! John How Are you</h2>

        <h1 className="List">List of play Button</h1>
      
        </div>
  } >
<p>Hobbies: Reading ,Editing</p>
<button>Send Me</button>
    </ProfileCard></div>
     </>

    )
}
export default Profile;
function ProfileCard ({name,Age,Greetings,children} ){
  
  
    // const {name,Age,Greetings,children} =props;
    return(
     
    // Name:{props.name};<br />
    // Age:{props.Age};<br />
    // Greetings:{props.Greetings}
    // <div>{props.children}</div>

<div className="border-2 border-indigo-600">

    Name:{name};<br />
    Age:{Age};<br />
    Greetings:{Greetings}
    <div>{children}</div>
    
    
    
    
    </div>
    )
}