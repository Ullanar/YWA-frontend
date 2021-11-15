import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 275,
        marginTop: 15
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 5,
        marginTop: 15,
        fontSize: 12,

    },
    title: {
        fontSize: 18,
    },
});


export default function TaskCard(props) {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>

            <Card className={classes.root}>
                <CardContent>

                    {/*{JSON.stringify(props)}*/}
                    <Typography className={classes.title} variant="h5" component="h2">
                        {props.title}
                    </Typography>

                    <Typography variant="body1" component="p">
                        {props.cardText}

                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Created: {props.created} Deadline: {props.deadline}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">delete</Button>
                </CardActions>
            </Card>

        </div>
    )
}