import{useState,createContext} from 'react';
export const ThemeChange = createContext()
console.log(ThemeChange)
function ThemeProvider(){
   const[theme,setTheme] = useState('light')
   const handleTheme = ()=>{
       setTheme(theme === 'dark' ? 'light':'dark')
   }
   return <ThemeChange.Provider value ={theme}>

   </ThemeChange.Provider>
}
export default ThemeProvider