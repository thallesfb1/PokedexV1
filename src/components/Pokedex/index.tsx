import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Pokemon from "../Pokemon";
import { Container, Card, AppContainer } from "./styles";

const Pokedex = (props: any) => {
  const [pesquisaPoke, setPesquisaPoke] = useState("");
  const { state } = useLocation();

  const navigate = useNavigate();

  const { listPokemon } = props;

  const filteredListPokemon = listPokemon.filter((pokemon: any) => {
    if (pokemon.name.includes(pesquisaPoke.toLocaleLowerCase())) {
      return pokemon;
    } else {
      return;
    }
  });

  return (
    <>
      <AppContainer className="app-container">
        <header>
          <h1>Pokemons</h1>

          <input
            type="text"
            placeholder="Pesquisa o pokemon ai mano"
            value={pesquisaPoke}
            onChange={(e) => setPesquisaPoke(e.target.value)}
          />
        </header>

        <div className="pokemonContainer">
          <Container className="allContainer">
            {filteredListPokemon
              .sort((a: any, b: any) => a.id - b.id)
              .map((pokemon: any, index: any) => (
                <Card
                  type={pokemon.type}
                  key={index}
                  onClick={() => {
                    navigate(`/geracoes/${state}/${pokemon.name}`, {
                      state: pokemon,
                    });
                  }}
                >
                  <div className={`thumb-container ${pokemon.types[0].type.name}`}>
                    <div className="number">
                      <small>#0{pokemon.id}</small>
                    </div>
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />

                    {/* <img src={`/ani-front/${pokemon.name}.gif`} alt="" /> */}
                    <div className="detail-wrapper">
                      <h3>{pokemon.name}</h3>
                      <small>Type: {pokemon.types[0].type.name}</small>
                    </div>
                  </div>
                </Card>
              ))}
          </Container>
        </div>
      </AppContainer>
    </>
  );
};

export default Pokedex;
