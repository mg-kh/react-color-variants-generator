import React, { Component } from 'react'
import ColorPicker from '../components/ColorPicker'
import ColorPallets from '../components/ColorPallets'

class Home extends Component {
  render() {
    return (
      <>
        <section className="py-5 bg-white shadow-md sticky top-0 z-10">
          <div className="container">
            <ColorPicker />
          </div>
        </section>
        <section>
          <ColorPallets />
        </section>
      </>
    )
  }
}

export default Home
