import React from 'react';
import './main.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Main from './componentes/main/Main';
import Contato from './componentes/contato/Contato';
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
     <Contato/>
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
