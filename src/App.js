import { useEffect } from 'react'

// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

const App = () => {
  // useEffect(() => {
  //   // Initialize Materialize CSS
  //   M.AutoInit()
  // }, [])

  return (
    <div
      className="ui container"
    >
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          fontFamily: 'Roboto'
        }}
      >
        Welcome To Trellis
      </h1>
      <Button 
        color="primary color"
        style={{
          borderRadius: 4,
          fontFamily: 'Roboto',
          width: 140,
          height: 45
        }}
      >
        Sign Up
      </Button>
    </div>
  )
}

export default App
