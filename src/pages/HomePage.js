import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import profilepic from "../images/jskolpic.jpg";
import resume from "../images/altman_te.pdf";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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
    button: {
        width: "250px",
        height: "35px",
        backgroundColor: "#C335CA"
    },
    text: {
        padding: "5px",
        margins: "5px",
        fontSize: "18px"
    }
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                <div className={classes.text}>
                    <h1>Julie Altman</h1>

                    <p>Hi! I am Julie. After years of teaching high school chemistry, I began to be more and more interested in coding after coaching students through some robotics projects. A few years later I completed a full-stack coding bootcamp through Rutgers University.</p>

                    <p>I graduated from Rutgers University with a BA in Chemistry in 2012, and then from The University of Chicago with an MS in Chemistry in 2013. Since then, I have been teaching high school chemistry and some computer science. In addition to focusing on chemistry, I focus on study skills in my classroom such that what I teach applies not only to chemistry, but to all possible disciplines.</p>

                    <p>You can contact me by emailing jtskolnik@gmail.com or by calling (609)-217-1201.</p>
                </div>
                <div className={classes.paper}>
                    <Button className={classes.button} variant="contained" color="primary" href={resume}>
                        See my resume
                        </Button> <br></br>
                    <Button className={classes.button} variant="contained" color="primary" href="https://github.com/skolnikskolnik">
                        Visit my GitHub page
                        </Button> <br></br>
                    <Button className={classes.button} variant="contained" color="primary" href="https://www.linkedin.com/in/julie-altman-0a639165/">
                        Visit my LinkedIn
                        </Button> <br></br>
                    <Button className={classes.button} variant="contained" color="primary" href="https://www.youtube.com/channel/UC_KXDwR1AwUJfk7y5t1WmRw">
                        Visit my YouTube channel
                        </Button> <br></br>
                    <Box mt={5}>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}