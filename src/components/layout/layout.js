import React, {useState} from "react";
import {Box, makeStyles, SwipeableDrawer} from "@material-ui/core";
import Header from "../headers/header";
import DrawerContent from "../drawer/drawer-content";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {
                minHeight: "100vh",
                backgroundColor: theme.palette.background
            }
        }
    });

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <Box className={classes.root}>
            <div>
                <Header handleDrawerOpen={handleDrawerOpen}/>
            </div>
            <div>
                {children}
            </div>
            <SwipeableDrawer
                onClose={handleDrawerClose}
                onOpen={handleDrawerOpen}
                open={open}>
                <DrawerContent handleDrawerClose={handleDrawerClose}/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;