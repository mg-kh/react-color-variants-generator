import React, { Component } from 'react'

class SaveButton extends Component {
  render() {
    return (
      <>
        <div className="w-1/2 h-full absolute hidden group-hover:block right-0">
          <button className="w-full h-full bg-white hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bookmark"
              className="stroke-slate-700 w-5 m-auto"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </>
    )
  }
}

export default SaveButton
