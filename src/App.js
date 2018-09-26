import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
import createStore from './libs/redux'
import Provider from './libs/Provider'

const themeReducer = (state = {themeColor: 'red'}, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    )
  }
}

export default App;
