import './Main.css';

export default function Main() {
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
          <input className='barrapesquisa' type="text" />
        <div>
          <p className='texto_digitado'></p>
      </div>
    </div>

</div>
    
  );
}
