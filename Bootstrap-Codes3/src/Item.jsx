import styles from "./Item.module.css";
const Item = ({ foodItems, bought, handleBuyButton }) => {
  //let {foodItems }= props;
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItems} being bought`);
  // };

  return (
    <li
      className={`${styles["kg-Item"]} list-group-item ${bought && " active"}`}
    >
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.Button} btn btn-info`}
        // onClick= {(event)=>handleBuyButtonClicked(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
