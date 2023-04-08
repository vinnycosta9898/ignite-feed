import { useState, ChangeEvent, InvalidEvent, FormEvent } from 'react';

import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: "paragraph" | "link"
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[]
}

export function Post({ author, publishedAt, content} : PostProps){

    const [comments, setComments] = useState([
        "Post muito bacana hein!"
    ])

    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const isNewCommentEmpyt = newCommentText.length === 0;


    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse Campo é obrigatório!")
    }

    function deleteComment(commentToDelete : string){
        const commentsWithoutDeletedOne =  comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        className={styles.avatar}
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == "paragraph"){
                        return(
                            <p key={line.content}>{line.content}</p>
                        )
                    }else if(line.type === "link"){
                        return(
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        )
                    }
                })

                }
            </div>

            <form 
                className={styles.commentForm}
                onSubmit={handleCreateNewComment}
            >
                <strong>Deixe o seu FeedBack</strong>
                <textarea
                    placeholder="Deixe o seu comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpyt}
                    >   
                    Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })
                }
            </div>
        </article>
    )
}