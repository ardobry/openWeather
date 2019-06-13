import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as ReactLink } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(1, 2)
  }
}));

export default function CustomSeparator(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="Breadcrumb"
        >
          <Link color="inherit">
            <ReactLink to="/">Week</ReactLink>
          </Link>

          {props.selectedPage && (
            <Typography color="textPrimary">
              <ReactLink to={props.selectedPage}>
                {props.selectedPage}
              </ReactLink>
            </Typography>
          )}
        </Breadcrumbs>
      </Paper>
    </div>
  );
}
