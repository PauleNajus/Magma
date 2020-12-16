import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import clsx from "clsx";
import csgoback from "../assets/csgoback.jpg";
import lolback from "../assets/lolback.jpg";
import csgoLogo from "../assets/csgo.png";
import lolLogo from "../assets/lol.png"
import Avatar from "@material-ui/core/Avatar";
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    itemGrid: {
        height: "416px",
        marginBottom: "24px",
        borderRadius: "8px",
        backgroundSize: "cover",
        backgroundColor: "#1C202B",
        display: "flex",
        backgroundRepeat: "no-repeat",
        position: "relative",
    },
    leagueoflegends: {
        backgroundImage: "url("+lolback+")",
    },
    csgo: {
        backgroundImage: "url("+csgoback+")",
    },
    avatar: {
        marginBottom: "15px",
    },
    smallAvatar:{
        width: "24px",
        height: "24px",
        marginRight: "10px",
    },
    leftInnerItemGrid: {
        padding: "32px",
    },
    rightInnerItemGrid: {
        padding: "24px 20px 10px 40px",
        backgroundColor: "rgba(18, 21, 33, 0.38)",
        display: "flex",
        flexDirection: "column",
        minWidth: "252px",
        rowGap: "12px",
    },
    status: {
        display: "inline-flex",
        color: "#FFF",
        fontSize: "12px",
        fontWeight: "600",
        borderRadius: "3px",
        padding: "5px 16px",
        textTransform: "uppercase",
        marginTop: "25px"
    },
    ongoing:{
        backgroundColor: "#f4511e",
    },
    upcoming:{
        backgroundColor: "#383C4D",
    },
    title:{
        fontWeight: 700,
        textTransform: "uppercase",
    },
    rightItemInner:{
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        background: "#383C4D",
        boxShadow: "0 3px 2px rgba(0, 0, 0, 0.25)",
        padding: "10px",
        height: "44px",
        width: "calc(100% - 20px)",
        transition: "0.1s",
        '&:hover': {
            background: "#3f424e",
            cursor: "pointer"
        },
    },
    itemText:{
        fontSize: "12px",
    },
    smallTitle:{
        fontSize: "16px"
    },
    absoluteInner:{
        right: "0px",
        overflowX: "scroll",
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Tournaments() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container alignItems="center">
                    <Grid md={12} className={clsx(classes.itemGrid, classes.csgo)}>
                        <Grid md={8} className={classes.leftInnerItemGrid}>
                            <Avatar alt="Remy Sharp" src={csgoLogo} className={classes.avatar} />
                            <Typography variant="h4" className={classes.title}>
                                IEM Global Challenge 2020
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Prise Pool: 100$
                            </Typography>
                            <Box className={clsx(classes.status, classes.ongoing)}>
                                Ongoing
                            </Box>
                        </Grid>
                        <Grid md={4} className={clsx(classes.absoluteInner, "scroll")}>
                            <Grid
                                className={classes.rightInnerItemGrid}
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography className={classes.smallTitle}>
                                    Tournament teams:
                                </Typography>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid md={12} className={clsx(classes.itemGrid, classes.leagueoflegends)}>
                        <Grid md={8} className={classes.leftInnerItemGrid}>
                            <Avatar alt="Remy Sharp" src={lolLogo} className={classes.avatar} />
                            <Typography variant="h4" className={classes.title}>
                                IEM Global Challenge 2020
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Prise Pool: 100$
                            </Typography>
                            <Box className={clsx(classes.status, classes.ongoing)}>
                                Ongoing
                            </Box>
                        </Grid>
                        <Grid md={4} className={clsx(classes.absoluteInner, "scroll")}>
                            <Grid
                                className={classes.rightInnerItemGrid}
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography className={classes.smallTitle}>
                                    Tournament teams:
                                </Typography>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                                <Box className={classes.rightItemInner}>
                                    <Avatar alt="Remy Sharp" variant={"square"} src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} className={classes.smallAvatar} />
                                    <Typography className={classes.itemText}>
                                        Virtus Pro
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}