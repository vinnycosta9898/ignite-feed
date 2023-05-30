import styles from './app.module.css';

import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";
import { posts } from './repositories/posts'

function App() {
  return (
     <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {
            posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                  />
                )
            })
          }
        </main>
      </div>
     </div>
  )
}

export default App
