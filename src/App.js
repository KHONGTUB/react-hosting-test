import {Button} from "./components/Button"
import { ButtonClass } from "./components/ButtonClass";
import './App.css';

function App() {
  function handleSubmit () {
    console.log("I am submitted")
  }

  function handleClear () {
    console.log("I am cleared")
  }
  

  return (
    <div className="App">
      <Button label = 'submit' handleClick={handleSubmit}/>
      <Button label = 'clear' handleClick={handleClear}/>
      <Button />
      <ButtonClass label = 'submit class' handleClick={handleSubmit}/>
      <ButtonClass label = 'clear class' handleClick={handleClear}/>
      <ButtonClass />
    </div>
  );
}

export default App;
