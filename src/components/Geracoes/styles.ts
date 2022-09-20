import styled from "styled-components"




const Button = styled.button`
    :hover{
        cursor:pointer;
        transform: scale(1.05);
    }
    transition: transform .5s;
   
    border: none;
    outline:none;
    background-color: #616263;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 1em 1em rgba(0, 0, 0, 0.280);
    
`

const Li = styled.li`   
    img{
        min-width: 150px;
    }
    h1{
        padding: 1rem;
        
    }
    color: white;
    padding: 1.5em;
    display:block;
    list-style: none;
    
`

const Header = styled.header`
    border-radius: 2em;
    text-align: center;
    background-color: #c9cdd4;
    border: 1px solid black;

`
const ContainerPokemons = styled.div`
    text-align: center;
    
    display: flex;
    flex-wrap: wrap;
    margin: 4em;

    justify-content: center;

`










export {Button,Li,Header,ContainerPokemons};