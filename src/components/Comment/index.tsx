import { useState } from 'react';

import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1 
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https:github.com/vinnycosta9898.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Costa</strong>
                            <time 
                                title="Publicado 12 de abril às 00:00"
                                dateTime="2023-04-01 00:00:00"
                            >
                                Cerca de há 1h
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment}
                            title="Deletar Comentário"
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}