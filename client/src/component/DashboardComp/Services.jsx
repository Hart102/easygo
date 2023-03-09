import Button from "../Button"

const Services = ({
    text,
    btnText,
    background
}) => {
  return (
    <div 
        className='py-4 px-3 text-center fw-light text-wrap 
        rounded-top rounded-bottom shadow-sm col-md-6 me-2' role="button"
        style={{background: '#E3F5FE'}}>
        <p>{text}</p>
        <Button 
          classes="btn py-1" 
          text={btnText} 
          background={background}
        />
    </div>
  )
}

export default Services