import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

export default function LinkButton({ link, text, disabled }) {
    const useStyles = makeStyles(() => ({
        button: {
            width: '300px',
            padding: '16px',
            height: '75px',
            backgroundColor: "#eebbc3",
            color: '#232946',
            "&:hover": {
                backgroundColor: '#A26F77',
                color: '#232946',
            },
            margin: '16px',
        }
    }));

    const classes = useStyles()

    return (
        <Button
            disabled={disabled}
            className={classes.button}
            variant="contained"
            color="primary"
            href={link}
        >
            {text}
        </Button>
    )
}