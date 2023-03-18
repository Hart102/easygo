import Logo from "../../../component/Logo/Logo"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark1 bg-white flex-md-nowrap p-0 shadow-sm">
      <Link className="navbar-brand text-dark col-md-3 col-lg-2 me-0 px-3 py-2 fs-4 display-6" style={{background: '#353A40'}}><Logo /></Link>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input type="text" className="form-control form-control-dark bg-transparent w-100 rounded-0 border-0" placeholder="Search" />
      <div className="navbar-nav" aria-label="Search">
        <div className="nav-item text-nowrap">
          <Link className="nav-link px-3">Sign out</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar