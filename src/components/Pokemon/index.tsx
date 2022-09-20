import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemonUnico, ImagemSection, InfoSection, GifPokemon, ImgPokemon, Status } from "./styles";

const Pokemon = (props: any) => {
  const { state }: any = useLocation();
  const [barColor, setBarColor] = useState<string>();

  const { poke } = props;

  return (
    <>
      <CardPokemonUnico>
        <ImagemSection className={state.types[0].type.name}>
          <ImgPokemon>
            <img src={state.sprites.front_default} alt="" />
          </ImgPokemon>
          <GifPokemon>
            <img src={`/ani-front/${state.name}.gif`} alt="" />
          </GifPokemon>
        </ImagemSection>
        <InfoSection className={state.types[0].type.name}>
          <h1>Habilities</h1>
          <hr />
          <Status>
            <h3>Hp</h3>
            <p>{state.stats[0].base_stat}</p>
            <div className="BarraCrescimento">
              <div className="cresce" style={{ width: `${state.stats[0].base_stat / 2}%` }}></div>
            </div>
          </Status>
          <hr />
          <Status>
            <h3>Attack</h3>
            <p>{state.stats[1].base_stat}</p>

            <div className="BarraCrescimento">
              <div className="cresce" style={{ width: `${state.stats[1].base_stat / 2}%`, backgroundColor: `` }}></div>
            </div>
          </Status>
          <hr />
          <Status>
            <h3>Defense</h3>
            <p>{state.stats[2].base_stat}</p>
            <div className="BarraCrescimento">
              <div className="cresce" style={{ width: `${state.stats[2].base_stat / 2}%` }}></div>
            </div>
          </Status>
          <hr />
          <Status>
            <h3>Special-Attack</h3>
            <p>{state.stats[3].base_stat}</p>
            <div className="BarraCrescimento">
              <div className="cresce" style={{ width: `${state.stats[3].base_stat / 2}%` }}></div>
            </div>
          </Status>
          <hr />
          <Status>
            <h3>Special-Defense</h3>
            <p>{state.stats[4].base_stat}</p>
            <div className="BarraCrescimento">
              <div className="cresce" style={{ width: `${state.stats[4].base_stat / 2}%` }}></div>
            </div>
          </Status>
          <hr />
          <Status>
            <h3>Speed</h3>
            <p>{state.stats[5].base_stat}</p>
            <div className="BarraCrescimento">
              <div className="cresce" style={{ width: `${state.stats[5].base_stat / 2}%` }}></div>
            </div>
          </Status>
        </InfoSection>
      </CardPokemonUnico>
    </>
  );
};

export default Pokemon;
