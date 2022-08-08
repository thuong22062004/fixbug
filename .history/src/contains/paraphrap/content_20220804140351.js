import styles from './content.module.css'
import Global from '../Global/Global';
function Content(){
    return <>
    <h1 className={styles.content}>Xin chào các bạn</h1>
         <h1 className={styles.heading}>Hello2</h1>
         <div className="d-flex">
         <div>item1</div>
         <div>item2</div>
         </div>
    </>
}
export default Content ;