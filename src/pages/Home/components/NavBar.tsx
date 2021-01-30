import React from 'react';
import { makeStyles, Theme, createStyles, ListSubheader, ListItemText, ListItem} from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2), //8*2=16pixels
            width: 275,
            marginRight: theme.spacing(2),
            height: '100%'
        },
        button: {
            width: '100%'
        }
    })
)

const tags = [
    { id: 1, name: 'reactjs' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'dotnet' },
    { id: 4, name: 'php' },
    { id: 5, name: 'materialdesign' },
    { id: 6, name: 'webdev' },
]


function NavBar() {
    const classes = useStyles();
    return ( 
        <Paper className={classes.root}>
                <Button className={classes.button} variant="outlined" color="secondary" >Registrar Gratis</Button>
                <ListSubheader>{`Tags em alta`}</ListSubheader>
                {
                    tags.map((item) => (
                        <ListItem dense button key={`item-${item.id}-${item.name}`}>
                            <ListItemText primary={`#${item.name}`}/>
                        </ListItem>
                    ))
                }
                <ListItem button>
                    Exibir mais Tags
                </ListItem>
        </Paper>
    )
}

export default NavBar;