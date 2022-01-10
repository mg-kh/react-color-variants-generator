import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSidebarShow: false,
    }
  }

  toggleSideBar = () => {
    this.setState({
      isSidebarShow: !this.state.isSidebarShow,
    })
    console.log(this.state.isSidebarShow)
  }

  render() {
    return (
      <div
        className={`fixed w-64 h-screen bg-white font-mono ${
          this.state.isSidebarShow ? '-left-64 ' : ''
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={this.toggleSideBar}
          className="absolute z-10 bg-slate-800 px-3 py-2 hover:bg-slate-700 left-full active:bg-slate-900 peer transition"
        >
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </SvgIcon>
        </button>

        {/* Sidebar heading */}
        <div className="bg-slate-800 py-4 px-4">
          {/* Profile */}
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-red-500"></div>
            <div className="space-y-1">
              <h3 className="text-purple-500 text-sm">Lorem, ipsum dolor.</h3>
              <button className="text-xs bg-white px-3 py-1 rounded-md hover:bg-slate-100 active:ring">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="py-4 space-y-3">
          <button className="hover:bg-slate-100 border-r-4 border-purple-600 w-full py-3 text-slate-800 text-xs text-right pr-4">
            Saved Colors
          </button>
          <button className="hover:bg-slate-100 w-full py-3 text-slate-800 text-xs text-right pr-4">
            Create Color Boards
          </button>
          <button className="hover:bg-slate-100 w-full py-3 text-slate-800 text-xs text-right pr-4">
            Create Gradients
          </button>
          <Link to="/">
            <button className="hover:bg-slate-100 w-full py-3 text-slate-800 text-xs text-right pr-4 flex items-center justify-end">
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-slate-800 w-4"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </SvgIcon>{' '}
              Home
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar
