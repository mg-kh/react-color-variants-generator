import React, { Component } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'
import SinglePallets from './SinglePallets'

class ColorPallets extends Component {
  render() {
    let pallets = this.props.colors.map((color) => {
      return <SinglePallets key={uniqid()} color={color} />
    })
    return (
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        {pallets}
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    colors: state.colors,
  }
}

export default connect(mapStateToProps)(ColorPallets)
