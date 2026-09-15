import logoMovx from '../assets/logo-movX.png';


function Header() {
    return (
        <header>
            <h1><img src={logoMovx} alt="MOV-x" /></h1>
            <nav>
                <ul><li><a href=''>Sobre nós</a></li>
                    <li><a href='#servicos'>Serviços</a></li>
                    <li><a href='#contato'>Contato</a></li>
                    <li><a href='#cotacao'>Cotação</a></li>
                </ul>
            </nav>

            <button>Solicitar orçamento</button>
        </header>
    );
}

export default Header;