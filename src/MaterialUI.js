import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import 'fontsource-roboto'

const theme = createMuiTheme({

})

const MaterialUI = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <h1>Hello World</h1>
    </MuiThemeProvider>
  )
}

export default MaterialUI
