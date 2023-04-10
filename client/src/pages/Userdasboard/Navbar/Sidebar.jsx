import { Link } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons';

const NavItem = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse shadow bg-light1 h-100 pb-5 my-5 p-3 fixed-top" style={{height: '100vh', background: '#212D3B'}}>
      <div className="position-sticky pt-3 sidebar-sticky">
        <div className="nav flex-column">
          <Link to='/easygo/admin/dashboard' className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.House/>Dashboard</Link>
          <Link to='/easygo/admin/dashboard/transactions' className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.File/>Tranction History</Link>
          <Link to='/payment' className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.Cart/>Fund wallet</Link>
          <Link className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.Person/>Buy Data</Link>
          <Link className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.BarChart/>Buy Airtime</Link>
          <Link className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.Layers/>TV Payment</Link>
        </div>
      </div>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
        <span>Saved reports</span>
        <Link className="link-secondary" aria-label="Add a new report"><span data-feather="plus-circle" className="align-text-bottom"></span></Link>
      </h6>
      <div className="nav flex-column mb-2">
        <Link className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.FileText/>Electric Payment</Link>
        <Link className="nav-link active text-light d-flex align-items-center my-1" aria-current="page"><Icon.FileText/>Witdraw payment</Link>
      </div>
    </nav>
  )
}

export default NavItem