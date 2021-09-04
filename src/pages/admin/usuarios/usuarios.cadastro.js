import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import  Paper  from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu.admin';
import Footer from "../../../components/footer.admin";
 import imgAdmin from '../../../assets/img/admin.jpg' 




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  }, 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));

export default function UsuarioCadastro() {
  const classes = useStyles();
 
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <MenuAdmin title={'Usuários'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
          <Paper className={classes.paper} >
            <h2>Formulário</h2>
            
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Nome Completo"
            fullWidth
            autoComplete="username"
          />
        </Grid>
        {/* birthday */}
        

          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
          />
          </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
          </Grid> 

          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            autoComplete="cpf"
          />
          </Grid> 

          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="cep"
            name="cep"
            label="Zip / Cep"
            fullWidth
            autoComplete="cep"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" 
          name="state" 
          label="State/Province/Region" 
          fullWidth 
          autoComplete="city"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="district"
            name="district"
            label="District"
            fullWidth
            autoComplete="district"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="road"
            name="road"
            label="Road"
            fullWidth
            autoComplete="road"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="houseNumber"
            name="houseNumber"
            label="Number"
            fullWidth
            autoComplete="houseNumber"
          />
        </Grid>

        </Grid>
          </Paper>
          </Grid>
            
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box >
        </Container>
      </main>
    </div>
  );
}

