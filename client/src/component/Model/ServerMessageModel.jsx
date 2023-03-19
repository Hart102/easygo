const ServerMessageModel = ({
  Title, Text, func
}) => {
  return (
    <div 
     className={'model d-none rounded col-lg-3 col-xlg-3 col-9 shadow py-0 my-3 px-3'} style={{background: '#F5DEB3'}}>
      <div className='d-flex justify-content-end px-1 py-2'>
        <i className="fa fa-times text-danger py-1 px-2" role='button'
        onClick={func}></i>
      </div>
      <div className='text-center pb-3'>
        <h3 className='my-2'>{Title}</h3>
        <p>{Text}</p>
      </div>
    </div>
  )
}

export default ServerMessageModel