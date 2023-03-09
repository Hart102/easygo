const Button = ({
  classes,
  background,
  func,
  img,
  text
}) => {
  return (
    <button 
      className={classes} 
      style={{background: background}} 
      onClick={func}
    >
      {img ? <img src={img} className="mx-lg-2 mx-auto" /> 
        : <img src={img} className="mx-lg-0 mx-auto" />}
      {text}
    </button>
  )
}

export default Button