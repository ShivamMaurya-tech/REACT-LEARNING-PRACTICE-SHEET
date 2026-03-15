
// export const SeriesCard = ({curElement} ) => {
//   console.log(curElement);

//   return (

//       <li >
//         <div>
//           <img src={curElement.img_url} alt={curElement.name} width="50%" />
//         </div>
//         <h2>Name:{curElement.name}</h2>
//         <h2>Rating:{curElement.rating}</h2>
//         <h2>Description:{curElement.description}</h2>
//         <h2>Cast:{curElement.cast}</h2>
//         <h2>Genre:{curElement.genre}</h2>
//         <a href={curElement.watch_url} target="_blank">
//           <button>WatchNow</button>
//         </a>
//       </li>

//   );
// };

// import styles from "./SeriesCard.module.css";
// import styled from "styled-components";
// export const SeriesCard = ({ Data }) => {
//   //const {Data} =props;----.>     //instead of this we can write  export const SeriesCard = ({Data}) => { return
//   //console.log(props);------>

   
//   // eslint-disable-next-line no-unused-vars
//   const { id, name, description, img_url, watch_url, cast, genre, rating } =
//     Data; //props.Data;----> if we pass (props ) while defining
//   const ratingClass = rating >= 8.5 ? styles.superhit : styles.average;
 
 
 
// //  const Buttonmaurya =styled.button({
// //   border: "2px solid black",
// //     padding: "0.5rem",
// //     color: "var(--bg-color)",
// //     fontSize: "1.0rem",
// //     backgroundColor: `${styles.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
// //  fontWeight:"bold",
// //  cursor:"pointer",
// //  margin:"2px",


// //  });





// //  template literals
// //  passing props to solve literals problems

// const Buttonmaurya = styled.button`
//   border: 2px solid black;
//   padding: 0.5rem;
//   color: var(--bg-color);
//   font-size: 1rem;
//   background-color: ${props => props.rating >= 8.5 ? '#7dcea0' : '#f7dc6f'};
//   font-weight: bold;
//   cursor: pointer;
// `;





 
//   // const buttonClass = {
//   //   border: "2px solid black",
//   //   padding: "0.5rem",
//   //   color: "var(--bg-color)",
//   //   fontSize: "1.0rem",
//   //   backgroundColor: `${styles.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
//   // };








//   return (
//    // <li key={id} className={styles.card}>..------------------>

//     <li className="grid grid-cols-3 gap-4 border-2 border-black-600 ">
//       <div className={styles.imageWrapper}>
//         <img src={img_url} alt={name} width="100%" />
//       </div>


//       {/* // if space is coming inside your css then we write it like this */}
     
//       {/* <div className={styles["card-content"]}>    */}
//        <div className='flex flex-col gap-0 font-bold '>
//         <h1 style={{ margin: "0.4rem 0" }}>Name: {name}</h1>
//         <h2 style={{ margin: "0.4rem 0" }} className={ratingClass}>
//           Rating:{rating}
//         </h2>
//         <h2 style={{ margin: "0.2rem 0" }}  >Description: {description}</h2>
//         <h2 style={{ margin: "0.2rem 0" }}>Cast: {cast}</h2>
//         <h2 style={{ margin: "0.2rem 0" }}>Genre: {genre}</h2>
//         <a href={watch_url} target="_blank">
         
//          <Buttonmaurya>WatchNow</Buttonmaurya>
//          {/* <Buttonmaurya rating={rating}>WatchNow</Buttonmaurya> */}
//           {/* <button style={buttonClass}>Watch Now</button> */}
//         </a>
//       </div>
//     </li>
//   );
// };


import styles from "./SeriesCard.module.css";
import styled from "styled-components";

// ✅ Define styled component at top-level, outside SeriesCard
const Buttonmaurya = styled.button`
  border: 2px solid black;
  padding: 0.5rem;
  color: var(--bg-color);
  font-size: 1rem;
  background-color: ${(props) =>
    props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  font-weight: bold;
  cursor: pointer;
  margin: 2px;
`;

