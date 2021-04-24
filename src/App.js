
import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import {ThemeProvider } from 'react-bootstrap'
import Navbar from './components/Navbar'
import theme from './temaConfig'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import ItemList from './components/ItemList'
import Item from './components/Item'
import ItemDetailContainer from './components/ItemDetailContainer'



const useStyles = makeStyles

const App = () => {
 
  return (
    <ThemeProvider theme={theme}>
      

      <Navbar />

      <ItemListContainer usuario = "Daniel"/>
      <ItemListContainer usuario = "Alejandro"/>

     <ItemCount />

      <Item /> 
      
      {/* <Button  color="primary" variant="contained" size="large" >
        franco
      </Button>
      <Button  color="secondary" variant="contained"
      size="large" >
        bossio
      </Button>  */}


     
    </ThemeProvider>
   );
  };


export default App;
