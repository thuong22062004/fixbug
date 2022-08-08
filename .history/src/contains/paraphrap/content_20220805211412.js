import clsx from 'clsx'
import styles from './content.module.css'
function Content(){
    return <>
    <button className={clsx(styles.btn,styles.active)}>Click</button>
    </>
}
export default Content ;