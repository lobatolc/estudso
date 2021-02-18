import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Routes} from "./routes";
// BrowserRouter pra sistema de roteamento no browser
// Precisamos no Switch pra adicionar critérios de exibição das páginas

ReactDOM.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  
  ,
  
  document.getElementById('root')
);
