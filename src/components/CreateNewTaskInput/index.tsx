import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './styles.module.css';

interface NewTaskProps {
  onCreateNewTask: (title: string) => void;
}

export function CreateNewTaskInput({ onCreateNewTask }: NewTaskProps) {
  const [title, setTitle] = useState('');

  function handleNewTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleCreateNewTask() {
    onCreateNewTask(title);
    setTitle('');
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Add one more task"
        onChange={handleNewTaskTitle}
        value={title}
      />
      <button type="submit" onClick={handleCreateNewTask}>
        <strong>Create</strong> <PlusCircle size={20} />
      </button>
    </div>
  );
}
