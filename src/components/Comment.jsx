import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/CaioCesarPS.png" hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio César</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:02:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, Parabens Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati numquam eveniet neque at in assumenda cum unde! Ut, nobis quos. Ratione aspernatur quas doloribus ex earum fugiat! Ab, excepturi.</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
