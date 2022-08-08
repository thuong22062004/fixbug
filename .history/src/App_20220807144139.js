import React from 'react'
import Heading from "./contains/components/Heading";
import Content from './contains/paraphrap/content'
import GlobalStyles from './contains/Global/Global.js'
function App(){
   return <GlobalStyles>
      <div class='App'>
      <Heading />
      <Content />
      <Content primary/>
   </div>
   </GlobalStyles>
}
export default App;

