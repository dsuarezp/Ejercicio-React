import { useEffect, useState } from "react";

function Artworks(){

    const url = "https://back-museums-uniandes.herokuapp.com/api/museums";
    

    const[artworks, setArtworks] = useState([]);
    useEffect(() =>{
        fetch(url).then(res=>res.json()).then(artworks=>{
            setArtworks(artworks[0].artworks);
        })
    })


    return(
        <div className="row">
            <div className="titulo col-12">
                <h1>MUSEO XYZ: OBRAS PRINCIPALES</h1>
            </div>

            <div className="row mt-3 lineaBot"></div>

            <div className="row mx-3">
            {
                artworks.map(artworks =>
                    <div className="row">
                        <div className="col-3 mt-4">
                            <div className="card" key={artworks.id}>
                                <img className="card-imagen mt-4" src={artworks.image} alt="Imagen Obra"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{artworks.name}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 mt-4">
                            <div className="card" key={artworks.id}>
                                <div className="card-body">
                                    <p className="card-text">{artworks.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            }
            </div>

        </div>
    )
}

export default Artworks;