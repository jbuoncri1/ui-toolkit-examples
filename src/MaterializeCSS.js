import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const MaterializeCSS = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default MaterializeCSS
