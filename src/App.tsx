import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

import 'react-perfect-scrollbar/dist/css/styles.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <TasksList />
    </div>
  );
}
export default App;
