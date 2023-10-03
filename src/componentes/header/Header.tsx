import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        
        <img src='logadas.png' alt="Logo" className='img1'></img>
        
        <nav className="navbar">
          <ul>
            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/serviços">Serviços</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    
    </div>
  );
}
