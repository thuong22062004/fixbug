import{useState,createContext} from 'react';
export const ThemeChange = createContext()
console.log(ThemeChange)
function ThemeProvider({children}){
   const[theme,setTheme] = useState('dark')
   const handleTheme = ()=>{
       setTheme(theme === 'dark' ? 'light':'dark')
   }
   var value={
        theme,
      handleTheme
   }
   return (
    <ThemeChange.Provider value ={value}>
        {children}
   </ThemeChange.Provider>
   )
}
export default ThemeProvider;