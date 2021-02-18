import React from "react";
import "./styles.css";
import logo from "../images/logo.png";
import search from "../images/search.png";
import {Link} from "react-router-dom";
// import { Container } from './styles';

function header() {
  return (
    <div className="cabecalho">
        
      <div className="esquerda">
        <div className="logoContainer">
          <img className="logo" src={logo}></img>
        </div>
        <div className="abasContainer">
          <div className="abas">Quem somos</div>
          <div className="abas"><Link to="/contato">Trabalhe conosco</Link></div>
          <div className="abas">Notícias</div>
        </div>
      </div>

      <div className="direita">
        <div className="pesquisa">
          <input type="text" placeholder="Buscar" className="campoPesquisa"/>
          <img className="search"src={search}></img>
        </div>
      </div>

    </div>
  );
}

export default header;
