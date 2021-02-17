import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  speech: {
    minWith: "6.2rem",
    position: "fixed",
    bottom: "2.2rem",
    zIndex: "50",
    background: "#fafafa",
    border: "1px solid #4caf50",
    color: "#4caf50",
    boxShadow: "0px 20px 30px 10px rgba(0, 0, 0, 0.16)",
    transition: "all ease .5s",

    "&:hover": {
      background: "#4caf50",
      color: "white",
      transform: "scale(1.2)",
    },
  },
}));
