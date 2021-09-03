import {CircularProgress, Grid, Paper} from "@material-ui/core";
import {useQuery} from "@apollo/client";
import {launchMissionsList} from "../query/SpaceXMissions";
import {useStyles} from "../material-style/materialStyle";
import {Link} from "react-router-dom";

export const Missions = () => {
    const classes = useStyles();
    const {loading, error, data} = useQuery(launchMissionsList);
    const defaultPhoto = "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg";

    if (loading) return <CircularProgress className={"d-flex align-items-center justify-content-center"}/>;
    if (error) return `Error! ${error}`;

    return (
        <>
            <h1>Space X Past Missions</h1>
            <Grid className={"mt-3 mb-3"} container justifyContent="center" spacing={3}>
                {data.launchesPast.map((launchMission) => (
                    <Grid className={"mt-3"} key={launchMission.id} item xs={3}>
                        <Link to={{
                            pathname: "/mission-rocket",
                            state: {
                                rocket: launchMission.rocket
                            }
                        }} className={classes.link}>
                            <Paper className={classes.paper}>
                                <img width={200} height={150}
                                     src={launchMission.links?.flickr_images[0] ?? defaultPhoto}
                                     alt={"mission"}/>
                                <h4 className={"mt-2"}>{launchMission.mission_name}</h4>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
