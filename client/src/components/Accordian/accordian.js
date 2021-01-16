import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        borderRadius: '10px',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: '#5b009a1a',
      borderRadius: '10px',
      marginBottom: -1,
      color: '#000',
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expandIcon: {
        color: "#5b009a80"
    },
    expanded: {},
  })(MuiAccordionSummary);
  

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  
const styles = makeStyles(theme => ({
  container: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // [theme.breakpoints.down("md")]: {
    //   fontSize: theme.typography.fontSize,
    // },
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "#000000",
    fontWeight: "bold",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ControlledAccordions = (props) => {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event,isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <Accordion
        className={classes.customAccordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        square
      >
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <Grid container justify="space-between" className={classes.container}>
                <Grid item>
                    <Typography className={classes.heading} variant="body2">
                        {props.heading}
                    </Typography>
                </Grid>
                <Grid item>
                    {props.subheading}
                </Grid>
            </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.content}</Typography>
        </AccordionDetails> 
      </Accordion>
  );
};

ControlledAccordions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledAccordions);