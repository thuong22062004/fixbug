import{useState,createContext} from 'react';
export const ThemeChange = createContext()
console.log(ThemeChange)
function ThemeProvider({childern}){
   const[theme,setTheme] = useState('light')
   const handleTheme = ()=>{
       setTheme(theme === 'dark' ? 'light':'dark')
   }
   var value={
      theme,
      handleTheme
   }
   return <ThemeChange.Provider value ={value}>
        {childern}
   </ThemeChange.Provider>
}
export default ThemeProvider;