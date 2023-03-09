const Action = ({
    classname,
    background,
    text
}) => {
  return (
    <div className="my-4" role="button">
      <div 
        className={`px-2 py-2 rounded-circle text-center text-white mx-auto`} 
        style={{background: background, width: '40px'}}>
        <i className={classname}></i>
      </div>
      <p className="fw-light text-center my-2">{text}</p>
    </div>
  )
}

export default Action