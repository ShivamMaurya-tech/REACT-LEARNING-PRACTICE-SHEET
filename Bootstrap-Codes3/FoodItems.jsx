import { useState } from "react";
import Item from "./src/Item";
const FoodItems = ({ sub }) => {
  //let foodItems = ['Daal', 'Chawal', 'Sabzi', 'Achhar', 'Water'];
  //let foodItems = [];
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
     setActiveItems (newItems);
  };
  return (
    <>
      <ul className="list-group">
        {sub.map((item) => (
          <Item
            key={item}
            foodItems={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
