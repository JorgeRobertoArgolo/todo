import styles from './NullList.module.css'
import clipIcon from '../assets/Clipboard.png'

export function NullList () {
    return (
        <div className={styles.tasks}>
            <div className={styles.taskIcon}>
                <img src={clipIcon} alt="Icon Clipboard" />
            </div>
            <div className={styles.taskText}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}