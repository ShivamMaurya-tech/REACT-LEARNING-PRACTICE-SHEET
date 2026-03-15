import SeriesData from "./API/SeriesData.json"
import { SeriesCard } from "./SeriesCard"
import styles from './Netflix.module.css'
export const NetflixSeries =()=>{
    return(
     
    <ul className="overlay ">
      <div className={styles.seriesGrid}>
         {SeriesData.map((curElement)=>(
            

<SeriesCard key={curElement.id} Data={curElement}></SeriesCard>
        ))}
</div>
        </ul>
      
    )
} 


 












/* 

    <div>
        <img src={SeriesData[4].img_url} alt="can't visible" width="50%" />
    </div>
    <h2>Name:{SeriesData[4].name}</h2>
    <h2>Rating:{SeriesData[4].rating}</h2>
    <h2>Description:{SeriesData[4].description}</h2>
    <h2>Cast:{SeriesData[4].cast}</h2>
    <h2>Genre:{SeriesData[4].genre}</h2>
    <a href={SeriesData[4].watch_url} target="_blank">
  

    <button>WatchNow</button>
</a> */
    










//  <div>
       
//         <img src="KorianDrama.png" alt="" width="50%" />
//  <h2>Name:{"Lovely Runner"}</h2>
//  <h3> Rating:{ "9.8"}</h3>
//  <h3> Description: {"Im Sol travels back in time to prevent the tragic fate of her favorite star, Ryu Sun Jae."}</h3>
//    <h3>  Cast: {["Kim Hye Yoon", "Byeon Woo Seok", "Song Geon Hee"]}</h3>
//    <h3>  Genre:{ ["Romantic Comedy", "Fantasy"]}</h3>
//    <button> watch Now </button>
  
//     </div>