import { PlusCircle } from '@phosphor-icons/react';
import styles from './TaskInput.module.css'

export function TaskInput () {
    return (
        <div className={styles.taskInput}>
            <input 
                className={styles.input} 
                placeholder='Adicione uma tarefa'
                type="text" 
            />
            <button 
                className={styles.btn} 
                type="submit">
                    Criar
                    <PlusCircle size={16} />
            </button>
        </div>
    );
}