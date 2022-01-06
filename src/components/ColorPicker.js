import React, { Component } from 'react'
import Values from 'values.js'
import { connect } from 'react-redux'

import { generateColor } from '../store/actions/generateColorAction'

class ColorPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorHexValue: '#7b41b6',
      colorWeight: 5,
    }
  }

  handleColorValue = (e) => {
    this.setState({
      colorHexValue: e.target.value,
    })
  }

  componentDidMount() {
    this.setState({
      colorCode: this.state.colorHexValue,
    })
  }

  generateColor = () => {
    let color = new Values(this.state.colorHexValue)
    let colorVariants = color.all(Number(this.state.colorWeight))
    this.props.generate(colorVariants)
  }

  render() {
    return (
      <>
        <section className="flex flex-col sm:flex-row w-full h-full space-y-2 sm:space-y-0 sm:space-x-2 justify-between">
          <div className="flex space-x-2">
            <div className="w-10 h-10 overflow-hidden shadow-lg shadow-purple-300 rounded-md relative">
              <input
                type="color"
                className="w-12 h-12 absolute -top-1 -left-1 cursor-pointer"
                value={this.state.colorHexValue}
                onChange={this.handleColorValue}
              />
            </div>

            <button
              className="bg-purple-600 hover:bg-purple-500 active:ring-4 ring-purple-300 text-white px-3 rounded-md shadow-lg shadow-purple-300"
              onClick={this.generateColor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 m-auto stroke-2 stroke-white"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>

          <button className="h-10 w-12 rounded-md shadow-lg shadow-purple-400 bg-purple-600 hover:bg-purple-500 flex flex-row items-center px-3 active:ring ring-purple-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 m-auto stroke-white stroke-2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
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
