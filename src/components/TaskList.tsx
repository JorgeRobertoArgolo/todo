import type { Task } from '../model/Task';
import { NullList } from './NullList';
import styles from './TaskList.module.css'

import { TaskItem } from './TaskItem';

interface TaskListProps {
    list: Task[];
    onToggleTaskStatus: (task: Task) => void;
    onDeleteTask: (deletedTask: Task) => void;
}

export function TaskList ({
    list,
    onToggleTaskStatus,
    onDeleteTask
}: TaskListProps) {

    

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
            {list.length === 0 &&
                <NullList />
            }
            {list.length > 0 &&
                <div className={styles.listContainer}>
                    {list.map((task) => (
                        <TaskItem 
                            key={task.item}
                            task={task}
                            onToggleTaskStatus={onToggleTaskStatus}
                            onDeleteTask={onDeleteTask}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

