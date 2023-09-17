import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
