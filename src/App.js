// import MaterializeCSS from './MaterializeCSS'
// import ChakraUI from './ChakraUI'
import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: 'Roboto',
//     h1: {
//       color: '#009EDC'
//     }
//   }
// })

const CiscoBlueTypography = withStyles({
  root: {
    fontFamily: 'Roboto',
    color: '#009EDC'
  }
})(Typography)

const App = () => {
  return (
    // <MaterializeCSS />
    // <ChakraUI />
    <div style={{ backgroundColor: 'black' }}>
      <CiscoBlueTypography variant="h1">
        Hello World
      </CiscoBlueTypography>
    </div>
  )
}

export default App
