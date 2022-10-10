import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Button from '../components/ButtonLink'
import profilepic from "../images/jskolpic.jpg"
import resume from "../images/julie_altman_resume_oct.pdf"
import { homepageText } from '../constants/text'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    body: {
        backgroundColor: '#232946',
        color: '#fffffe',
    },
    image: {
        backgroundImage: `url(${profilepic})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        padding: "25px",
        margins: "25px",
        fontSize: "18px",
    }
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.body}>

                <div className={classes.text}>
                    <h1>{homepageText.header}</h1>
                    <p>{homepageText.p1}</p>
                    <p>{homepageText.p2}</p>
                    <p>{homepageText.contact}</p>
                </div>
                <div className={classes.paper}>
                    <Button text={homepageText.resume} link={resume} />
                    <Button text={homepageText.github} link={homepageText.githubLink} />
                    <Button text={homepageText.linkedin} link={homepageText.linkedinLink} />
                    <Box mt={5} />
                </div>
            </Grid>
        </Grid>
    );
}