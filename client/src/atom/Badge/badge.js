import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";

const styles = theme => ({
  // container:{
  //   margin:theme.spacing(2),
  //   padding: theme.spacing(2),
  // },
  // margin: {
  //   margin: theme.spacing.unit * 2
  // },
  customBadge: props =>({
    backgroundColor: `${props.bgcolor}`,
    color: `${props.color}`,
    fontWeight: "bold",
    textTransform: "capitalized"
  })
});

const SimpleBadge = (props) => {
  //const classe = useStyles(props);
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Badge
        classes={{ badge: classes.customBadge }}
        className={classes.margin}
        badgeContent={props.name}
      ></Badge>
    </div>
  );
};

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBadge);