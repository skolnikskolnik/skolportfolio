import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function Footer() {
    const useStyles = makeStyles((theme) => ({
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        }
      }));

    const classes = useStyles();

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Julie Altman
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    return (
        <div>
            {/* Footer */}
            < footer className={classes.footer} >
                <Typography variant="h6" align="center" gutterBottom>
                    Julie Skolnik Altman
          </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Thank you for visiting my website.
          </Typography>
                <Copyright />
            </footer >
            {/* End footer */}
        </div>
    )
}