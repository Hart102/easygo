import { Link } from "react-router-dom"
const ActionBox = ({
    IconName, linkTo, linkText}) => {
  return (
    <div className='d-flex flex-column text-center bg-transparent1 shadow rounded py-3' style={{background: 'rgb(33,45,59)'}}>
        <i className={IconName}></i>
        <Link to={linkTo} className='nav-link text-light my-4'>{linkText}</Link>
    </div>
)}
export default ActionBox
