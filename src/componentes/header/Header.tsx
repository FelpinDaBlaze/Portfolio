import './Header.css';

export default function Header() {
  return (
    <div>
      <header>
        
        <img src='logoFelipe.png' alt="Logo"></img>
        <h2 className='nome1'>Felipe Sarro</h2>
        
        <nav className="navbar">
          <ul>
            
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
          </ul>
        </nav>
      </header>
      
    
    </div>
  );
}
