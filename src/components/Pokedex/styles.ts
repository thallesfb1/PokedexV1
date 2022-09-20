import styled from "styled-components"




const Container = styled.div`

    display: flex;
    
    flex-wrap: wrap;

    justify-content: center;
    
    
`
interface CardProps {
  type:string
}
const Card = styled.li<CardProps>`
    
    text-align: center;
    background-color: #949494;
    border-radius: .5em;
    margin: .5em;

    list-style: none;
    border: 1px solid black;

    img{
        max-width: 230px;
    }
    h3{
        text-transform: capitalize;
    }
   

    :hover{
        cursor: pointer;
        transform: scale(1.05);
        
    }
    
    transition: transform .5s;

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

const AppContainer = styled.div`
    header {
        text-align: center;
        border-radius: 2em;
        background-color: white;

        input{
          border-radius: 1em;
          width: 50%;
          height: 2em;
          margin: 1em;
        }
        
    }

`














export {Container,Card,AppContainer};