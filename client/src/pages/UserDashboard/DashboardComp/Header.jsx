import { useState } from 'react'
import AnchorTag from '../../../component/AnchorTag'
import Button from '../../../component/Button'
import * as Helper from '../../../component/HelperFunction/Helper'


const DashboardHeader = ({
  userName,
  action
}) => {
  const[menuAction, setMenuAction] = useState(false)
  return (
    <>
    {/* <!------mobile navbar------> */}
    <nav className="fixed-top top-0 bg-white py-2">
        <div className="container px-4">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder">EasyGoData</h3>
                <span className="d-flex">
                  <span className="icon-hamburger col-12" 
                    role="button" onClick={() => menuAction ? setMenuAction(false): setMenuAction(true)}>
                      <i className={menuAction ? `fa fa-times fa-2x` : `fa fa-bars`} style={{fontSize: '1.5em'}}></i>
                  </span>
                </span>
            </div>
            
            <div className={menuAction 
            ? "position-absolute end-0 text-center my-3 col-md-3 mx-auto py-4" 
            : "menu d-none border text-center my-5"}>
                <AnchorTag 
                  classes={'nav-link'} 
                  location={'/'} text={'Home'} 
                  func={() => setMenuAction(false)}
                />
                <AnchorTag 
                  classes={'nav-link'} 
                  location={'/user/dashboard/profile'} 
                  text={'Profile'} func={() => setMenuAction(false)}
                />
            </div>
        </div>
    </nav>

      <header 
        className="container px-lg-5 mt-5 bg-white shadow" 
        style={{
          width: '800px', 
          maxWidth: "100%", 
          background: ''
        }}>
        <nav className="d-flex align-items-center justify-content-between p-4">
          <p className='text-capitalize my-0'>Welcome {userName}</p>
          <Button 
            classes={'btn py-1 shadow bg-primary text-light fw-bold rounded-pill'} 
            text={'LOGOUT'} func={action}
          />
        </nav>
        <div 
          className="bg-white rounded-top d-flex justify-content-between align-items-center p-4">
          <div>
            <div className="d-flex align-items-center">
              <p 
                className="fw-lighter my-0 ms-2" 
              >Wallet Ballance</p>
              <i 
              className="fa fa-eye text- ms-2" 
              onClick={() => Helper.hideBalance('.balance')} 
              role='button'>
              </i>
            </div>
            <input 
              type={'password'} 
              className='balance border-0 fw-bold fs-3' 
              value={'N 0.00'} 
              disabled={true}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default DashboardHeader