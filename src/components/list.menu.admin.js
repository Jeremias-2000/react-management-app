import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import { Link} from 'react-router-dom';
import ExitToApp from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component="a" href="/admin/usuarios">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários"  />
    </ListItem>

    <ListItem button component="a" href="/admin/livros">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Livros" />
    </ListItem>

    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <Link  to= "/">
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
    </Link>
  </div>
);