//comp A -> Comp C
// import './App.css';
// import {useContext}from 'react'
// import {ThemeChange} from './themeChange.js'
// import AppContext from './context.js'
function App(){
   const contextTheme = useContext(ThemeChange)
   return <div class='App'>
      <button >Toggle Theme</button>
      <AppContext />
   </div>
}
export default App;
