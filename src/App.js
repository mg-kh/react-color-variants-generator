import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/profile" exact component={Profile}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
