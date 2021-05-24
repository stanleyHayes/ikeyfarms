import React from "react";
import {Avatar, Button, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Close} from "@material-ui/icons";


const DrawerContent = ({handleDrawerClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: "none"
            },
            button: {
                color: theme.palette.text.secondary
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            avatar: {
                width: 150,
                height: 150
            },
            name: {},
            nickname: {},
            role: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                marginBottom: 16,
                borderRadius: 16,
                fontWeight: "bold"
            },
            subDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            container: {
                paddingTop: 32,
                paddingBottom: 32
            },
            closeButton: {}
        }
    });

    const classes = useStyles();


    return (
        <Container className={classes.container}>
            <Grid container={true} justify="center">
                <Grid item={true} xs={12} container={true} justify="flex-end">
                    <Grid item={true}>
                        <Button
                            className={classes.closeButton}
                            onClick={handleDrawerClose}
                            startIcon={<Close/>}
                            variant="outlined"
                            size="large">
                            Close
                        </Button>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} container={true} justify="center">
                    <Grid item={true}>
                        <Avatar src="/assets/lightingcolored.svg" className={classes.avatar}/>
                    </Grid>
                </Grid>
                <Grid item={true}>
                    <Typography
                        gutterBottom={true}
                        className={classes.name}
                        variant="h4"
                        color="textSecondary"
                        align="center">
                        IKey Farms
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom={true}
                        className={classes.role}
                        variant="h6"
                        align="center">
                        Lorem Ipsum Dolor
                    </Typography>
                </Grid>
            </Grid>

            <Divider variant="fullWidth" className={classes.divider}/>

            <Grid container={true} justify="center">
                <Grid item={true} xs={12}>
                    <Link to="/" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Home
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/about" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            About
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/media" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Media
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/products" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Products
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/projects" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Projects
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/careers" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Careers
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/contact" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Contact
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;