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

export default function LivrosListagem()  {
  const classes = useStyles();
  
 const [books,setBooks] = useState([]);


 useEffect(() =>{
   async function loadBooks(){
     const response = await userApi.get("/book/all")
    
     setBooks([books, response.data])
     console.log(response.data)
   }
   loadBooks();
   
 },[])
  /* useEffect(() =>{
      axios.get('http://localhost:8080/api/v1/user/all')
      .then(response => {
        setUsers(response.data)
        
      }).catch(error => console.log(error))
  },[]) */
 

  
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
            <TableCell align="right">Autor</TableCell>
            <TableCell align="right">Gênero</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Quantidade</TableCell>
          </TableRow>
        </TableHead>

        
        <TableBody>
        
           {books.map((book) => (
            <TableRow key={book.bookId} >
              <TableCell component="th" scope="row">
                  {book.bookId}
              </TableCell>
              
              <TableCell >{book.name}</TableCell>
              <TableCell >{book.author}</TableCell>
              <TableCell >{book.genre}</TableCell>
              <TableCell >{book.price}</TableCell>
              <TableCell >{book.quantity}</TableCell>

              <ButtonGroup>Atualizar</ButtonGroup>
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

