const AddressComponent = ({
  icon,
  label,
  email
}) => {
  return (
    <div className="d-flex align-items-center my-3">
        <i className={`${icon}`}></i>
        <div className="mx-4">
            <label className="fw-light">{label}</label>
            <p className="fw-light">{email}</p>
        </div>
    </div>
  )
}

export default AddressComponent