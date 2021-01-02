import Link from 'next/link'
import styled from 'styled-components'
import Footer from '../components/Footer'


const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`

export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url}/>

        <Link href="/sobre">
          <a>
            Marcos-blog
          </a>
        </Link>
      </header>

      <section className="postsContainer"> 
        <SubTitle>Posts</SubTitle>

        <article className="postsContainer__post">
          <a href="https://www.youtube.com/playlist?list=PLVc5bWuiFQ8HA-_-_wjRSSrR27IqfbtPc">
            AluraJs show!!!
          </a>

          <p>
            Uma serie de videos fenomenal para aprender JS !
          </p>
        </article>
      </section>

      <section className="postsContainer"> 
        <SubTitle>Repositorios favoritos</SubTitle>

        {props.repos.map(project => (
          <article 
            key={project.repo}
            className="postsContainer__post">
            <a href="">
              {project.repo}
            </a>

            <p>
              {project.description || "Sem dados Sorry :("}
            </p>
        </article>
        )
          
        )}
        
      </section>

      <Footer/>
    </div>
    
    )
}

export async function getStaticProps(){
  const githubResponse = await fetch('https://api.github.com/users/MarKus-del').then(data => data.json())
  const repos = await fetch('https://gh-pinned-repos.now.sh/?username=MarKus-del').then(data => data.json())
  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos,
    }
  }
}
