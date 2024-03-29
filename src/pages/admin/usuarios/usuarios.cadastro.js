import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import  Paper  from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu.admin';
import Footer from "../../../components/footer.admin";
import PersonAddIcon from '@material-ui/icons/PersonAdd'; 

import connection from '../../../services/user-api-connection';



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
    height: '100vh',overflow: 'auto',},
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),},
  paper: {
    padding: 15,
    display: 'flex',overflow: 'auto',
    flexDirection: 'column',},formControl:{width:'100%'}
  
}));

export default function UsuarioCadastro() {
  const classes = useStyles();

 const [username,setUsername] = useState('');
  const [birthDay,setBirthDay] = useState('');  
 const [password,setPassword] = useState('');
 const [email,setEmail] = useState('');
 const [cpf,setCpf] = useState('');


 const [cep,setCep] = useState('');
 


 async function handleSubmit(){

    const address= {cep: cep}
    const data = {username: username
                ,birthDay: birthDay
                ,password: password
                ,email:email,
                cpf: cpf,
                address: address}

                console.log(data)   
                
        const response = await connection.post('/user/signup',data); 
        console.log(response.data)
        if(response.status === 201){
          window.location.href= 'http://localhost:3000/admin/usuarios'
        }else{
          alert('Erro ao cadastrar novo usuário !');
        } 
  }
  


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
                <h2>Cadastro de Usuário</h2>
            
                <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="username"
                   name="username"
                    label="Nome Completo"
                    fullWidth
                    autoComplete="username"
                    value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Grid>

        <Grid item xs={12} sm={3}>
        <form >
          <TextField
              required
              id="birthDay"
              label="BirthDay"
              type="date"
              defaultValue="2021-10-04"
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
              fullWidth
              /**esta dando erro quando coloco uma data */
              autoComplete="birthDay"
              value={birthDay}
              onChange={e => setBirthDay(e.target.value)}
               />
          </form>
        </Grid>
        

          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={cpf}
            onChange={e => setCpf(e.target.value)}
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
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
        </Grid>

        
        
        <Grid item xs={12} sm={12}>
                  <Button
                      variant="contained"
                      onClick={handleSubmit()}
                      color="primary"
                      size="small"
                      className={classes.button}
                      startIcon={<PersonAddIcon />}
               
                      >    
                    Save  
                  </Button>
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

