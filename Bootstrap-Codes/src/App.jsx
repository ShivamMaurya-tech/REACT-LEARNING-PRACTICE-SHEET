import AppName from './Appname.jsx';
import AddTodo from './Addtodo.jsx'
import TodoItems from './TodoItems.jsx';
import './App.css'

function App() {
  const todoItems = [
    {


    name: 'Buy Milk',
    date :'04/10/2023',

  },
  {
    name :'Go to College',
    date :'04/10/2023',
  },
  {
    name :'Like  Me',
    date :'04/10/2023',
  },
{
    name :'Tution Fees',
    date :'04/12/2024',
  },


];
  return (
    <center className="todo-container">

      <AppName></AppName>
      < AddTodo></AddTodo>
      <TodoItems todoItems ={todoItems}></TodoItems>
     
    



    </center>

  );

}

export default App;
