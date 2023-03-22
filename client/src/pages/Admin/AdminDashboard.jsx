import '../../pages/Userdasboard/style.css'
import Navbar from '../Userdasboard/Navbar/Navbar';
import Sidebar from '../../pages/Userdasboard/Navbar/Sidebar'
import OverViewBox from '../Userdasboard/OverViewBox';
import ActionBox from '../Userdasboard/ActionBox';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Model from '../../component/Model/Model';
import { useDispatch } from 'react-redux';
import * as Helper from '../../component/HelperFunction/Helper'
import { addUser } from '../../Redux/Users';

import design from '../../asserts/images/design.webp'
import color from '../../asserts/images/color4.jpg'
import Button from '../../component/Button';



const AdminDashboard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const[user, setUser] = useState('')
    const[msg, setMsg] = useState('')

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

            <section className='p-3'>
                <b className='text-light my-5'>Manage Site</b>
                <table className='rounded' style={{background: '1linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'}}>
                    <thead>
                        <tr className='col-md-12 bg-dark'>
                            <th className='col-md-4 p-3 text-light'>Name</th>
                            <th className='col-md-4 p-3 text-light'>Email</th>
                            <th className='col-md-4 p-3 text-light'>phone</th>
                            <th className='col-md-4 p-3 text-light'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='shadow-sm'>
                        <tr className='col-md-12'>
                            <td className='col-md-4 p-3 text-light fw-light'>Hart C Justman</td>
                            <td className='col-md-4 p-3 text-light fw-light'>hartjust553@gmail.com</td>
                            <td className='col-md-4 p-3 text-light fw-light'>0901122334</td>
                            <td  className='col-md-4 p-3 d-flex'>
                                <Button classes='btn rounded text-light mx-1' text='view' background='#C83B3E'/>
                                <Button classes='btn rounded text-light' text='Block' background='#4A973F'/>
                            </td>
                        </tr>
                        <tr className='col-md-12'>
                            <td className='col-md-4 p-3 text-light fw-light'>Hart C Justman</td>
                            <td className='col-md-4 p-3 text-light fw-light'>hartjust553@gmail.com</td>
                            <td className='col-md-4 p-3 text-light fw-light'>0901122334</td>
                            <td  className='col-md-4 p-3 d-flex'>
                                <Button classes='btn rounded text-light mx-1' text='view' background='#C83B3E'/>
                                <Button classes='btn rounded text-light' text='Block' background='#4A973F'/>
                            </td>
                        </tr>
                        <tr className='col-md-12'>
                            <td className='col-md-4 p-3 text-light fw-lighter'>Hart C Justman</td>
                            <td className='col-md-4 p-3 text-light fw-lighter'>hartjust553@gmail.com</td>
                            <td className='col-md-4 p-3 text-light fw-lighter'>0901122334</td>
                            <td  className='col-md-4 p-3 d-flex'>
                                <Button classes='btn rounded text-light mx-1' text='view' background='#C83B3E'/>
                                <Button classes='btn rounded text-light' text='Block' background='#4A973F'/>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </section>
          </main>
        </div>
      </div>
      <Model 
        text={msg}
        positiveAction={() => dispatch(addUser('logout'))} //Logout function
        negativeAction={(e) => Helper.modelAction(setMsg).closeModel()} //Cancel logout
      />
        {/* <img src={color} className='mx-auto' /> */}

    </section>
  )
}

export default AdminDashboard