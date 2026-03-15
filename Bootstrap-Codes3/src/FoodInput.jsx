import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
//   const HandleonChange = (event) => {
//     console.log(event.target.value);
//   };
  return (
    <input
      type="text"
      placeholder="enter food Item here"
      className={styles.FoodInput}
      //onChange={handleonChange}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
