import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
    color: var(--primary);
`
const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`

const Description = styled.p`
    letter-spacing: 1.2px;
`

const ContainerListStudies = styled.ul`
    margin: 10px 0px 50px;
`

const ItemStudy = styled.li`
    padding: 10px 0px;
`


export default function Sobre(props) {
    return (
      <div>

        <header className="headerContainer">
            <img src={props.avatar_url}/>
            <Title>Sobre mim</Title>
        
        </header>

        <section className="postsContainer"> 

        <SubTitle>Apresentação</SubTitle>

        <article className="postsContainer__post">
          <Description>
              Oii, meu nome é Marcos Rodrigues, tenho atualmente 19 anos, gosto de jogar e assistir series, sou estudante de Gestão da Tecnologia da Informação na Fatec de Itaquaquecetuba com previsão de terminar no final do ano de 2021.         
          </Description>

          <Description>
              Apesar de minha grade curricular ser mais voltada para gestão tenho uma apreço muito grande na área de programação/desenvolvimento na qual estou me esforçando muito para adentrar na área aonde estudo tecnologias como:
          </Description>

          <ContainerListStudies>
                <ItemStudy>Java com spring boot, spring cloud, quarkus para criação de backends/api;</ItemStudy>
                <ItemStudy>Nodejs para criação de backends/apis em Javascript;</ItemStudy>
                <ItemStudy>ReactJs para construção de interfaces;</ItemStudy>
            </ContainerListStudies>
        </article>
      </section>

        <Link style={{ marginTop: "50px" }}  href="/">
            <a>
                Link para Home!
            </a>
        </Link>
      </div>
      
      )
  }

  export async function getStaticProps(){
    const githubResponse = await fetch('https://api.github.com/users/MarKus-del').then(data => data.json())
    return {
      props: {
        avatar_url: githubResponse.avatar_url,
      }
    }
  }
  