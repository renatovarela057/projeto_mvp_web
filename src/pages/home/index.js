import React from "react";
import {Link} from "react-router-dom"

function Home(){
    return(
    <div>
        <h1>Home</h1>
        {/* <Link to="/about">Ir para página Sobre</Link> */}
        <Link to={{
            pathname:"/about",
            state:{
                nome: 'João',
                idade: 36
            }
        }}>Ir para página Sobre</Link>
    </div>
    )
}

export default Home