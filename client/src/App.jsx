import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './Redux/Users';

import Home from './pages/Home/Home'
import Dashboard from './pages/UseDashboard/Dashboard';
import SignIn from './pages/UserAuth/SignIn';
import VerifyMail from './pages/UserAuth/VerifyMail';
import Payment from './pages/Payment/Payment'
import Profile from './pages/UseDashboard/UserProfile/Profile';
import Buydata from './Redux/Buydata/Buydata';

import Userdashboard from './pages/Userdasboard/Userdashboard';





function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:5000/api/user_session')
    .then(res => dispatch(addUser(res.data[0])))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/dashboard' element={<Dashboard />}>
            <Route path='/user/dashboard/profile' element={<Profile />} />
          </Route>
          <Route path='/user/login' element={<SignIn />}/>
          <Route path='/easygo/user/verification' element={<VerifyMail />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/easygo/buy/data' element={<Buydata />} />
          <Route path='/easygo/user/dashboard' element={<Userdashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
