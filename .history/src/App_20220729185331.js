//comp A -> Comp C
import AppContext from './context.js'
import{useState,createContext} from 'react';
import './App.css'
function App(){
   const[theme,setTheme] = useState('dark')
   const handleTheme = ()=>{
       setTheme(theme === 'dark' ? 'light':'dark')
   }
   return <div class='App'>
      <button onClick={handleTheme}>Toggle Theme</button>
      <AppContext />
   </div>
}
export default App;
