import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoMovx from '../assets/logo-movX.png';

const navLink = [
    { label: 'Sobre nós', to: '/sobre' },
    { label: 'Serviços', to: '/#servicos' },
    { label: 'Contato', to: '/contato' }
];

const linkClass = 'text-sm font-medium text-white transition hover:text-green';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        /* 1. Adicionado 'relative' aqui para o absolute se basear no header */
        <header className="bg-dark-blue px-5 py-4 md:px-8 md:py-5 relative">
            <div className="m-auto flex max-w-7xl items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <img
                        src={logoMovx}
                        alt="MOV-X"
                        className="w-28 md:w-32"
                    />
                </Link>

                {/* Navegação Desktop + CTA */}
                <div className="hidden md:flex items-center gap-10">
                    <nav className="flex items-center gap-10">
                        {navLink.map((link) => (
                            <Link key={link.to} to={link.to} className={linkClass}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <Link
                        to="/cotacao"
                        className="rounded-md bg-green px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-dark-green"
                    >
                        Solicitar Orçamento
                        <span className="ml-3">→</span>
                    </Link>
                </div>

                {/* Botão do Menu Mobile */}
                <button
                    type="button"
                    className="text-2xl text-white md:hidden"
                    aria-label="Abrir menu"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

            </div>

            {/* 2. Menu Dropdown - Mobile MOVIDO PARA FORA da div max-w-7xl */}
            {/* 3. Trocado 'top-16' por 'top-full' para colar perfeitamente embaixo */}
            <nav className={`
                absolute top-full left-0 w-full bg-white shadow-lg flex flex-col p-6 gap-4 z-50 md:hidden
                overflow-hidden transition-all duration-500 ease-in-out origin-top
                ${isOpen 
                    ? 'max-h-96 opacity-100 scale-y-100 pointer-events-auto' 
                    : 'max-h-0 opacity-0 scale-y-95 pointer-events-none p-0 invisible'
                }
            `}>
                {navLink.map((link) => (
                    <Link 
                        key={link.to} 
                        to={link.to} 
                        onClick={() => setIsOpen(false)}
                        className='text-gray-700 hover:text-green font-medium py-2 border-b border-gray-100 transition-colors'
                    >
                        {link.label}
                    </Link>
                ))}

                <Link
                    to="/cotacao"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 text-center rounded-md bg-green px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-dark-green"
                >
                    Solicitar Orçamento →
                </Link>
            </nav>
        </header>
    );
}

export default Header;