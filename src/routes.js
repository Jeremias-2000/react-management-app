import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import DashBoard from './pages/admin/dashboard';

import Livros from './pages/admin/livros';
import LivrosEditar from './pages/admin/livros/livros.editar';
import LivrosCadastro from './pages/admin/livros/livros.cadastro';

import Usuarios from './pages/admin/usuarios';
import UsuarioCadastro from './pages/admin/usuarios/usuarios.cadastro';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';

import Home from './pages/client/home';
import LivrosDetails
 from './pages/client/livros/livros.details';

 export default function Routes() {
     return(
         <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos/:idProduto" exact component={LivrosDetails} />


                <Route path="/admin" exact component={DashBoard} />

                <Route path="/admin/livros" exact component={Livros} />
                <Route path="/admin/livros/cadastrar" exact component={LivrosCadastro} />
                <Route path="/admin/livros/editar/:idLivro" exact component={LivrosEditar} />

                <Route path="/admin/usuarios" exact component={Usuarios} />
                <Route path="/admin/usuarios/cadastrar" exact component={UsuarioCadastro} />
                <Route path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />

            </Switch>
         
         </BrowserRouter>
     )
 }