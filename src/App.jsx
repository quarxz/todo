import { useState } from "react";
import styles from "./App.module.css";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    // { id: uuidv4(), todo: "Oma erschrecken" },
    // { id: uuidv4(), todo: "Katze färben" },
    // { id: uuidv4(), todo: "Roman schreiben" },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleDeleteTask(task) {
    setTasks(
      tasks.filter((item) => {
        return item.todo !== task;
      })
    );
  }

  function handleAddTask(newTask) {
    setTasks([{ ...newTask, id: uuidv4() }, ...tasks]);
    setIsFormOpen(false);
  }

  return (
    <>
      <main>
        <section className={styles.card}>
          <h2>ToDo App</h2>
          <button
            onClick={() => {
              setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen);
            }}
          >
            Add ToDo
          </button>
          {isFormOpen ? <TaskForm onAddTask={handleAddTask} /> : <></>}
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                onDeleteTask={(task) => {
                  handleDeleteTask(task);
                }}
                todo={task.todo}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
