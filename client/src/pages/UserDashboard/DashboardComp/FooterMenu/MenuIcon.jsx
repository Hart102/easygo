import { Link } from "react-router-dom"
const MenuIcon = ({
  location,
  iconName,
  text
}) => {
  return (
    <Link to={location} className='nav-link text-dark text-center m-0 p-1'>
      <i className={iconName}></i>
      <p className="fw-light m-0">{text}</p>
    </Link>
  )
}

export default MenuIcon