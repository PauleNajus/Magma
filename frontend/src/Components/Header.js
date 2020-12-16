import React, { Component, useState } from "react"
import clsx from "clsx"
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';
import logo from "../assets/volcano.svg"

import { withStyles } from '@material-ui/core/styles';
//import Auth from '../services/auth'

const styles = theme => ({
    mainHeader: {
       // position: "fixed",
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        fontFamily: "cursive",
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    nav: {
        flexGrow: 1,
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
});


class Header extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="static" color="secondary" elevation={0} className={classes.mainHeader}>
                    <Toolbar>
                        <img src={logo} className="logo" />
                        <Typography variant="h6" color="inherit" className={classes.toolbarTitle} noWrap>
                            Magma
                        </Typography>
                        <nav className={classes.nav}>
                            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                                Tournaments
                            </Link>
                            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                                Teams
                            </Link>
                            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                                Bets
                            </Link>
                        </nav>
                        <Button href="#" color="default">
                            Login
                        </Button>
                        <Button href="#" color="primary" variant="contained">
                            Sign UP
                        </Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Header)