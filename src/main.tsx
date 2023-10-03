import React from 'react';
import './main.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Main from './componentes/main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { render } from 'react-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: '/sobre',
    element: (
      <>
        <Header />
        <div className='content-main'>Sobre</div>
        <Footer />
      </>
    ),
  },
  {
    path: '/serviços',
    element: (
      <>
        <Header />
        <div className='content-main'>Página de Serviços</div>
        <Footer />
      </>
    ),
  },
  {
    path: '/contato',
    element: (
      <>
     <Header />  
          <div className='container'>
          <h2 className='formulario-titulo'>Formulário para Contato</h2>
          <form>
            <div>
              <input type="text" placeholder='Nome'/>
            </div>
  
            <div>
              <input type="email" placeholder='Email'/>
            </div>

            <div>
              <input type="assunto" placeholder='Assunto'/>
            </div>
  
            <div>
              <textarea className='msg' placeholder='Mensagem'></textarea>
            </div>

            <button type="submit" >Enviar</button>
          </form>
          </div>
     <Footer />
      </>
    ),
  },
]);

render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
