import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Toolbar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    appBar:{
        background: 'linear-gradient(45deg, darkblue 60%, skyblue 30%)',
        position : 'fixed',
        top : 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      menuButton: {
        marginRight: 'auto'
    },

}

class TopBar extends React.Component{
    
    render(){
        return(
        <AppBar className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                <IconButton className={styles.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                    <MenuIcon/> 
                    <MenuItem></MenuItem>
                </IconButton>
                
                <MenuItem className={styles.hyulogo}>
                    <Link component={RouterLink} to="/">
                        <img src='/logo.png' alt='logo' />
                    </Link>
                </MenuItem>
            </Toolbar>
        </AppBar>
        );
    }
}

export default TopBar;
