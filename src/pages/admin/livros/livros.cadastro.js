import React,{useState} from 'react';



import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
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

 const [name,setName] = useState('');
 const [imageUrl,setImageUrl] = useState('');
  const [launchData,setLaunchData] = useState('');  
 const [description,setDescription] = useState('');
 const [genre,setGenre] = useState('');
 const [author,setAuthor] = useState('');
 const [price,setPrice] = useState('');
 const [quantity,setQuantity] = useState('');

 const handleChange = (event) => {
  setGenre(event.target.value);
};
 


 async function handleSubmit(){

    
    const data = {name: name
                ,imageUrl: imageUrl,
                launchData:launchData
                ,description: description
                ,genre:genre,
                author: author,
                price: price,
                quantity:quantity}

                console.log(data)   
                
        const response = await connection.post('/book/save',data); 
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
      
      <MenuAdmin title={'Livros'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
              <Paper className={classes.paper} >
                <h2>Cadastro de Livro</h2>
            
                <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  id="name"
                   name="name"
                    label="Nome Completo do Livro"
                    fullWidth
                    autoComplete="username"
                    value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>

        <Grid item xs={12} sm={8}>
        <TextField
                  required
                  id="imageUrl"
                   name="imageUrl"
                    label="Url da imagem"
                    fullWidth
                    autoComplete="imageUrl"
                    value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                />
        </Grid>
        

          <Grid item xs={12} sm={3}>
          <form >
          <TextField
              required
              id="launchData"
              label="Data de Publicação"
              type="date"
              defaultValue="2021-10-04"
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
              fullWidth
              /**esta dando erro quando coloco uma data */
              autoComplete="launchData"
              value={launchData}
              onChange={e => setLaunchData(e.target.value)}
               />
          </form>
          </Grid>

          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Descrição do Livro"
            fullWidth
            autoComplete="email"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          </Grid> 

          <Grid item xs={12} sm={3}>
          
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={genre}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Gênero do Livro</em>
          </MenuItem>

          <MenuItem value={"ROMANCE"}>ROMANCE</MenuItem>
          <MenuItem value={"DRAMA"}>DRAMA</MenuItem>
          <MenuItem value={"NOVEL"}>NOVEL</MenuItem>
          <MenuItem value={"TALE"}>TALE</MenuItem>
          <MenuItem value={"CHRONICLE"}>CHRONICLE</MenuItem>
          <MenuItem value={"REHEARSAL"}>REHEARSAL</MenuItem>
          <MenuItem value={"POETRY"}>POETRY</MenuItem>
          <MenuItem value={"LETTER"}>LETTER</MenuItem>
          <MenuItem value={"NON_FICTION"}>NON_FICTION</MenuItem>
          <MenuItem value={"FICTION"}>FICTION</MenuItem>
          <MenuItem value={"ADVENTURE"}>ADVENTURE</MenuItem>
          <MenuItem value={"CHICK_LIT"}>CHICK_LIT</MenuItem>
          <MenuItem value={"GRAPHIC_NOVEL"}>GRAPHIC_NOVEL</MenuItem>
          <MenuItem value={"COMIC"}>COMIC</MenuItem>
          <MenuItem value={"CHILDRENS_LITERATURE"}>CHILDRENS_LITERATURE</MenuItem>
          <MenuItem value={"NATIONAL_LITERATURE"}>NATIONAL_LITERATURE</MenuItem>
          <MenuItem value={"NEW_ADULT"}>NEW_ADULT</MenuItem>
          <MenuItem value={"HORROR"}>HORROR</MenuItem>
          <MenuItem value={"ACADEMIC_MATERIAL"}>ACADEMIC_MATERIAL</MenuItem>
        </Select>
  
      </FormControl>
          </Grid> 

          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="author"
            name="author"
            label="Nome do Autor"
            fullWidth
            autoComplete="autor"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="price"
            name="price"
            label="Preço"
            fullWidth
            autoComplete="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="quantity"
            name="quantity"
            label="Quantidade de Livros"
            fullWidth
            autoComplete="quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </Grid>

        
        
        <Grid item xs={12} sm={12}>
                  <Button
                      
                      variant="contained"
                      onClick={handleSubmit()}
                      color="primary"
                      size="small"
                      align="center"
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

