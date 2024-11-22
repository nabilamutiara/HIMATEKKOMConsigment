import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Login from './pages/login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/about' element={<About/>}></Route>
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '*' element={<Notfound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
