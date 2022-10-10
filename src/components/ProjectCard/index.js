import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Button from '../ButtonLink'
import { portfolioText } from '../../constants/text'

export default function ProjectCard({ project }) {
    const useStyles = makeStyles(() => ({
        card: {
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#b8c1ec',
            color: '#121629',
            position: 'relative',
        },
        cardMedia: {
            paddingTop: '56.25%',
        },
        projectTitle: {
            fontWeight: 'bold',
        },
        text: {
            fontSize: '18px',
        },
        cta: {
            position: 'absolute',
            bottom: '0px',
        }
    }));

    const classes = useStyles()
    const width = '185px'

    return (
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
                <CardActions className={classes.cta}>
                    <Button width={width} text={portfolioText.github} link={project.gitHubLink} />
                    <Button width={width} text={project.deployedApp ? portfolioText.deployed : portfolioText.workInProgress} link={project.deployedApp} disabled={!project.deployedApp} />
                </CardActions>
            </Card>
        </Grid>
    )
}