import styles from './content.module.css'
import GlobalStyles from '../Global/Global.js';
function Content(){
    return <>
    <GlobalStyles>
    <h1 className={styles.content}>Xin chào các bạn</h1>
         <h1 className={styles.heading}>Hello2</h1>
         <div className="d-flex">
         <div>item1</div>
         <div>item2</div>
         </div>
    </GlobalStyles>
    </>
}
export default Content ;