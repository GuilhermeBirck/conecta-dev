import React from 'react';
import { Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import SvgIcon from '@material-ui/core/SvgIcon'
import { Bell } from 'react-feather'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        appBar: {
             boxShadow: 'none'
        },
        img: {
            maxHeight: 55
        },
        grow: {
            flexGrow: 1
        },
        userSection: {
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            marginRight: 10
        },
        bell: {
            marginRight: 10
        }
    },
));


function Header() {
    const classes =  useStyles();

    return (
        <AppBar position ="fixed" color="inherit" className={classes.appBar}>
            <ToolBar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                        <Button variant="contained" color="primary" className={classes.button}>Novo Post</Button>
                        <SvgIcon className={classes.bell}>
                            <Bell>
                            </Bell>
                        </SvgIcon>
                        <Avatar></Avatar>
                </div>
                    <div className=''>
                       
                    </div>
            </ToolBar>
        </AppBar>
    )
}

export default Header;