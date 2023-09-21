import React, { useState } from 'react';
import Projeto from "../projeto/Projeto";
import './Main.css';

type ProjetosType = {
  id: number,
  titulo:string,
  descricao:string,
  imagem:string
}

export default function Main() {

const [texto,setTexto] = useState("")
const projetos:ProjetosType[] = [
  {
    id:1,
    titulo:"FelpizNET Plus",
    descricao:"Este projeto foi realizado como uma atividade com o objetivo de criar uma tela de um site de filmes. Foi desenvolvido em colaboração com a professora Tabata, na disciplina de Layout Aplicação Web.",
    imagem:"/figma1.png"
  },
  {
    id:2,
    titulo:"Tela de Cadastro",
    descricao:"Neste projeto, foi desenvolvida uma tela de cadastro simples utilizando a plataforma Figma.",
    imagem:"/figma2.png"
  },
  {
    id:3,
    titulo:"Anpede",
    descricao:"Essa tela foi desenvolvida para ser parte de uma aplicação em um site que oferece empréstimos de materiais para pessoas com deficiência física. O site desenvolvido desempenha um papel fundamental no monitoramento desses produtos e facilita o processo de empréstimo para a comunidade de pessoas com deficiência física.",
    imagem:"/figma3.png"
  },
  {
    id:4,
    titulo:"Estagio",
    descricao:"O estágio tinha como objetivo auxiliar os idosos na realização de tarefas simples em dispositivos móveis, a fim de facilitar suas vidas neste mundo tecnológico em constante evolução.",
    imagem:"/img4.jpeg"
  }

  ]

  function mudaTexto (e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setTexto(e.target.value)
  }

  return (
<div>
    <div>
            <div className='divp'>
              <h1 className='h1-1'>Felipe Sarro,</h1>
              <h2 className='h2-1'>Eu sou estudante do</h2>
              <h2 className='h2-2'>IFMS Campus de</h2>
              <h2 className='h2-3'>Navirai</h2>
              <h1 className='h1-2'>Seja bem-vindo ao meu portifólio website</h1>
              <h1 className='h1-3'>Saiba mais sobre mim</h1>
            </div>
            
            <div>
              <img src='homem.png' alt="pessoa"  className='img2'></img>
            </div>
    </div>

    <p className="linha-fina"></p>







    <div className="pesquisa">
          <p>Buscar Projeto</p>
          <input className='barrapesquisa' type="text" onChange={mudaTexto}/>
        <div>
          <p className='texto_digitado'></p>
      </div>
    </div>
    <main className="content-main">
                {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetosType)=>
                    <Projeto key={projeto.id} 
                           titulo={projeto.titulo} 
                           descricao={projeto.descricao} 
                           imagem={projeto.imagem}
                    />
                    )
                }
    </main>

</div>
    
  );
}
