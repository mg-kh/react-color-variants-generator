import './App.css'
import ColorPicker from './components/ColorPicker'
import ColorPallets from './components/ColorPallets'

function App() {
  return (
    <div className="App">
      <section className="py-5 bg-white shadow-md sticky top-0 z-10">
        <div className="container">
          <ColorPicker />
        </div>
      </section>
      <section>
        <ColorPallets />
      </section>
    </div>
  )
}

export default App
