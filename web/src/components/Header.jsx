import { Link } from 'react-router-dom';
import logoMovx from '../assets/logo-movX.png';


function Header() {
    return (
        <header>
            <h1><img src={logoMovx} alt="MOV-x" /></h1>
               {/* Navegation*/}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Contato">Contato</Link>
            </nav>

            <button>Solicitar orçamento</button>
        </header>
    );
}

export default Header;