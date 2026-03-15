import Movie from './MovieCompo.jsx';
// import { Index } from './assets/index.jsx';
import Name from './Name.jsx'
// import Profile from './ProfileCard.jsx';
import { NetflixSeries } from "./NetflixSeries.jsx";
import styles from"./App.module.css"
const App =()=> {
  


return (
    <>
      <section className={`${styles.card}`}>
        <NetflixSeries />
        </section>
        {/* <Profile /> */}
    

      
    </>
  );
};




      {/*
    <Name name="Shivam"></Name>
    <Movie></Movie>
    <hr />
    <Name name="Maurya"></Name>
    <Movie></Movie>
    <hr /> */}







  


{/* <Index></Index> */}






// fragments used here it reduces  extra div tag
  
  

export default App;