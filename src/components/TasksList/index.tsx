import { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ITask } from '../../types';
import { CreateNewTaskInput } from '../CreateNewTaskInput';
import { Empty } from '../Empty';
import { Info } from '../Info';
import { Task } from '../Task';

import ScrollBar from 'react-perfect-scrollbar';

import styles from './styles.module.css';

export function TasksList() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const storageTasks = JSON.parse(
      localStorage.getItem('@todo:tasks') || '[]'
    );

    setTasks(storageTasks);
  }, []);

  function handleCreateNewTask(title: string) {
    const newTask = {
      id: uuidV4(),
      title,
      isDone: false
    };

    setTasks((oldState) => [...oldState, newTask]);
    localStorage.setItem('@todo:tasks', JSON.stringify([...tasks, newTask]));
  }

  function handleCheckTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isDone: !task.isDone
          }
        : task
    );

    setTasks(newTasks);
    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks));
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks));
  }

  const totalCreatedTasks = tasks.length;
  const totalDoneTasks = tasks.reduce(
    (total, task) => (total += task.isDone ? 1 : 0),
    0
  );

  return (
    <main className={styles.container}>
      <CreateNewTaskInput onCreateNewTask={handleCreateNewTask} />
      <Info
        totalCreatedTasks={totalCreatedTasks}
        totalDoneTasks={totalDoneTasks}
      />
      {tasks.length > 0 ? (
        <ScrollBar options={{ suppressScrollX: true }}>
          <div className={styles.taskList}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onCheckTask={handleCheckTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        </ScrollBar>
      ) : (
        <Empty />
      )}
    </main>
  );
}
