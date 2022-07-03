import styles from './styles.module.css';

interface InfoProps {
  totalCreatedTasks: number;
  totalDoneTasks: number;
}

export function Info({ totalCreatedTasks, totalDoneTasks }: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.created}>
        <span>Created Tasks</span>
        <div className={styles.counter}>{totalCreatedTasks}</div>
      </div>
      <div className={styles.done}>
        <span>Done</span>
        <div className={styles.counter}>
          {totalDoneTasks} of {totalCreatedTasks}
        </div>
      </div>
    </div>
  );
}
