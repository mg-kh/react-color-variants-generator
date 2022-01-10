import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
// import Register from './pages/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthProtectedRoute from './middlewares/AuthProtectedRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <AuthProtectedRoute path="/profile">
            <Profile />
          </AuthProtectedRoute>
          <Route path="/login" exact component={Login}></Route>
          {/* <Route path="/register" exact component={Register}></Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
