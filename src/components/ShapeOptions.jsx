import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function ShapeOptions() {
  return(
    <Grid 
    container
    >
      <Grid 
      item
      xs={4}
      sm={2}
      >
        <Button>Circle</Button>
      </Grid>

      <Grid 
      item
      xs={4}
      sm={2}
      >
        <Button>Oval</Button>
      </Grid>

      <Grid 
      item
      xs={4}
      sm={2}
      >
        <Button>Heart</Button>
      </Grid>

      <Grid 
      item
      xs={4}
      sm={2}
      >
        <Button>Triangle</Button>
      </Grid>

      <Grid 
      item
      xs={4}
      sm={2}
      >
        <Button>Hexagon</Button>
      </Grid>

      <Grid 
      item
      xs={4}
      sm={2}
      >
        <Button>Default</Button>
      </Grid>
       
    </Grid>
  )
}

export default ShapeOptions
