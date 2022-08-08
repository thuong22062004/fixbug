import clsx from 'clsx'
import styles from './content.module.css'
function Content({primary}){
    const clases = clsx(styles.btn,{
        [styles.primary] : primary   
    })
    return <>
    <button className={clases}>Click</button>
    </>
}
export default Content ;