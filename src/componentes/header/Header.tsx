import './Header.css';

export default function Header() {
  return (
    <div>
      <header>
        
        <img src='barbiezinha.webp' alt="Logo"></img>
        
        <nav className="navbar">
          <ul>
            
            <li>
              <a href="#">Notícia</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      
    
    </div>
  );
}
