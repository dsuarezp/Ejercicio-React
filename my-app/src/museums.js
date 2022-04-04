import { useEffect, useState } from "react";

function Museums(){

    const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

    const[museums, setMuseums] = useState([]);
    useEffect(() =>{
        fetch(url).then(res=>res.json()).then(museums=>{
            setMuseums(museums);
        })
    })

    return(
        <div className="row">
            <div className="titulo col-12">
                <h1>MUSEOS</h1>
            </div>

            <div className="row mt-3 lineaBot"></div>

            <div className="row mx-3">
            {
                museums.map(museums =>
                    <div className="col-3 mt-4">
                        <div className="card" key={museums.id}>
                            <img className="card-imagen mt-4" src={museums.image} alt="Museum Imagen"></img>
                            <div className="card-body">
                                <h5 className="card-title">{museums.name}</h5>
                                <p className="card-text">{museums.city}</p>
                            </div>
                        </div> 
                    </div>
                    )
            }
            </div>

        </div>
    )
}

export default Museums;