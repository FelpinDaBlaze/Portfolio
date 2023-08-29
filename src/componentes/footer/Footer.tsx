import './Footer.css';

export default function Footer() {
  return (
    <div>
      
        <footer className='footer'>
          <div className='DivPrinc'>
            <div className="div1">
              <p><strong>INÍCIO</strong></p>
                <ul className='ul1'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Informações</a></li>
                </ul>
            </div>

            <div className="div1">
              <p><strong>SOBRE</strong></p>
                <ul className='ul1'>
                  <li><a href="#">História</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
            </div>

            <div className="div1">
              <p><strong>Contatos</strong></p>
                <ul className='ul1'>
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Telefone</a></li>
                </ul>
            </div>

            <div>
                <ul className='ul2'>
                  <li><a href="https://www.instagram.com/httpx.flp"><img src="Instagram.png"/></a></li>
                  <li><a href="https://www.linkedin.com/in/felpindablaze"><img src="Linkedin.png"/></a></li>
                  <li><a href="#"><img src="Git.png"/></a></li>
                </ul>
            </div>
          </div>
        </footer>
    </div>
  );
}
