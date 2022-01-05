import React, { Component } from 'react'
import { rgbToHex } from '../utils/rgbToHex'

class SinglePallets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCopied: false,
    }
  }

  handleCopy = (hexValue) => {
    navigator.clipboard.writeText(hexValue)
    this.setState({
      isCopied: !this.state.isCopied,
    })
  }

  // Rechange isCopied state to false
  handleMouseOver = () => {
    if (this.state.isCopied) {
      this.setState({
        isCopied: false,
      })
    }
  }

  render() {
    const { rgb } = this.props.color
    const hexColor = rgbToHex(...rgb)

    // Conditional Rendering for copied hex value.
    let copiedMessage
    if (this.state.isCopied) {
      copiedMessage = (
        <p className="text-xs font-semibold font-mono text-green-500 hidden group-hover:block">
          "COPIED TO CLIPBOARD"
        </p>
      )
    } else {
      copiedMessage = (
        <p className="text-xs font-semibold font-mono text-red-500 hidden group-hover:block">
          "CLICK TO COPY HEX VALUE"
        </p>
      )
    }

    return (
      <>
        <div
          className="w-full h-52 cursor-pointer group relative"
          style={{ backgroundColor: `rgb(${rgb.join(', ')})` }}
          onClick={() => this.handleCopy(hexColor)}
          onMouseOver={this.handleMouseOver}
        >
          <div className="w-full h-1/3 bottom-0 absolute group-hover:bg-white  flex justify-center items-center transition duration-500 ease-out flex-col">
            <p className="text-xl font-semibold font-mono text-black hidden group-hover:block">
              {hexColor}
            </p>
            {copiedMessage}
          </div>
        </div>
      </>
    )
  }
}

export default SinglePallets
