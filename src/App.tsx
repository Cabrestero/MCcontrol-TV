import { Navbar } from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

function App() {

  return <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  </Router >
}

export default App
