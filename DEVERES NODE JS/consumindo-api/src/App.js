import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {

  const [personagem, setPersonagem] = useState("");

  const procurarPersonagem = ()=>{
    let idPersonagem = document.getElementById("idPersonagem").value;

    if (idPersonagem < 1 || idPersonagem > 826) {
        alert("Personagem inválido!");
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
      <div className="w-full p-20 text-center">
          <div>
            <label className="text-xl">Escolha um personagem entre 1 e 826: </label>
            <input type="number" id="idPersonagem" className="border-solid border-2 border-black p-1"></input>
          </div>

          <div className="mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={procurarPersonagem}>Procurar</button>
          </div>
      </div>

      {personagem != "" && (
          <div className="flex justify-center mt-10">
            <img src={personagem.image}></img>
            <div>
              <h2>Name: {personagem.name}</h2>
              <h2>Status: {personagem.status}</h2>
              <h2>Species: {personagem.species}</h2>
              <h2>Gender: {personagem.gender}</h2>
            </div>
          </div>
      )}
    </div>
  );
}