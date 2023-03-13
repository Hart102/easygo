import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';
import Home from './pages/Home/Home'
import Dashboard from './pages/UserDashboard/Dashboard';
import SignIn from './pages/UserAuth/SignIn';
import Payment from './pages/Payment/Payment'
import Profile from './pages/UserDashboard/UserProfile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/dashboard' element={<Dashboard />}>
            <Route path='/user/dashboard/profile' element={<Profile />} />
          </Route>
          <Route path='/user/login' element={<SignIn />} />
          <Route path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
