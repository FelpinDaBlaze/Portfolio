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
                  <li><a href="#">Chat</a></li>
                </ul>
            </div>

            <div>
                <ul className='ul2'>
                  <li ><a href="#"><img src="zapzap.png" alt="WhatsApp" /></a></li>
                  <li><a href="#"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-lighting-and-furniture-design-studio-aqua-creations-32.png" alt="Instagram" /></a></li>
                  <li><a href="#"><img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-No-Background.png" alt="Facebook" /></a></li>
                </ul>
            </div>
          </div>
        </footer>
    </div>
  );
}
