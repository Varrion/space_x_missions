import {useLocation} from "react-router-dom";
import {Card, CardContent, Typography} from "@material-ui/core";
import {useStyles} from "../material-style/materialStyle";

export const MissionRocket = () => {
    const classes = useStyles()
    const location = useLocation();
    const {rocket} = location.state;

    return (
        rocket != null && <div className={"container mt-5"}>
            <Card className={classes.root}>
                <Typography variant={"h3"}>
                    Rocket Details
                </Typography>
                <CardContent className={"mt-2"}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Name: {rocket.rocket_name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Type: {rocket.rocket_type}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Booster: {rocket.rocket?.boosters}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Company: {rocket.rocket?.company}
                    </Typography>
                    <Typography variant="body2" component="p">
                        IsActive: {rocket.rocket?.active.toString()}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Country: {rocket.rocket?.country}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
