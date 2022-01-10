import React, { Component } from 'react'
import Values from 'values.js'
import { connect } from 'react-redux'

import { generateColor } from '../store/actions/generateColorAction'
import { Link } from 'react-router-dom'

class ColorPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorHexValue: '#7b41b6',
      colorWeight: 3,
    }
  }

  handleColorValue = (e) => {
    this.setState(
      {
        colorHexValue: e.target.value,
      },
      () => {
        this.generateColor()
      },
    )
  }

  componentDidMount() {
    this.setState({
      colorCode: this.state.colorHexValue,
    })
    this.generateColor()
  }

  generateColor = () => {
    let color = new Values(this.state.colorHexValue)
    let colorVariants = color.all(Number(this.state.colorWeight))
    this.props.generate(colorVariants)
  }

  render() {
    return (
      <>
        <section className="flex items-center w-full h-full sm:space-y-0 sm:space-x-2 justify-between">
          <div className="flex space-x-2">
            <div className="w-10 h-10 overflow-hidden shadow-lg shadow-purple-300 rounded-md relative">
              <input
                type="color"
                className="w-12 h-12 absolute -top-1 -left-1 cursor-pointer"
                value={this.state.colorHexValue}
                onChange={this.handleColorValue}
              />
            </div>
          </div>

          {/* Login button */}
          <Link to="/login">
            <button className="h-10 rounded-md shadow-lg shadow-purple-400 bg-purple-600 hover:bg-purple-500 px-5 active:ring ring-purple-300 text-white">
              Login
            </button>
          </Link>
        </section>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generate: (colors) => dispatch(generateColor(colors)),
  }
}

export default connect(null, mapDispatchToProps)(ColorPicker)
