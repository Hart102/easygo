const inputField = ({
  label,
  type,
  classname,
  background
}) => {
  return (
    <div className="d-flex flex-column">
      <p className="fw-light m-0">{label}</p>
      <input 
        type={type} 
        className={`form-control border- ${classname}`}
        style={{background: background}}
      />
    </div>
  )
}

export default inputField
// F1F1F5