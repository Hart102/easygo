import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as Helper from '../../component/HelperFunction/Helper'
import Header from './DashboardComp/Header'
import Menu from './DashboardComp/Menu'
import Services from './DashboardComp/Services'
import MenuIcon from './DashboardComp/FooterMenu/MenuIcon'
import Model from '../../component/Model/Model'
import { addUser } from '../../Redux/Users'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const[msg, setMsg] = useState('')
  const[user, setUser] = useState('')

  useEffect(() => {
    // axios.get('http://localhost:5000/api/user_session')
    // .then(res => {
    //   if(res.data) return setUser(res.data[0])
    //   navigation('/user/login')
    // })
  },[])


  return ( //EDEDF5
    <>
    <Header userName={user ? user.username : 'Loading...'} 
      action={() => Helper.modelAction(setMsg).openModel("Are you sure want to logout ?")}
    />
    <section 
      className="container bg-white px-lg-5" 
      style={{
        width: '800px', 
        maxWidth: "100%", 
        background: '#',
        marginBottom: '100px'}}>
        <Menu />
        <main>
          <p className='mx-4 mx-lg-0'>Services</p>
          <div className="d-flex justify-content-around justify-content-lg-between">
            {/* <Services /> */}
            <Link to='https://isquaredata.com/api/education/services'>Data</Link>
            {/* <button onClick={() => {
             
              // var requestOptions = {
              //   method: 'GET',
              //   redirect: 'follow'
              // };
              
              // fetch("https://isquaredata.com/api/education/services/", requestOptions)
              //   .then(response => response.text())
              //   .then(result => console.log(result))
              //   .catch(error => console.log('error', error));
            }} >Data</button> */}





















            <Services />
          </div>
        </main>
        <section className='mt-5'>
          <div className='d-flex justify-content-between px-4 px-lg-0'>
            <p className='fw-light'>Transactions</p>
            <p className='fw-lighter text-primary'>view all</p>
          </div>
          <div className='d-flex justify-content-between px-4 px-lg-0'>
            <p className='fw-light'>Money Sent</p>
            <p className='fw-lighter text-primary'>view all</p>
          </div>
        </section>
        <footer className='fixed-bottom bg-white p-2 mx-auto' 
        style={{
          width: '800px', 
          maxWidth: "100%", 
          background: '#EDEDF5'}}>
          <div className="container d-flex1 d-none justify-content-between px-lg-5">
            <MenuIcon location={'/'} iconName={'fa fa-home'} text={'Home'}/>
            <MenuIcon location={'/'} iconName={'fa fa-circle'} text={'Services'}/>
            <MenuIcon location={'/'} iconName={'fa fa-arrow-right'} text={'Send'}/>
            <MenuIcon location={'/user/dashboard/profile'} iconName={'fa fa-user'} text={'Prifile'}/>
          </div>
        </footer>
    </section>
    <Model 
      text={msg}
      positiveAction={() => dispatch(addUser('logout'))} //Logout function
      negativeAction={(e) => Helper.modelAction(setMsg).closeModel()} //Cancel logout
    />
    <Outlet />
    </>
  )
}

export default Dashboard