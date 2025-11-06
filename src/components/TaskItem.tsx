import styles from './TaskItem.module.css';
import checkFalseIcon from '../assets/checkFalseIcon.svg';
import checkTrueIcon from '../assets/checkTrueIcon.svg';
import { TrashIcon } from '@phosphor-icons/react';
import type { Task } from '../model/Task';
;

interface TaskItemProps {
    task: Task;
    onToggleTaskStatus: (task: Task) => void;
    onDeleteTask: () => void;
}

export function TaskItem ({
    task,
    onToggleTaskStatus,
    onDeleteTask
}: TaskItemProps) {

    const isCompleted: boolean = task.status === 'COMPLETED';

    function handleChangeStatus () {
        const newStatus: 'COMPLETED' | 'PENDING' = 
            isCompleted ? 'PENDING' : 'COMPLETED';
        const updatedTask: Task = { 
            ...task, 
            status: newStatus 
        };
        onToggleTaskStatus(updatedTask);
    }

    const paragraphClassName = isCompleted ? styles.completedText : '';

    return (
        <div className={styles.taskItem}>
            <button
                className={styles.checkButton}
                title={isCompleted ? 'Marcar como pendente': 'Marcar como concluída'}
                onClick={handleChangeStatus}
            >
                {
                    isCompleted ? (
                        <img 
                            src={checkTrueIcon} 
                            alt='Tarefa Concluída'
                            className={styles.checkIcon}
                        />
                    ) : (
                        <img 
                            src={checkFalseIcon} 
                            alt='Marcar Tarefa'
                            className={styles.checkIcon}
                        />
                    )
                }
            </button>

            <p className={paragraphClassName}>{task.item}</p>
            <button 
                className={styles.btnDelete}
                title='Deletar tarefa'
                onClick={onDeleteTask}
            >
                <TrashIcon size={20} className={styles.trashIcon} alt="Trash icon"/>
            </button>
        </div>
    );
}