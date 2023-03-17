import Button from "../../../component/Button"

const Services = ({
    text,
    btnText,
    background
}) => { //E3F5FE
  return (
    <Button  
      background={'#5FC797'}
      classes={'border-0 py-4 px-3 text-center fw-light text-white text-wrap rounded-top rounded-bottom shadow-sm col-md-6 me-2'}
      text={'Airtime Recharge'}
    />

    // <div 
    //     className='py-4 px-3 text-center fw-light text-wrap 
    //     rounded-top rounded-bottom shadow-sm col-md-6 me-2' role="button"
    //     style={{background: '#'}}>
    //     <p>{text}</p>
    //     <Button 
    //       classes="btn py-1" 
    //       text={btnText} 
    //       background={background}
    //     />
    // </div>
  )
}

export default Services