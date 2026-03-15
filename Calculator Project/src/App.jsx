import styles from "./App.module.css"
import Display from "./Display"
import ButtonContainer from "./ButtonContainer"
function App() {
 return(
<div className ={styles.calculator}>
  <Display></Display>
  <ButtonContainer></ButtonContainer>
  </div>

 )

 
  
}

export default App;
