import styles from './TaskList.module.css'
import clipIcon from '../assets/Clipboard.png'

export function TaskList () {
    return (
        <div className={styles.taskList}>
            <div className={styles.resume}>
                <div className={styles.createdTasks}>
                    Tarefas criadas 
                    <span className={styles.value}>0</span>
                </div>
                
                <div className={styles.completedTasks}>
                    Concluídas
                    <span className={styles.value}>0</span>
                </div>
            </div>
            <div className={styles.tasks}>
                <div className={styles.taskIcon}>
                    <img src={clipIcon} alt="Icon Clipboard" />
                </div>
                <div className={styles.taskText}>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    );
}