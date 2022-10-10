import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import ProjectCard from '../components/ProjectCard'
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
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
          <Grid container spacing={5}>
            {projects.map((project) => <ProjectCard project={project} />)}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}