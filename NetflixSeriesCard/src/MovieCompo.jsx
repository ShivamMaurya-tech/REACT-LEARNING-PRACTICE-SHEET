
const Movie = () => {
  const guys = "hello";
  const Expression = 1 + 2 + 3;
  const functionCall = () => {
    const Bio = "Introduction: This is Shivam Maurya";
    return Bio;
  };
  let age = 12;

  return ( 
 
    <>
      <div>
        <img src="College.jpg" alt="not Visible" height="20%" width="30%" />
      </div>
      <div>
        <h1>
          This image is classic so adorable may this one of the favourite pic
        </h1>
        <h2> rating:9.0</h2>
        <h3>{guys}</h3>
        <h3>{Expression}</h3>
        <h1>{functionCall()}</h1>
      </div>

      <button>{age >= 18 ? "see now" : "cant see"}</button>
 
    
    
    </>
  
      
      )  
};
export default Movie;

// react Accepts : Dynamically variables ,expression and function call
//Dom States that: whatevver user create using parameter(className ,Id_name) that it would called as Dom Which Means that Document Object Model
