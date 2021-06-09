import React from 'react'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import { shapes } from './shapes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEgg, faHeart, faSortUp, faStar, faSquare } from '@fortawesome/free-solid-svg-icons'


function ObjectToBeChanged({ selectedOption }) {

  const generateIconStyle = (shape, multiplier) => {
    return {
      fontSize: "var(--" + shape + "-size)",
      color: "pink",
      position: "absolute",
      top: "calc(100px - var(--" + shape + "-size) / 2)",
      left: "calc(100px - var(--" + shape + "-size) * " + multiplier + " / 2)"
    }
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ margin: "10% 0% 4% 0%" }}
    >

      <Grid item>
        <Typography
          variant="h4"
          style={{ marginBottom: "4%" }}
        >
          Change this shape with the options below!
        </Typography>
      </Grid>

      <Grid item>
        <motion.div
          initial={"default"}
          animate={selectedOption}
          variants={shapes}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            width: "200px",
            height: "200px"
          }}
        >
          <FontAwesomeIcon
            icon={faCircle}
            style={generateIconStyle("circle", 1)} /
          >
          <FontAwesomeIcon
            icon={faEgg}
            style={generateIconStyle("egg", 0.75)} /
          >
          <FontAwesomeIcon
            icon={faHeart}
            style={generateIconStyle("heart", 1)} /
          >
          <FontAwesomeIcon
            icon={faSortUp}
            style={generateIconStyle("triangle", 0.625)} /
          >
          <FontAwesomeIcon
            icon={faStar}
            style={generateIconStyle("star", 1)} /
          >
          <FontAwesomeIcon
            icon={faSquare}
            style={generateIconStyle("default", 0.875)} /
          >
        </motion.div>
      </Grid>
    </Grid>
  )
}

export default ObjectToBeChanged