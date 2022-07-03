import styles from './styles.module.css';
import clipboard from '../../assets/clipboard.svg';

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="clipboard icon" />
      <strong>You don't have any tasks</strong>
      <span>Start creating and organizing your todos</span>
    </div>
  );
}
