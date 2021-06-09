import React from 'react'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import {shapes} from './constants'


function ObjectToBeChanged({selectedOption}) {
  return(
    <Grid 
    container
    justify="center"
    alignItems="center"
    style={{margin: "10% 0% 4% 0%"}}
    >
      {/* <Grid item   container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      > */}
        <motion.div
        initial={"default"}
        animate={selectedOption}
        variants={shapes}
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "inline-block",
          height: 300,
          "&::before": {
            content: '""',
            backgroundColor: "red",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: 2,
            transform: "var(--before-x)"
          }
        }}
        >
          <Typography>
            Change my shape with the options below!
          </Typography>
        </motion.div>
      {/* </Grid> */}
    </Grid>
  )
}

export default ObjectToBeChanged