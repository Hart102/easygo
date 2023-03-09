import AnchorTag from '../../AnchorTag'

const RowTemplate = ({
  img,
  title,
  text,
  linkText,
  classname,
}) => {
  return (
    <section className="py-lg-5" id='contact'>
    <div className="container my-4">
      <div 
        className={`col-md-12 mx-auto d-lg-flex d-md-flex justify-content-center
        align-items-center text-center text-lg-start ${classname}`}>
        <div className="col-lg-5 col-md-6 mx-auto 
          px-5 mx-lg-0 my-lg-0 my-5">
          <img src={img} className="img-fluid" />
        </div>
        <div className="col-md-6 mx-lg-5 px-lg-0 px-3">
          <h2 className="fw-bolder display-6">{title}</h2>
          <p className="my-3 fw-light">{text}</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RowTemplate