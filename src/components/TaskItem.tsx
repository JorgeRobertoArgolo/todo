import styles from './TaskItem.module.css';
import checkFalseIcon from '../assets/checkFalseIcon.svg';import { TrashIcon } from '@phosphor-icons/react';
;


export function TaskItem () {
    return (
        <div className={styles.taskItem}>
            <img src={checkFalseIcon} alt="" className={styles.checkIcon}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem!</p>
            <button className={styles.btnDelete}>
                <TrashIcon size={20} className={styles.trashIcon} alt="Trash icon"/>
            </button>
        </div>
    );
}