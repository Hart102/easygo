import '.././Newdasboard/style.css'
import Navbar from './Navbar/Navbar'
import NavItem from './Navbar/NavItem'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import Logo from '../../component/Logo/Logo';
const Newdashboard = () => {
  return (
    <section>
      <Navbar />
      <div class="container-fluid">
        <div className="row">
          <NavItem />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h4">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar" class="align-text-bottom"></span>
                  This week
                </button>
              </div>
            </div>

            {/* Start Design here! */}
          </main>
        </div>
      </div>
    </section>
  )
}

export default Newdashboard