import styles from './TodoItems.module.css'
import TodoItem from './TodoItem'
const TodoItems = ({todoItems}) =>{
  
    
    return (
         <div className = {styles.itemsContainer}>
          
           {todoItems.map((item)=> (


     
      <TodoItem tododate = {item.date}
      todoName ={item.name} key={item.name}>   </TodoItem>
    
           ))}
    </div>
    );
};
export default TodoItems;