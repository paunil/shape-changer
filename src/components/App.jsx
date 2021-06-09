import React, { useState } from 'react'
import ObjectToBeChanged from './ObjectToBeChanged.jsx'
import ShapeOptions from './ShapeOptions.jsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

function App() {

  const [selectedOption, setSelectedOption] = useState('open')

  return (
    <Grid
    container
    justify="center"
    >
      <CssBaseline />

      <Grid item xs={12}>
        <ObjectToBeChanged selectedOption={selectedOption}/>
      </Grid>

      <Grid item xs={12}>
        <ShapeOptions setSelectedOption={setSelectedOption}/>
      </Grid>

    </Grid>
  )
}

export default App