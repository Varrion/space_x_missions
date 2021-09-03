import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 250,
        height: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "lightcyan"
    },
    control: {
        padding: theme.spacing(2),
    },

    link: {
        textDecoration: "none"
    }
}));
