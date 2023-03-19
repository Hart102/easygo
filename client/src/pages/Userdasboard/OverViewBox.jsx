import { Link } from "react-router-dom"
const OverViewBox = ({
  price, description, text, classname, style, bg
}) => {
  return (
    <div className="rounded position-relative overflow-hidden px-0" style={{background: style}}>
        <div className='p-3'>
          <h2 className={`fw-bolder ${classname}`}>{price}</h2>
          <p className='text-light fw-light'>{description}</p>
        </div>
        <Link to={'/payment'} className='nav-link d-flex align-items-center justify-content-center py-3' style={{background: bg}}>
          <p className='nav-p text-light fw-light my-0'>{text}</p>
          <i className='fa fa-arrow-right ms-1 bg-white rounded-circle text-primary p-1'></i>
        </Link>
    </div>
  )
}

export default OverViewBox