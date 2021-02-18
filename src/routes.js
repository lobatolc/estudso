import React from "react";
import App from './App';
import {Contact} from "./pages/contact/Contact";
import {Switch, Route, Redirect} from "react-router-dom";

// Route define esses critérios
//exact ajuda a definir EXATAMENTE o endereço da página a ser buscada. 
// precisamos adicionar um exact já que / é a rota padrão. 
// Se tivesse uma rota com o path="/contato/mais", o Contact teria que ter um exact também
// Redirect push to me redireciona pra algum link
export const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={App} exact/> 
            <Route path="/contato" component={Contact}/>
            <Route component={()=> <div>Page 440!</div>}>
            <Redirect push to="/"/>
            </Route>
        </Switch>
)
}