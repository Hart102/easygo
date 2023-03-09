import { Link } from 'react-router-dom'

const LinkCom = ({
  location,
  classes,
  text,
  func,
}) => {
  return (
    <Link onClick={func}
      to={location} className={`${classes} text-dark`}>{text}
    </Link>
  )
}

export default LinkCom