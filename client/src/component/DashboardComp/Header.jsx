import AnchorTag from '../AnchorTag'

const DashboardHeader = ({
  action
}) => {
  return (
    <>
      <header 
        className="container px-lg-5" 
        style={{
          width: '800px', 
          maxWidth: "100%", 
          background: '#E3F5FE'
        }}>
        <nav className="d-flex align-items-center justify-content-between p-4">
          <AnchorTag location='/' classes='nav-link m-0 p-0 fw-bold' text='EasyGo.com'/>
          <div className="d-flex align-items-center py-1 px-2 rounded shadow-sm" role='button' onClick={action}>
            <i className="fa fa-sign-out-alt"></i>
            <p className='my-0 ms-1 fw-light'>Logout</p>
          </div>
        </nav>
        <div 
          className="bg-white rounded-top d-flex justify-content-between align-items-center p-4">
          <div>
            <p className="fw-lighter my-0">Wallet Ballance</p>
            <b className="fs-2">N 0.00</b>
          </div>
          <div 
            className=" rounded-top rounded-bottom fs-6 p-3" 
            style={{background: '#EFEBFE'}}>
            <i className="fa fa-plus text-primary"></i>
          </div>
        </div>
      </header>
    </>
  )
}

export default DashboardHeader