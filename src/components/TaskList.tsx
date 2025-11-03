import { NullList } from './NullList';
import styles from './TaskList.module.css'

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
            <NullList />
        </div>
    );
}

