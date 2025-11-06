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
  }

  function toggleTaskStatus (updateTask: Task) {
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

  function deleteTask () {

  }

  return (
    <>
      <Header />
      <TaskInput 
        onAddTask={handleAddTask} 
      />
      <TaskList 
        list={taskList}  
        onToggleTaskStatus={toggleTaskStatus}
        onDeleteTask={deleteTask}
      />
    </>
  )
}

export default App
