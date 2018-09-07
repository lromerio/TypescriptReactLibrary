import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from "react-hot-loader"
import Demo from './demo/Demo'

const rootEl = document.getElementById("root")
ReactDOM.render(
  <AppContainer>
    <Demo/>
  </AppContainer>,
  rootEl
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./demo/Demo', () => {
    const NextApp = require('./demo/Demo').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      rootEl
    )
  })
}
