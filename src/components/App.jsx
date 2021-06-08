import React from 'react'
import ObjectToBeChanged from './ObjectToBeChanged.jsx'
import ShapeOptions from './ShapeOptions.jsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <Grid
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
    >
      <CssBaseline />

      <Grid
      item
      >
        <ObjectToBeChanged />
      </Grid>

      <Grid
      item
      >
        <ShapeOptions />
      </Grid>
  
    </Grid>
  )
}

export default App