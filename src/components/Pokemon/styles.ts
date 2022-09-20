import styled from "styled-components"



const CardPokemonUnico = styled.div`
    background-color:#c9c9c9 ;
    justify-content: center;
    border-radius: 1em;
    display:flex;
    margin: 4em;
    padding: 2em;
    .rock {
    background-color: rgb(148, 81, 81);
    border-radius: .5em;
    }
    .ghost {
      background-color: rgb(247, 247, 247);
      border-radius: .5em;
    }
    .electric {
      background-color: rgb(255, 255, 161);
      border-radius: .5em;
    }
    .bug {
      background-color: #F6D6A7;
      border-radius: .5em;
    }
    .poison {
      background-color: #e0a7f6;
      border-radius: .5em;
    }
    .normal {
      background-color: #F4F4F4;
      border-radius: .5em;
    }
    .fairy {
      background-color: rgba(255, 192, 203, 0.863);
      border-radius: .5em;
    }
    .fire {
      background-color: #FBE3DF;
      border-radius: .5em;
    }
    .grass {
      background-color:#E2F9E1;
      border-radius: .5em;
    }
    .water {
      background-color:#E0F1FD;
      border-radius: .5em;
    }
    
`
const ImagemSection = styled.section`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: #969696;
    border-radius: 1em;
    min-width: 20%;
    
    justify-content: center;
    padding: 1em;
    box-shadow: 0 1em 1em rgba(0, 0, 0, 0.280);

`
const InfoSection = styled.section`
    padding: 1em;
    align-items: center;
    background-color: #969696;
    border-radius: 1em;
    margin: .5em;
    text-align: center;
    width: 30%;
    color: black;
    box-shadow: 0 1em 1em rgba(0, 0, 0, 0.280);
    

`
const ImgPokemon = styled.div`
    img{
        width: 10em;
    }
    margin:1em ;
    
    
`
const GifPokemon = styled.div`
    img{
        width: 8em;
    }
    margin:1em ;
    
`

const Status  = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      
      margin-bottom:0.3em;
    }
    h3{
       margin: 0;
        
    }

    .BarraCrescimento{
      
      border: 1px solid black;
      width: 400px;
      height: 1em;
      border-radius: 1em;
      
    }

    .cresce{
      background-color: black;
      height: 1em;
      border-radius: 1em;
      
      
    }


`





export {CardPokemonUnico,ImagemSection,InfoSection,ImgPokemon ,GifPokemon,Status} 