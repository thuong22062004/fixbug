import Heading from "./contains/components/Heading";
import Content from './contains/paraphrap/content'
import GlobalStyles from './contains/Global/Global.js'
function App(){
   return <GlobalStyles>
      <div class='App'>
      <Heading />
      <Content />
      <div className="d-flex">
         <div>item1</div>
         <div>item2</div>
      </div>
   </div>
   </GlobalStyles>
}
export default App;

