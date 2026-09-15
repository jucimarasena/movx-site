import DifferentialCards from "./DifferentialCards";


function Differential() {

  const infoDif = [
    {
      title: "Segurança em primeiro lugar",
      description: "Processos rigorosos para garantir a integridade da sua carga."
    },
    {
      title: "Prazos que levamos a sério",
      description: "Planejamento eficiente para entregas no prazo combinado."
    },
    {
      title: "Atendimento personalizado",
      description: "Equipe preparada para entender e atender sua necessidade."

    },
    {
      title: "Ótimo custo benefício",
      description: "Soluções logísticas eficientes que cabem no seu orçamento."
    }

  ];

  return (

    <div>

      {

        infoDif.map((differential) => {
          return (

            <DifferentialCards
              key={differential.title}
              title={differential.title}
              description={differential.description} />
          );

        })

      }
    </div>

  );

}

export default Differential;