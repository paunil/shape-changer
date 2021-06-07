import React from 'react'
import ObjectToBeChanged from './ObjectToBeChanged.jsx'
import ShapeOptions from './ShapeOptions.jsx'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ObjectToBeChanged />
      <ShapeOptions />
    </React.Fragment>
  )
}

export default App