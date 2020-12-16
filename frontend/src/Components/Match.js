import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

import csgoLogo from "../assets/csgo.png"

import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    match:{
        padding: "20px 0px",
        marginBottom: "0.2rem",
        backgroundColor: "#1C202B",
        '&:hover': {
            background: "#2a2d35",
            cursor: "pointer"
        },
        display: "flex",
        alignItems: "center",
    },
    gameSection:{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "29px",
        marginRight: "-0.1rem",
        paddingRight: "0.3rem",
        boxSizing: "border-box",
    },
    gameAvatar:{
        background: "#121521",
        padding: "5px",
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px"
    },
    gameText:{
        justifyContent: "center",
        fontSize: "11px",
        fontWeight: 600,
        overflow: "hidden",
        display: "flex",
        textAlign: "center",
        paddingLeft: "5px",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium:{
        width: "35px",
        height: "35px",
    },
    tournamentStage:{
    },
    teams:{
        height: "100%",
        display: "flex",
        alignContent: "center",
    },
    schedule:{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingRight: "20px",
        justifyContent: "flex-end",
    },
    arrowGame:{
        height: "100%",
    },
    matchText:{
        fontWeight: "bold",
        fontSize: "13px",
        paddingRight: "10px",
    },
    team:{
        backgroundColor: "#383C4D",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "10px",
    },
    teamAgainst:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    live:{
        borderRadius: "2px",
        padding: "2px 5px",
        backgroundColor: "#f4511e",
        fontWeight: "600"
    },
    count:{
        fontSize: "15px",
        letterSpacing: "5px",
    },
    winner:{
        fontWeight: 700,
        color: "#fff",
    },
    looser:{
    }
}));



export default function Matches(props) {
    const classes = useStyles();

    return (
            <Grid container alignItems="flex-end" className={classes.match}>
                <Grid md={3} className={classes.gameSection} item={true}>
                    <Grid md={2} className={classes.gameAvatar}>
                        <Avatar alt="Remy Sharp" src={csgoLogo} className={classes.small} />
                    </Grid>
                    <Grid md={10} className={classes.tournamentStage}>
                        <Typography variant="body2" className={classes.gameText} color="textSecondary">
                            Argentina Game Show 2020
                            Bracket - Semifinal, BO3
                        </Typography>
                    </Grid>
                </Grid>
                <Grid md={6} className={classes.teams}>
                    <Grid md={5} className={classes.team}>
                        <Typography className={classes.matchText} color="textSecondary">
                            Natus Vincere
                        </Typography>
                        <Avatar alt="Remy Sharp" variant="square" src={"https://img.abiosgaming.com/competitors/Natus-Vincere-Navi-new-logo.png"} className={classes.medium} />
                    </Grid>
                    <Grid md={2} className={classes.teamAgainst}>
                        <Typography className={classes.gameText} color="textSecondary">
                            {
                                props.results ? (<div className={classes.count}><span className={classes.winner}>2</span>:<span className={classes.looser}>1</span></div>) : <div>VS</div>
                            }
                        </Typography>
                    </Grid>
                    <Grid md={5} className={classes.team}>
                        <Avatar alt="Remy Sharp" variant="square" src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.medium} />
                        <Typography className={classes.matchText} color="textSecondary">
                            Virtus pro
                        </Typography>
                    </Grid>
                </Grid>
                <Grid md={3} className={classes.schedule}>
                    <Typography variant="body2" className={classes.gameText} color="textSecondary">
                        3:15 am EET,<br></br>
                        12th s
                    </Typography>
                    {
                        !props.results &&
                        (
                            <React.Fragment>
                                <Box display="flex" component="span" m={1}>
                                    <VideocamOutlinedIcon color="primary"></VideocamOutlinedIcon>
                                </Box>
                                <Link className={classes.live} href="#" color="textPrimary">
                                Live
                                </Link>
                            </React.Fragment>
                        )
                    }

                </Grid>
            </Grid>
    );
}


