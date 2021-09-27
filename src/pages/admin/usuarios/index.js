import React,{useState,useEffect} from 'react';
/* import axios from 'axios'; */
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import  Paper  from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import  Button  from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu.admin';
import Footer from "../../../components/footer.admin";
 import userApi from '../../../services/user-api-connection'; 




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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));

export default function UsuarioListagem()  {
  const classes = useStyles();
  
 const [users,setUsers] = useState([]);


 useEffect(() =>{
   async function loadUsers(){
     const response = await userApi.get("/user/all")
    
     setUsers(response.data.content)
     console.log(response.data)
   }
   loadUsers();
   
 },[])
  /* useEffect(() =>{
      axios.get('http://localhost:8080/api/v1/user/all')
      .then(response => {
        setUsers(response.data)
        
      }).catch(error => console.log(error))
  },[]) */
  
    /* console.log('log user aqui',users.map(user =>)) */

    async function handleDelete(userId){
        if(window.confirm("Você deseja realmente excluir este usuário ?")){
            var result = await userApi.delete("/user/delete/id/"+ userId)

            if(result.status === 200){
              window.location.href = '/admin/usuarios';
            }else{
              alert("Ocorreu um erro")
            }

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
            <h2>Listagem de Usuários</h2>
            
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Data de Aniversário</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">CPF</TableCell>
            <TableCell align="center">Opções</TableCell>
           {/*  <TableCell align="right">Cep</TableCell>
            <TableCell align="right">Logradouro</TableCell>
            <TableCell align="right">Complemento</TableCell>
            <TableCell align="right">Bairro</TableCell>
            <TableCell align="right">Localidade</TableCell>
            <TableCell align="right">DDD</TableCell>
            <TableCell align="right">Opções</TableCell> */}
          </TableRow>
        </TableHead>
        
        <TableBody>
            
           {users.map((user) => (
            <TableRow key={user.userId}>
              <TableCell component="th" scope="row">
                  {user.userId}
              </TableCell>
              <TableCell >{user.username}</TableCell>
              <TableCell >{user.birthDay}</TableCell>
              <TableCell >{user.password}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.cpf}</TableCell>
              {/* <TableCell >{user.endereco.cep}</TableCell>
              <TableCell >{user.endereco.logradouro}</TableCell>
              <TableCell >{user.endereco.complemento}</TableCell>
              <TableCell >{user.endereco.bairro}</TableCell>
              <TableCell >{user.endereco.localidade}</TableCell>
              <TableCell >{user.endereco.ddd}</TableCell> */}
              <TableCell align="right">
              
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button variant="contained" color="primary" href= {"/admin/usuarios/editar/" + user.userId } >Atualizar</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(user.userId)} >Deletar</Button>
              </ButtonGroup>

              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
          
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
};

