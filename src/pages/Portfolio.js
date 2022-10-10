import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Button from '../components/ButtonLink'
import { homepageText, portfolioText } from '../constants/text'
import projects from "../projects.json"

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  main: {
    backgroundColor: '#fffffe',
  },
  heroContent: {
    backgroundColor: '#232946',
    color: '#fffffe',
    padding: theme.spacing(8, 0, 6),
    textAlign: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b8c1ec',
    color: '#121629',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  projectTitle: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: '18px',
  },
}));


export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" className={classes.text}>
            <h1>{portfolioText.header}</h1>
            <h5>{portfolioText.content}</h5>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button text={homepageText.github} link={homepageText.githubLink} />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            {projects.map((project) => (
              <Grid item key={project.index} xs={6} s={6} m={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.imageUrl}
                    title={project.projTitle}
                  />
                  <CardContent className={classes.cardContent}>
                    <h5 className={classes.projectTitle}>{project.projTitle}</h5>
                    <div className={classes.text}>
                      <p>{project.summary}</p>
                      <p>{portfolioText.role}{project.role}</p>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button text={portfolioText.github} link={project.gitHubLink} />
                    <Button text={project.deployedApp ? portfolioText.deployed : portfolioText.workInProgress} link={project.deployedApp} disabled={!project.deployedApp} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}