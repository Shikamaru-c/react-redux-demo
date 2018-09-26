import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './libs/connect'

class Header extends Component {
  render () {
    return (
      <h1 style={{color: this.props.themeColor}}>react-redux demo</h1>
    )
  }
}

function mapStateToProps (state) {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Header)