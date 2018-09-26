import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  getChildContext () {
    return { store: this.props.store }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Provider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.any
}

Provider.childContextTypes = {
  store: PropTypes.object
}

export default Provider