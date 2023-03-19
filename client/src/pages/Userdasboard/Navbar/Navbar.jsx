import Logo from "../../../component/Logo/Logo"
import { Link } from "react-router-dom"
import Button from "../../../component/Button"
const Navbar = ({func}) => {
  return (
    <header className="navbar navbar-dark sticky-top fixed-top bg-white1 shadow flex-md-nowrap py-0 px-4" style={{background: '#212D3B'}}>
      <div className="d-flex align-items-center justify-content-between col-lg-2 col-12">
        <Link to='/' className="navbar-brand text-light col-md-3 col-lg-2 me-0  py- fs-4 h4 border-right "><Logo/></Link>
        <button className="navbar-toggler border-0 d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars text-light" style={{fontSize: '1.5em'}}></i>
        </button>
      </div>
      <input type="text" className="d-lg-block d-none form-control form-control-dark text-light bg-transparent w-100 rounded-0 border-0 mx-3" placeholder="Search" />
      <div className="navbar-nav text-light d-lg-block d-none" aria-label="Search">
        <div className="nav-item text-nowrap">
          <button className="btn text-light shadow rounded px-3" style={{background: '#DC4246'}} onClick={func}>Sign out</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar 