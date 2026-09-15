import Benefits from './Benefits'
function Hero() {
    return (

        <section className="hero">
            <div>

            <h2>Transporte que <span>move</span> o seu negócio.</h2>
            <p>Soluções completas em transporte rodoviário de cargas com segurança, agilidade e compromisso em cada entrega.</p>
            <div className="hero__wrapper-btns">
                <a href="http://">Solicitar Orçamento</a>  <a href="">Nossos Serviços</a>
            </div>
            </div>
            <Benefits />
        </section>
    )

}
export default Hero;