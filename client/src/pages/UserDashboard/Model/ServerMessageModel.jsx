import img from '../../../asserts/images/modelDesign.png'

const ServerMessageModel = () => {
  return (
    <div className='rounded col-md-3 shadow py-0 my-3 px-3' style={{background: '#F5DEB3'}}>
        {/* <img src={img} alt="" /> */}

        <div className='d-flex justify-content-end px-2 py-2'>
            <i className="fa fa-times text-danger py-1 px-2" role='button'></i>
        </div>
        <div className='text-center pb-3'>
            <h3 className='my-2'>Success</h3>
            <p>To get notification about our update please do subscribe.</p>
        </div>
    </div>
  )
}

export default ServerMessageModel