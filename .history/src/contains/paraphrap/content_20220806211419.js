import clsx from 'clsx'
import styles from './content.module.scss'
function Content({primary}){
    const clases = clsx(styles.btn,{
        [styles.primary] : primary ,  
        'd-flex' : false
    })
    return <>
    <button className={clases}>Click</button>
    </>
}
export default Content ;