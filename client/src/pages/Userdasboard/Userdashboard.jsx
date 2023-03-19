import './style.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Navbar/Sidebar'
import OverViewBox from './OverViewBox';
import ActionBox from './ActionBox';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Model from '../../component/Model/Model';
import { useDispatch } from 'react-redux';
import * as Helper from '../../component/HelperFunction/Helper'
import { addUser } from '../../Redux/Users';

const Newdashboard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const[user, setUser] = useState('')
  const[msg, setMsg] = useState('')

  

  useEffect(() => {
    axios.get('http://localhost:5000/api/user_session')
    .then(res => {
      if(res.data) return setUser(res.data[0])
      navigation('/user/login')
    })
  },[])
  return (
    <section style={{background: '#212D3B'}}>
      <Navbar func={() => Helper.modelAction(setMsg).openModel("Are you sure want to logout ?")}/>
      <div className="container-fluid pb-5">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <p className='text-light text-capitalize my-2 h5'>Welcome {user.username}</p>
            <section className="boxes pt-3 pb-2 mb-3">
              <OverViewBox price='N172.08' description='Wallet Balance' 
              text='Fund Wallet' classname='text-white' style='#42A3B8' bg='#3B92A4'/>
              <OverViewBox price='311' description='Total Transactions' 
              text='More Info' classname='text-white' style='#54A945' bg='#4A973F'/>
              <OverViewBox price='N0.00' description='Referal Bonus' text='More Info' style='#FAC232' bg='#E6AE2D'/>
              <OverViewBox price='Statistics' description='Transactions History' 
              text='More Info' classname='text-white' style='#DC4246' bg='#C83B3E'/>
            </section>
            <section className='actions'>
              <ActionBox IconName='fa fa-wifi fa-3x text-light' linkText='Buy Data' linkTo=''/>
              <ActionBox IconName='fa fa-phone fa-3x text-light' linkText='Buy Airtime' linkTo=''/>
              <ActionBox IconName='fa fa-tv fa-3x text-light' linkText='Tv Subscription' linkTo=''/>
              <ActionBox IconName='fa fa-lightbulb fa-3x text-light' linkText='Electricity' linkTo=''/>
            </section>
          </main>
        </div>
      </div>
      <Model 
        text={msg}
        positiveAction={() => dispatch(addUser('logout'))} //Logout function
        negativeAction={(e) => Helper.modelAction(setMsg).closeModel()} //Cancel logout
      />
    </section>
  )
}

export default Newdashboard