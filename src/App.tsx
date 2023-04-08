import styles from './app.module.css';

import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

const posts = [
  {
    id: 1,
    
    author:{
      avatarUrl: "https://github.com/vinnycosta9898.png",
      name: "Vinicius Costa",
      role: "FullStack Developer"
    },
    
    content:[
            {type: "paragraph", content: "Fala galeraa 👋"},
            {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            {type: "link", content: "jane.design/doctorcare"}
    ],

    publishedAt: new Date("2023-04-02 18:00:50")
  },

  {
    id: 2,
    
    author:{
      avatarUrl: "https://github.com/vinnycosta9898.png",
      name: "Vinicius Costa",
      role: "FullStack Developer"
    },
    
    content:[
            {type: "paragraph", content: "Fala galeraa 👋"},
            {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            {type: "link", content: "jane.design/doctorcare"}
    ],

    publishedAt: new Date("2022-05-15 18:00:50")
}
]
  
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
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
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
