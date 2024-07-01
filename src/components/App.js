import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import LandingPage from './landingpage';
import LandingPage2 from './landingpage2';
function App() {
  const role = localStorage.getItem('role');
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <LandingPage/>} />
      <Route path="/man+van" element={ <LandingPage2/>} />

      </Routes>
    </Router>

  );
}
export default App;
