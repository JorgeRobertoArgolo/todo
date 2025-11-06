import { PlusCircleIcon } from '@phosphor-icons/react';
import styles from './TaskInput.module.css'
import { useState, type ChangeEvent, type FormEvent } from 'react';

interface TaskInputProps {
    onAddTask: (task: string) => void;
}

export function TaskInput ({
    onAddTask,
}: TaskInputProps) {

     const [task, setTask] = useState('');

     function handleAddTask (event: FormEvent) {
        event.preventDefault();
        onAddTask(task);
        setTask('');
     }

     function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value);
     }

    return (
        <form 
            onSubmit={handleAddTask} 
            className={styles.taskInput}
        >
            <input 
                className={styles.input} 
                placeholder='Adicione uma tarefa'
                type="text" 
                value={task}
                onChange={handleTaskChange}
            />
            <button 
                className={styles.btn} 
                type="submit"
                disabled={task.length === 0}
            >
                    Criar
                    <PlusCircleIcon size={16} />
            </button>
        </form>
    );
}