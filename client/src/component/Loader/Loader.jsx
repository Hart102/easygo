import Button from "../Button"
const Loader = () => {
  return (
    <div className='d-flex align-items-center'>
        <Button classes={'spinner-grow spinner-grow-sm border-0 bg-primary'}/>
        <p className='m-0'>Loading...</p>
    </div>
  )
}

export default Loader