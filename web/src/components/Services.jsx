import ServiceCard from "./ServiceCard";

function Services() {
    const infoService = [
        {
            title: "Transporte Rodoviário de Cargas",
            description: "Soluções eficientes para cargas tracionadas, completas e dedicadas."
        },
        {
            title: "Segurança e Confiabilidade",
            description: "Frota moderna, motoristas qualificados e seguro de cargas para sua tranquilidade."
        },
        {
            title: "Atendimento Nacional",
            description: "Atendemos diversas regiões do Brasil com agilidade e pontualidade."
        },
        {
            title: "Logística Personalizada",
            description: "Soluções sob medida para atender as necessidades do seu negócio."
        }
    ];
    return (
        <>
            <div>
                <h2>Nossos Serviços</h2>
                <h4>Soluções completas para o transporte da sua carga. </h4>
                <p>Atuamos com excelência no transporte rodoviário de cargas, garantindo que sua mercadoria chegue ao destino com segurança e eficiência.</p>

            </div>
            <div>
               {
                   infoService.map((service) => {
                       return (
                           <ServiceCard 
                           key={service.title} 
                           title={service.title} 
                           description={service.description} />
                        );
                    })
                } 
            </div>
        </>

    )
}

export default Services;