import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Login from './login';
// import Dashboard from './dashboard';
// import Signup from './signup';
// import DashboardLayout from './dashboardLayout';
// import DashboardTwo from './dashboardTwo';
// import DashboardAdmin from './dashboardAdmin';
// import DashboardLayoutAddAccount from './dashboardLayoutAddAccount';
// import DashboardLayoutWithdrawals from './dashboardLayoutWithdrawals';
// import DashboardLayoutWithdraw from './dashboardLayoutWithdraw';
// import DashboardLayoutWithdrawalsAdmin from './dashboardLayoutWithdrawalsAdmin';
// import CardThree from './cardThree';
// import Profile from './profile';
import Signup2 from './signup2';
//import DepositUnconfirmTableAdmin from './depositUnconfirmTableAdmin';
import LandingPage from './landingpage';
import LandingPage2 from './landingpage2';
function App() {
  const role = localStorage.getItem('role');
  return (
    <Router>
      <Routes>
      {/* <Route path="/login" element={ <Login/>} />
      <Route path="/dashboard" element={ role==="User" ? <Dashboard/> : <DashboardAdmin/> } />
      <Route path="/signup" element={ <Signup/>} />
      <Route path="/subscribe/:id" element={ <DashboardLayout/>} />
      <Route path="/sub-request" element={role==="User" ?  <DashboardTwo/>: <DepositUnconfirmTableAdmin/>} />
      <Route path="/profile" element={ <Profile/>} />
      <Route path="/:id" element={ <Signup2/>} />
      <Route path="/add-account" element={ <DashboardLayoutAddAccount/>} />
      <Route path="/withdrawals" element={role==="User" ?  <DashboardLayoutWithdrawals/>: <DashboardLayoutWithdrawalsAdmin/> } />
      <Route path="/withdraw" element={ <DashboardLayoutWithdraw/>} />

      <Route path="/admin-dashboard" element={ <DashboardAdmin/>} />
      <Route path="/withdrawals-admin" element={ <DashboardLayoutWithdrawalsAdmin/>} />
      <Route path="/view-withdrawal/:id" element={ <CardThree/>} />
      <Route path="/deposit" element={ <DepositUnconfirmTableAdmin/>} /> */}
      <Route path="/:id" element={ <Signup2/>} />
      <Route path="/" element={ <LandingPage/>} />
      <Route path="/man+van" element={ <LandingPage2/>} />

      </Routes>
    </Router>

  );
}
export default App;
