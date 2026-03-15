import './App.css';
import { Addingtask } from './Addingtask';
import { Todo } from './Todo';
import { Itemset } from './ItemAdd';
function App() {
  return (
    <>
    <div className="container">
    <Todo />
    <Addingtask />
    <Itemset />
    
    </div>
  </>
  )
}
export default App;