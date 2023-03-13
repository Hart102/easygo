import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import * as Helper from '../../component/HelperFunction/Helper'
import Header from './DashboardComp/Header'
import Menu from './DashboardComp/Menu'
import Services from './DashboardComp/Services'
import MenuIcon from './DashboardComp/FooterMenu/MenuIcon'
import Model from './Model/Model'
import { Data } from '../../component/DataManager/PostData'
// import Profile from './UserProfile/Profile'

const Dashboard = () => {
  const navigation = useNavigate()
  const[msg, setMsg] = useState('')
  const[user, setUser] = useState('')

  useEffect(() => {
    Helper.session_verifier().then(res => res[0] ? 
      setUser(res[0]) : navigation('/user/login'))
  },[])

  return ( //EDEDF5
    <>
    {/* <Header /> */}
    <Header userName={user.username} 
      action={() => Helper.modelAction(setMsg).openModel("Are you sure want to logout ?")}
    />
    <section 
      className="container bg-white px-lg-5" 
      style={{
        width: '800px', 
        maxWidth: "100%", 
        background: '#',
        marginBottom: '100px'
      }}>
        <Menu />
        <main>
          <p className='mx-4 mx-lg-0'>Services</p>
          <div className="d-flex justify-content-around justify-content-lg-between">
            <Services />
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
          background: '#EDEDF5'
        }}>
          <div className="container d-flex1 d-none justify-content-between px-lg-5">
            <MenuIcon 
              location={'/'} 
              iconName={'fa fa-home'} 
              text={'Home'}
            />
            <MenuIcon 
              location={'/'} 
              iconName={'fa fa-circle'}
              text={'Services'}
            />
            <MenuIcon 
              location={'/'} 
              iconName={'fa fa-arrow-right'}
              text={'Send'}
            />
            <MenuIcon 
              location={'/user/dashboard/profile'} 
              iconName={'fa fa-user'} 
              text={'Prifile'}
            />
          </div>
        </footer>
    </section>
    <Model 
      text={msg}
      positiveAction={(e) => {
        Data().SendData('http://localhost:4000/api/user_logout')
        window.location.reload()
      }}
      negativeAction={(e) => Helper.modelAction(setMsg).closeModel()}
    />
    {/* <Profile /> */}
    <Outlet />
    </>
  )
}

export default Dashboard