import React, { useState } from "react";
import api from "./services/api";

export default function App() {

  const [personagem, setPersonagem] = useState("");

  const procurarPersonagem = ()=>{
    let idPersonagem = document.getElementById("idPersonagem").value;

    if (idPersonagem < 1 || idPersonagem > 826) {
        setPersonagem("");
    } else {

        api.get(`/character/${idPersonagem}`)
        .then((res)=>{
          setPersonagem(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  }

  return (
    <div>
      <div className="principal">
          <div>
            <label className="form-label">Escolha um personagem entre 1 e 826: </label>
            <input type="number" id="idPersonagem" className="form-control inputEscolha" onChange={procurarPersonagem}></input>
          </div>
      </div>

      {personagem ? (
          <div className="blocoPersonagem">
            <img src={personagem.image} alt={`Imagem do ${personagem.name}`}></img>
            <div className="personagemInfo">
              
              <h2 className="titulo">Name: <span className="valor">{personagem.name}</span></h2>

              <h2 className="titulo">Status: <span className="valor">{personagem.status}</span></h2>

              <h2 className="titulo">Species: <span className="valor">{personagem.species}</span></h2>

              <h2 className="titulo">Gender: <span className="valor">{personagem.gender}</span></h2>

              <h2 className="titulo">Location: <span className="valor">{personagem.location.name}</span></h2>
            </div>
          </div>
      ) : (
        <div class="alert alert-danger erroPersonagem" role="alert">
          Personagem inválido!
        </div>
      )}
    </div>
  );
}