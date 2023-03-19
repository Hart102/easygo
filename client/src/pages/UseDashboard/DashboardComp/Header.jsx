import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../component/Logo/Logo'
import Button from '../../../component/Button'
import * as Helper from '../../../component/HelperFunction/Helper'


const DashboardHeader = ({
  userName,
  action
}) => {
  const[menuAction, setMenuAction] = useState(false)
  return (
    <>
      <header 
        className="px-lg- mt-lg-5 mx-auto rounded" 
        style={{width: '800px', maxWidth: "100%", background: '#5FC797'}}>
        <nav className="d-flex align-items-center justify-content-between p-lg-4 px-4 py-0">
          <div>
            <Logo size={'text-white'}/>
            <p className='text-capitalize text-white my-0'>Welcome {userName}</p>
          </div>
          <div className='position-relative d-flex justify-content-end w-50'>
            <span className="icon-hamburger" 
              role="button" onClick={() => menuAction ? setMenuAction(false): setMenuAction(true)}>
                <i className={menuAction ? `fa fa-times fa-2x text-white ` : `fa fa-bars text-white `} style={{fontSize: '1.5em'}}></i>
            </span>
            <div className={menuAction 
              ? "position-absolute text-center p-4 end-0 top-100 rounded w-100" 
              : "menu d-none"} style={{background: '#3C7E3D'}}>
                <Link to='/' className='nav-link text-white' onClick={() => setMenuAction(false)}>Home</Link>
                <Link to='/user/dashboard/profile' className='nav-link text-white' onClick={() => setMenuAction(false)}>Profile</Link>
                <Link to='/user/dashboard' className='nav-link text-white' onClick={() => setMenuAction(false)}>Dashboard</Link>
                <Button classes={'btn bg-white py-1 shadow-sm fw-bold rounded-pill'} text={'LOGOUT'} func={action}/>
            </div>
          </div>
        </nav>
        <div 
          className="d-flex justify-content-between align-items-center p-4 w-50">
          <div>
            <div className="d-flex align-items-center text-white">
              <p className="fw-lighter text-white my-0">Wallet Ballance</p>
              <i className="fa fa-eye ms-2" onClick={() => Helper.hideBalance('.balance')} role='button'></i>
            </div>
            <input type={'password'} className='balance bg-transparent text-white  border-0 fw-bold fs-3' value={'N 0.00'} disabled={true}/>
          </div>
        </div>
      </header>
    </>
  )
}

export default DashboardHeader