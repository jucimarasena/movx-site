import bannerImg from '../assets/imagem-banner.png'
import Benefits from './Benefits'

function Hero() {
    return (
        <section className="relative bg-dark-blue text-white overflow-hidden py-16 lg:py-24">
            {/* Imagem de fundo com overlay escuro usando sua cor personalizada */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={bannerImg} 
                    alt="Caminhão de transporte na estrada" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/95 via-dark-blue/80 to-navy-blue/40"></div>
            </div>

            {/* Conteúdo principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Texto e botões à esquerda */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Transporte que <span className="text-green">move</span> o seu negócio.
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-gray max-w-2xl leading-relaxed">
                            Soluções completas em transporte rodoviário de cargas com segurança, agilidade e compromisso em cada entrega.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <a 
                                href="http://" 
                                className="inline-flex items-center justify-center bg-green hover:bg-dark-green text-dark-blue font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-green/20 transition-all duration-200 gap-2 group"
                            >
                                Solicitar Orçamento
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            
                            <a 
                                href="" 
                                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-lg border border-gray/30 backdrop-blur-sm transition-all duration-200"
                            >
                                Nossos Serviços
                            </a>
                        </div>
                    </div>

                    {/* Espaço reservado para o caminhão da imagem de fundo */}
                    <div className="hidden lg:block lg:col-span-5"></div>
                </div>

                {/* Bloco de Benefícios na parte inferior */}
                <div className="mt-16 lg:mt-24">
                    <Benefits />
                </div>
            </div>
        </section>
    )
}

export default Hero;