import {ThemeChange} from './themeChange.js'
import {useContext}from 'react'
function AppContext(){
    const theme = useContext(ThemeChange)
    return <div class={theme}>
       <p>Currently, Copilot Labs consists of a VS Code sidebar that houses distinct features. We’re launching with two: “explain this code” and “translate this code”. Once the Copilot Labs extension is installed, you'll see a Copilot icon Copilot icon in the sidebar. Clicking on that will reveal the sidebar, with each experiment in a separate panel.</p>
    </div>
}
export default AppContext;
