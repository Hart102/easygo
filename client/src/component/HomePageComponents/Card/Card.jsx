import AnchorTag from '../../AnchorTag'

const Card = ({
  img,
  title,
  text,
  linkText
}) => {
  return (
    <div 
      className="cards col-lg-5 p-4 my-3 mx-lg-2 rounded-top rounded-bottom shadow-sm fw-light" 
      style={{background: '#F9F9F9'}} role="button">  
      <div className="col-2 mx-auto mx-lg-0">
        <div 
          className={`p-3 rounded-circle fa ${img}`} 
          style={{background: '#E3F5FE'}}>
        </div>
      </div>
      <div className="fs-4 fw-bold my-3">
          {title}
      </div>
      <p>{text}</p>
      <div 
          className="d-flex align-items-center 
          justify-content-lg-start justify-content-center">
          <i className="fa fa-arrow-right"></i>
          <AnchorTag 
            location={'/user/login'} 
            classes='text-decoration-none text-dark fw-bold my-5 mx-2' 
            text={linkText}
          />
      </div>
    </div>
  )
}

export default Card