//comp A -> Comp C
import AppContext from './context.js'
import{useState,createContext} from 'react';
import './App.css';
const ThemeChange = createContext()
console.log(ThemeChange)
function App(){
   const[theme,setTheme] = useState('dark')
   const handleTheme = ()=>{
       setTheme(theme === 'dark' ? 'light':'dark')
   }
   return <div class='App'>
      <ThemeChange.Provider value={theme}>
      <button onClick={handleTheme}>Toggle Theme</button>
      <AppContext />
      </ThemeChange.Provider>
   </div>
}
export default App;
