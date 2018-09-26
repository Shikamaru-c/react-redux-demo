import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './libs/connect'

class ThemeSwitch extends Component {
  constructor () {
    super()
    this.handleSwitchColor = this.handleSwitchColor.bind(this)
  }

  handleSwitchColor (e) {
    this.props.switchColor(e.target.innerHTML)
  }

  render () {
    return (
      <div onClick={this.handleSwitchColor}>
        <button style={{ color: this.props.themeColor }}>red</button>
        <button style={{ color: this.props.themeColor }}>green</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    themeColor: state.themeColor
  }
}

function mapDispatchToProps (dispatch) {
  return {
    switchColor: color => dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)