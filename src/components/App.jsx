import React, { useState } from 'react'
import ObjectToBeChanged from './ObjectToBeChanged.jsx'
import ShapeOptions from './ShapeOptions.jsx'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

function App() {

  const theme = responsiveFontSizes(createMuiTheme({}), {
    breakpoints: ["sm", "md"],
    factor: 4,
    variants: ["h4"]
  })

  const [selectedOption, setSelectedOption] = useState('open')

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justify="center"
      >
        <CssBaseline />

        <Grid item xs={12}>
          <ObjectToBeChanged selectedOption={selectedOption} />
        </Grid>

        <Grid item xs={10} sm={8}>
          <ShapeOptions setSelectedOption={setSelectedOption} />
        </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default App