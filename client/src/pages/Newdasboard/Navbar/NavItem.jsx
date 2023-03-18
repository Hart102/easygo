import { Link } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons';

const NavItem = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse shadow h-100 pb-5" style={{background: '#353A40'}}>
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.House/>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.File/>Tranction History</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.Cart/>Fund wallet</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.Person/>Buy Data</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.BarChart/>Buy Airtime</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.Layers/>TV Payment</Link>
          </li>
        </ul>
      </div>
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
        <span>Saved reports</span>
        <Link class="link-secondary" aria-label="Add a new report">
          <span data-feather="plus-circle" class="align-text-bottom"></span>
        </Link>
      </h6>
      <ul class="nav flex-column mb-2">
        <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.FileText/>Electric Payment</Link>
        <Link class="nav-link active text-light d-flex align-items-center fs-sm" aria-current="page"><Icon.FileText/>Witdraw payment</Link>
      </ul>
    </nav>
  )
}

export default NavItem