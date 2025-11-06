import { useState } from "react";
import { Header } from "./components/Header"
import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"
import type { Task } from "./model/Task";

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  function handleAddTask (_task: string) {

    if (_task.trim() === '') return;

    const objectTask: Task = {
      item: _task,
      status: 'PENDING',
    };

    setTaskList([...taskList, objectTask]);
    setCountTasks(taskList.length + 1);
  }

  const [countTasks, setCountTasks] = useState(0);
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function toggleTaskStatus (updateTask: Task) {
      if (updateTask.status === 'COMPLETED') {
          setCountCompletedTasks(countCompletedTasks + 1);
      } else {
          setCountCompletedTasks(countCompletedTasks - 1);
      }

      setTaskList(
          (prevList) => {
              return prevList.map(t => {
                  if (t.item === updateTask.item) {
                      return updateTask;
                  }
                  return t;
              });
          }
      )
  }

  function deleteTask (deletedTask: Task) {
    if (deletedTask.status === 'COMPLETED') {
      setCountCompletedTasks(countCompletedTasks - 1);
    }

    setTaskList(
      (prevList) => {
        return prevList.filter(t => t !== deletedTask);
      }
    )
    setCountTasks(taskList.length - 1);
  }

  return (
    <>
      <Header />
      <TaskInput 
        onAddTask={handleAddTask} 
      />
      <TaskList 
        list={taskList}
        countTasks={countTasks}
        countCompletedTasks={countCompletedTasks}    
        onToggleTaskStatus={toggleTaskStatus}
        onDeleteTask={deleteTask}
      />
    </>
  )
}

export default App
