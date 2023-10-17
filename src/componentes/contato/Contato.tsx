import './Contato.css'
import React, { useState } from "react";
export default function Contato() {
  const [texto, setTexto] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function change_txt(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);

  }
  function change_email(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

  }
  function change_assunto(e: React.ChangeEvent<HTMLInputElement>) {
    setAssunto(e.target.value);

  }
  function change_mensagem(e: React.ChangeEvent<HTMLInputElement>) {
    setMensagem(e.target.value);

  }


  return (
    <div className='container'>
      <h2 className='formulario-titulo'>Formulário para Contato</h2>
      <form>
        <div>
          <input type="text1" placeholder='Nome' onChange={change_txt} /><p>Nome: {texto}</p>
        </div>

        <div>
          <input type="email" placeholder='Email' onChange={change_email} /><p>Email: {email}</p>
        </div>

        <div>
          <input type="text1" placeholder='Assunto' onChange={change_assunto} /><p>Assunto: {assunto}</p>
        </div>

        <div>
        <input type="text1" placeholder='Mensagem' onChange={change_mensagem} /><p>Mensagem: {mensagem}</p>
        </div>


        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
