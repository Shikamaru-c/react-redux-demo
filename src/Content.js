import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './libs/connect'

class Content extends Component {

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>react-redux content.</p>
        <ThemeSwitch />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Content)