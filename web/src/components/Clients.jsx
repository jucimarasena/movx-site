function Clients() {

    const clientBrand = [
        {
            name: "lorem",
            brand: "img"
        },
        {
            name: "lorem",
            brand: "img"
        },
        {
            name: "lorem",
            brand: "img"
        }
    ];



    return(
       
        
        <ul>
           {
            [...clientBrand, ...clientBrand, ...clientBrand].map((e, index) => {
                return (
                    <li key={`${e.name}-${index}`}>
                        {e.brand}
                    </li>
                );
            })
           }
        </ul>
     
    )
}


export default Clients;