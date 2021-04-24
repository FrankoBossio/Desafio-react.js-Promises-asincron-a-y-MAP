import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';






const UseStyles = makeStyles (theme =>({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(3),
    },

    title: {
        flexGrow: 1
    },

    


}))

const navbar = () => {
    const classes = UseStyles()

    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                  <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                  </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Cañas Tacuara
                </Typography >
                <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <LocalGroceryStoreIcon />
                  </IconButton>
                <Button variant="text" color="inherit">
                  Ingresar
                </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default navbar
