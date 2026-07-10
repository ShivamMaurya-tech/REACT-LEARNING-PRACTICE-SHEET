import styles from "./SeriesCard.module.css";
// import "./SeriesCard.css";
import styled from "styled-components";
export const SeriesCard = ({ data }) => {
  // console.log(data);

  const { name, rating, description, cast, genre, watch_url, img_url } = data; //Destructuring method
  const ratingclass = rating > 8.4 ? styles.superhit : styles.average;

  // const btnstyle = {

  // With the help of styled components
  const Buttonmaurya = styled.button({
    border: "2px solid black",
    borderRadius: "40px",
    padding: "20px 20px",
    marginLeft: "10px",
    backgroundColor: `${rating > 8.4 ? "rgb(0, 119, 128)" : "yellowgreen"}`,
  });

  // with the help of template literals
  // const Buttonmaurya = styled.button`
  //   border: "2px solid black";
  //   border-radius: "40px";
  //   padding: "10px 20px";
  //   margin-left: "10px";
  //   background-color: ${(props) =>
  //     props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  // `;

  // // };

  // console.log(btnstyle);
  return (
    <div className={styles.card}>
      <li>
        <img src={img_url} alt={img_url} height="40%" width="40%" />
        <div className={styles["card-content"]}>
          {/* <div className=""></div> */}
          <h1>Name:{name}</h1>
          <h3>
            <span className={`${styles.rating}  ${ratingclass} `}>
              Rating:{rating}
            </span>
          </h3>
          <p>Description:{description}</p>
          <p> Cast:{cast}</p>
          <p>Genre:{genre}</p>
          <a href={watch_url} target="_blank">
            {/* <button style={btnstyle}>WatchNow</button> */}
            <Buttonmaurya>WatchNow</Buttonmaurya>
            {/* <Buttonmaurya rating={rating}>WatchNow</Buttonmaurya> */}
          </a>
        </div>
      </li>
    </div>
  );
};

// Using template literals [`${}`]we can pass multiple className together.

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
