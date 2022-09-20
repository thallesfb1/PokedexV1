import React, { useEffect, useState } from "react";
import Pokedex from "../Pokedex";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button, Li, Header, ContainerPokemons } from "./styles";
import Pokemon from "../Pokemon";

const Geracoes = () => {
  const navigate = useNavigate();
  const todasGeracoes = [
    {
      index: 0,
      limite: 151,
      ofiset: 0,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      ],
    },
    {
      index: 1,
      limite: 100,
      ofiset: 151,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
      ],
    },
    {
      index: 2,
      limite: 135,
      ofiset: 251,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
      ],
    },
    {
      index: 3,
      limite: 107,
      ofiset: 386,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
      ],
    },
    {
      index: 4,
      limite: 156,
      ofiset: 493,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
      ],
    },
    {
      index: 5,
      limite: 71,
      ofiset: 649,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
      ],
    },
    {
      index: 6,
      limite: 88,
      ofiset: 721,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
      ],
    },
    {
      index: 7,
      limite: 92,
      ofiset: 809,
      thumb: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
      ],
    },
  ];
  const [listPokemon, setListPokemon] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(151);
  const [offset, setOffset] = useState<any>(0);

  const mudaGeracao = (limite: number, ofiset: number, route: string, geracao: number) => {
    if (ofiset === offset) {
      navigate(route, {
        state: geracao,
      });
      return;
    }
    setListPokemon([]);

    setLimit(limite);
    setOffset(ofiset);

    navigate(route, {
      state: geracao,
    });
  };

  const pokemons = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const getPokemon = async () => {
    const data = await fetch(pokemons)
      .then((res) => res.json())
      .then((res) => res.results);

    data.forEach(async (item: any) => {
      await fetch(item.url)
        .then((res) => res.json())
        .then((res) => setListPokemon((previous) => [...previous, res]));
    });
  };

  useEffect(() => {
    getPokemon();
  }, [limit, offset]);

  return (
    <>
      <Routes>
        <Route path="/geracoes/:geracao/" element={<Pokedex listPokemon={listPokemon} />} />
        <Route path="/geracoes/:geracao/:pokemon" element={<Pokemon />} />
        <Route
          path="/"
          element={
            <>
              <Header className="title">
                <h1>Escolha sua geração</h1>
              </Header>
              <ContainerPokemons className="app-container">
                {todasGeracoes.map((garaco: any, index) => (
                  <Li className="cardGeracao" key={index}>
                    <h1>{index + 1}°</h1>
                    <div className="imagem">
                      <Button
                        onClick={() => {
                          mudaGeracao(garaco.limite, garaco.ofiset, `/geracoes/:${index + 1}`, index + 1);
                        }}
                      >
                        {garaco.thumb?.map((url: string, index: any) => (
                          <img src={url} key={index} />
                        ))}
                      </Button>
                    </div>
                  </Li>
                ))}
              </ContainerPokemons>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Geracoes;
