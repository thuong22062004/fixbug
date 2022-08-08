//comp A -> Comp C
import './App.css';
import AppContext from './context.js'
function App(){
   return <div class='App'>
      <button onClick={handleTheme}>Toggle Theme</button>
      <AppContext />
   </div>
}
export default App;
