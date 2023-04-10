import '../../pages/Userdasboard/style.css'
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from '../Userdasboard/Navbar/Navbar';
import Sidebar from '../../pages/Userdasboard/Navbar/Sidebar'
import OverViewBox from '../Userdasboard/OverViewBox';
import Model from '../../component/Model/Model';
import { useDispatch } from 'react-redux';
import * as Helper from '../../component/HelperFunction/Helper'
import { addUser } from '../../Redux/Users';


const AdminDashboard = () => {
  const dispatch = useDispatch()
  const[user, setUser] = useState('')
  const[msg, setMsg] = useState('')


  return (//212D3B
    <section style={{background: '#212D3B', minHeight: '100vh'}}>
      <Navbar func={() => Helper.modelAction(setMsg).openModel("Are you sure want to logout ?")}/>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <p className='text-light text-capitalize my-2 h5'>Welcome {user.username}</p>
            <section className="boxes pt-3 pb-2 mb-3">
              <OverViewBox 
                price='N172.08' 
                description='Wallet Balance' 
                text='Fund Wallet' 
                classname='text-white' style='#42A3B8' bg='#3B92A4'
              />
              <OverViewBox 
                price='311' 
                description='Total Transactions' 
                text='More Info' classname='text-white' 
                style='#54A945' bg='#4A973F'
              />
              <OverViewBox 
                price='N0.00' 
                description='Referal Bonus' 
                text='More Info' style='#FAC232' bg='#E6AE2D'
              />
              <OverViewBox 
                price='Statistics' 
                description='Transactions History' text='More Info' 
                classname='text-white' style='#DC4246' bg='#C83B3E'
              />
            </section>
            <p className='text-light text-capitalize my-3 h5'>Manage site</p>
          </main>
        </div>
      </div>
      <Model 
        text={msg}
        positiveAction={() => dispatch(addUser('logout'))} //Logout function
        negativeAction={(e) => Helper.modelAction(setMsg).closeModel()} //Cancel logout
      />
      <Outlet />
    </section>
  )
}

export default AdminDashboard