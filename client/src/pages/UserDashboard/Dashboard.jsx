import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Helper from '../../component/HelperFunction/Helper'
import Header from '../../component/DashboardComp/Header'
import Menu from '../../component/DashboardComp/Menu'
import Services from '../../component/DashboardComp/Services'
import MenuIcon from '../../component/DashboardComp/FooterMenu/MenuIcon'
import Model from './Model/Model'
import { Data } from '../../component/DataManager/PostData'

const Dashboard = () => {
  const navigation = useNavigate()
  const[msg, setMsg] = useState('')

  useEffect(() => {
    Helper.session_verifier().then(res => res[0] ? 
      navigation('/user/dashboard') : navigation('/user/login'))
  },[])

  return ( //EDEDF5
    <>
    <Header action={() => Helper.modelAction(setMsg).openModel("Are you sure want to logout ?")}/>
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
            <Services 
              text={'Airtime Recharge'} 
              btnText={'BUY NOW'} 
              background={'#F8B431'}
            />
            <Services 
              text={'Data Services'} 
              btnText={'BUY NOW'} 
              background={'#66CD71'}
            />
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
          <div className="container d-flex justify-content-between px-lg-5">
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
              location={'/'} 
              iconName={'fa fa-user'} 
              text={'Prifile'}
            />
          </div>
        </footer>
    </section>
    <Model 
      text={msg}
      positiveAction={(e) => {
        Data().SendData('http://localhost:5000/api/user_logout')
        window.location.reload()
      }}
      negativeAction={(e) => Helper.modelAction(setMsg).closeModel()}
    />
    </>
  )
}

export default Dashboard