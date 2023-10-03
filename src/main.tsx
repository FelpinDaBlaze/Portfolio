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
            <h2 className='formulario-titulo'>Formulario para Contato</h2>
          <form action="/pagina-processa-dados-do-form" method="post">
            <div>
              <input type="text" placeholder='Nome' id="nome" />
            </div>
  
            <div>
              <input type="email" placeholder='Email' id="email" />
            </div>

            <div>
              <input type="assunto" placeholder='Assunto' id="assunto" />
            </div>
  
            <div>
              <textarea id="msg"></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>

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