export const SeriesCard = ({ Data }) => {
  const { id, name, description, img_url, watch_url, cast, genre, rating } = Data;

  // CSS module class for rating text
  const ratingClass = rating >= 8.5 ? styles.superhit : styles.average;

  return (
    <li key={id} className="grid grid-cols-3 gap-4 border-2 border-black-600">
      <div className={styles.imageWrapper}>
        <img src={img_url} alt={name} width="100%" />
      </div>

      <div className="flex flex-col gap-0 font-bold">
        <h1 style={{ margin: "0.4rem 0" }}>Name: {name}</h1>
        <h2 style={{ margin: "0.4rem 0" }} className={ratingClass}>
          Rating: {rating}
        </h2>
        <h2 style={{ margin: "0.2rem 0" }}>Description: {description}</h2>
        <h2 style={{ margin: "0.2rem 0" }}>Cast: {cast}</h2>
        <h2 style={{ margin: "0.2rem 0" }}>Genre: {genre}</h2>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {/* ✅ Pass rating as a prop to styled button */}
          <Buttonmaurya rating={rating}>Watch Now</Buttonmaurya>
        </a>
      </div>
    </li>
  );
};



















// export const SeriesCard = ({curElement} ) => {
//   console.log(curElement);

//   return (

//       <li >
//         <div>
//           <img src={curElement.img_url} alt={curElement.name} width="50%" />
//         </div>
//         <h2>Name:{curElement.name}</h2>
//         <h2>Rating:{curElement.rating}</h2>
//         <h2>Description:{curElement.description}</h2>
//         <h2>Cast:{curElement.cast}</h2>
//         <h2>Genre:{curElement.genre}</h2>
//         <a href={curElement.watch_url} target="_blank">
//           <button>WatchNow</button>
//         </a>
//       </li>

//   );
// };

// import styles from "./SeriesCard.module.css";
// import styled from "styled-components";
// export const SeriesCard = ({ Data }) => {
//   //const {Data} =props;     //instead of this we can write  export const SeriesCard = ({Data}) => { return
//   //console.log(props);

   
//   const { id, name, description, img_url, watch_url, cast, genre, rating } =
//     Data; //props.Data; if we pass (props ) while defining
//   const ratingClass = rating >= 8.5 ? styles.superhit : styles.average;
 
 
 
//  const Buttonmaurya =styled.button({
//   border: "2px solid black",
//     padding: "0.5rem",
//     color: "var(--bg-color)",
//     fontSize: "1.0rem",
//     backgroundColor: `${styles.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
//  fontWeight:"bold",
//  cursor:"pointer",
//  margin:"2px",


//  });



//  //template literals
//  //passing props to solve literals problems

// // const Buttonmaurya = styled.button`
// //   border: 2px solid black;
// //   padding: 0.5rem;
// //   color: var(--bg-color);
// //   font-size: 1rem;
// //   background-color: ${props => props.rating >= 8.5 ? '#7dcea0' : '#f7dc6f'};
// //   font-weight: bold;
// //   cursor: pointer;
// // `;

 
//   // const buttonClass = {
//   //   border: "2px solid black",
//   //   padding: "0.5rem",
//   //   color: "var(--bg-color)",
//   //   fontSize: "1.0rem",
//   //   backgroundColor: `${styles.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
//   // };








//   return (
//     // <li key={id} className={styles.card}>

//     <li className="grid grid-cols-3 gap-4 border-2 border-black-600 ">
//       <div className={styles.imageWrapper}>
//         <img src={img_url} alt={name} width="100%" />
//       </div>


//       {/* // if space is coming inside your css then we write it like this */}
     
//       {/* <div className={styles["card-content"]}>    */}
//        <div className='flex flex-col gap-0 font-bold '>
//         <h1 style={{ margin: "0.4rem 0" }}>Name: {name}</h1>
//         <h2 style={{ margin: "0.4rem 0" }} className={ratingClass}>
//           Rating:{rating}
//         </h2>
//         <h2 style={{ margin: "0.2rem 0" }}  >Description: {description}</h2>
//         <h2 style={{ margin: "0.2rem 0" }}>Cast: {cast}</h2>
//         <h2 style={{ margin: "0.2rem 0" }}>Genre: {genre}</h2>
//         <a href={watch_url} target="_blank">
         
//          <Buttonmaurya>WatchNow</Buttonmaurya>
//          {/* <Buttonmaurya rating={rating}>WatchNow</Buttonmaurya> */}
//           {/* <button style={buttonClass}>Watch Now</button> */}
//         </a>
//       </div>
//     </li>
//   );
// };

