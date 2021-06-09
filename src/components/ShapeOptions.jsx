import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function ShapeOptions({ setSelectedOption }) {

  // breaks out common denominators
  const createButtons = (buttonNames) => {
    return buttonNames.map((name) =>
      <Grid item key={name} xs>
        <Button
          fullWidth={true}
          onClick={() => onButtonClick(name)}
          className="button"
          style={{ background: "#00c2cb" }}
        >
          {name}
        </Button>
      </Grid>
    )
  }

  const onButtonClick = (option) => {
    setSelectedOption(option)
  }

  return (
    <Grid container spacing={1}>
      <Grid
        item
        container
        wrap="nowrap"
        xs={12}
        sm={6}
        spacing={1}
      >
        {createButtons(['circle', 'egg', 'heart'])}
      </Grid>

      <Grid
        item
        container
        wrap="nowrap"
        xs={12}
        sm={6}
        spacing={1}
      >
        {createButtons(['triangle', 'star', 'default'])}
      </Grid>
    </Grid>
  )
}

export default ShapeOptions