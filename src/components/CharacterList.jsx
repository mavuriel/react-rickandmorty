import React, { useState, useEffect } from "react";
import Character from "./Character";

function NavPage({page, setPage}) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <p>Page: {`${page}`}</p>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => setPage(page + 1)}
            >
                Page {`${page + 1}`} 
            </button>
        </div>
    )
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: creo que esta mal o podria usar referencias
  const [page, setPage] = useState(1)

  useEffect(() => {
    // TODO: esto creo que esta mal hacer uso de funciones asincronas
    (async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setIsLoading(false);
      setCharacters(data?.results);
    })();
  }, [page]);

  return (
    // TODO: creo que esto esta mal usar operadores ternarios en el retorno del componente
    <div className="container">
    
      <NavPage page={page} setPage={setPage}/>

      {isLoading ? (
        <h1>loading ...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            const { name, id } = character;
            return (
              <div className="col-md-4" key={`${name}-${id}`}>
                <Character {...character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;
