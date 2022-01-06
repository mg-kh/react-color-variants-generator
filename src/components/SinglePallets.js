import React, { Component } from 'react'
import { rgbToHex } from '../utils/rgbToHex'
import SaveButton from './SaveButton'

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
    setTimeout(() => {
      this.setState({
        isCopied: !this.state.isCopied,
      })
    }, 1000)
  }

  render() {
    const { rgb } = this.props.color
    const hexColor = rgbToHex(...rgb)

    // Conditional Rendering for copied hex value.
    let copiedIcon
    if (this.state.isCopied) {
      copiedIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-check"
          className="stroke-green-700 w-5 m-auto"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    } else {
      copiedIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-copy"
          className="stroke-slate-700 w-5 m-auto"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      )
    }

    return (
      <>
        <div
          className="w-full h-52 cursor-pointer group relative"
          style={{ backgroundColor: `rgb(${rgb.join(', ')})` }}
        >
          <div className="w-full h-1/4 bottom-0 absolute flex justify-center items-center flex-col">
            <div className="w-1/2 h-full absolute hidden group-hover:block left-0 border-r">
              <button
                onClick={() => this.handleCopy(hexColor)}
                className="w-full h-full bg-white hover:bg-gray-100"
              >
                {copiedIcon}
              </button>
            </div>
            <SaveButton />
          </div>
        </div>
      </>
    )
  }
}

export default SinglePallets
