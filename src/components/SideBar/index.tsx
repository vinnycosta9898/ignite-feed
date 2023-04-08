import styles from './styles.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar'

export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1680352960642-d701eb58323d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <Avatar 
                    className={styles.avatar}
                    src="https://github.com/vinnycosta9898.png"
                />
                <strong>Vinicius Costa</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine
                        size={20}
                    />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}