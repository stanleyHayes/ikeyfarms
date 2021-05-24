import {Button, Grid, makeStyles, Toolbar} from "@material-ui/core";
import React from "react";
import {Menu} from "@material-ui/icons";
import {Link} from "react-router-dom";

const TabletHeader = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: "none"
            },
            button: {
                fontWeight: 700
            },
            hamburger: {
                width: 50,
                height: 30
            },
            brand: {
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: 24
            },
            role: {
                textTransform: "uppercase",
                fontWeight: 700
            },
            fab: {
                boxShadow: '2px 4px 20px #45a298'
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar>
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={1}>
                    <Menu onClick={handleDrawerOpen} className={classes.hamburger}/>
                </Grid>
                <Grid item={true} xs={11} container={true} justify="flex-start">
                    <Link to="/" className={classes.link}>
                        <Button className={classes.brand} variant="text">IKey Farms</Button>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TabletHeader;