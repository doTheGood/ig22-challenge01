import styles from './styles.module.css';
import igniteLogo from '../../assets/todo-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotype from ignite product todo list" />
    </header>
  );
}
