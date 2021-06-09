import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function ShapeOptions({ setSelectedOption }) {

  const onButtonClick = (option) => {
    setSelectedOption(option)
  }

  return (
    <Grid container>
      <Grid
        item
        container
        wrap="nowrap"
        xs={12}
        sm={6}
      >
        <Grid item xs>
          <Button
            fullWidth={true}
            onClick={() => onButtonClick('circle')}
            className="button"
          >
            Circle
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            fullWidth={true}
            onClick={() => onButtonClick('egg')}
            className="button"
          >
            Egg
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            fullWidth={true}
            onClick={() => onButtonClick('heart')}
            className="button"
          >
            Heart
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        container
        wrap="nowrap"
        xs={12}
        sm={6}
      >
        <Grid item xs>
          <Button
            fullWidth={true}
            onClick={() => onButtonClick('triangle')}
            className="button"
          >
            Triangle
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            fullWidth={true}
            onClick={() => onButtonClick('star')}
            className="button"
          >
            Star
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            fullWidth={true}
            onClick={() => onButtonClick('default')}
            className="button"
          >
            Default
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ShapeOptions