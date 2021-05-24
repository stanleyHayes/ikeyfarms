import React, {useEffect, useState} from "react";
import {Button, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Link, useRouteMatch} from "react-router-dom";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {

        return {
            link: {
                textDecoration: "none",
                display: 'inline-block',
                paddingBottom: 4,
                paddingTop: 4,
                paddingLeft: 8,
                paddingRight: 8
            },
            button: {
                fontWeight: 700,
                letterSpacing: 1.5
            },
            logo: {
                width: 100,
                height: 50
            },
            brand: {
                textTransform: "uppercase",
                fontSize: 32
            },
            fab: {
                boxShadow: '2px 4px 20px #45a298'
            },
            active: {
                backgroundColor: theme.palette.primary.dark
            },
            inactive: {}
        }
    });

    const classes = useStyles();

    const {path} = useRouteMatch();
    const [active, setActive] = useState(path);

    useEffect(() => {
        setActive(path);
    }, [path]);

    const handlePathChange = path => {
        setActive(path);
    }

    console.log(active);
    return (
        <Toolbar variant="regular" color="primary">
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid lg={3} item={true} container={true} justify="center" alignItems="center">
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <Button
                                onClick={() => handlePathChange('')}
                                className={classes.brand}
                                variant="text">Ikey Farms</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid lg={7} item={true} container={true} justify="center" alignItems="center">
                    <Grid item={true}>
                        <Link className={classes.link} to="/">
                            <Button
                                onClick={() => handlePathChange('/')}
                                className={`${active === '/' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Home</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/about">
                            <Button
                                onClick={() => handlePathChange('/about')}
                                className={`${active === '/about' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">About</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/media">
                            <Button
                                onClick={() => handlePathChange('/media')}
                                className={`${active.startsWith('/media') ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Media</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/products">
                            <Button
                                onClick={() => handlePathChange('/products')}
                                className={`${active === '/products' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Products</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/projects">
                            <Button
                                onClick={() => handlePathChange('/projects')}
                                className={`${active === '/projects' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Projects</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/careers" className={classes.link}>
                            <Button
                                onClick={() => handlePathChange('/careers')}
                                className={`${active === '/careers' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Careers</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/contact" className={classes.link}>
                            <Button
                                onClick={() => handlePathChange('/contact')}
                                className={`${active === '/contact' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Contact</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;