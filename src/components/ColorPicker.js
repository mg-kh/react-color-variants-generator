import React, { Component } from 'react'
import Values from 'values.js'
import { connect } from 'react-redux'

import { generateColor } from '../store/actions/generateColorAction'

class ColorPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorHexValue: '#7b41b6',
      colorCode: '',
      colorWeight: 5,
    }
  }

  handleColorValue = (e) => {
    this.setState({
      colorHexValue: e.target.value,
      colorCode: e.target.value,
    })
  }

  handleColorWeight = (e) => {
    this.setState({
      colorWeight: e.target.value,
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
        <section className="flex flex-col sm:flex-row w-full h-full space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="flex space-x-2">
            <input
              type="color"
              className="w-10 h-10"
              value={this.state.colorHexValue}
              onChange={this.handleColorValue}
            />

            <input
              type="text"
              value={this.state.colorCode}
              readOnly
              className="border-2 border-purple-600 h-10 pl-3 ml-1 text-slate-500 outline-none rounded-md"
            />
          </div>

          <div className="flex space-x-2 h-10">
            <select
              onChange={this.handleColorWeight}
              className="rounded-md bg-purple-500 text-white px-1 shadow-lg shadow-purple-300"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>

            <button
              className="bg-purple-600 hover:bg-purple-500 active:ring-4 ring-purple-300 text-white px-3 rounded-md shadow-lg shadow-purple-300"
              onClick={this.generateColor}
            >
              Generate
            </button>
          </div>
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
