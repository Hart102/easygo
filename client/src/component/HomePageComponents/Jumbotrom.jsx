import { useNavigate } from "react-router-dom"
import Button from "../Button"
import * as Helper from '../HelperFunction/Helper'
import { PaystackHook } from "../../pages/Payment/PaymentConfig"

const Jumbotrom = () => {
    const navigation = useNavigate()
  return (
    <>
    <section className="py-lg-5">
        <div 
            className="container d-lg-flex d-md-flex flex-lg-row flex-md-row d-flex flex-column-reverse align-items-center 
            justify-content-between py-5 text-lg-start text-center">
            <div className="col-md-6 my-lg-5">
                <h1 className="fw-bolder display-2">Let Us Be Your VTU Vendor.</h1>
                <p className="my-4 fw-light">Easyon is a value added service organization that offers instant recharge of airtime and data bundle.</p>
                <div className="d-flex justify-content-center 
                    justify-content-lg-start align-items-center 
                    flex-lg-row flex-column my-lg-5 my-3">
                    <Button 
                        classes={'text-white fw-bold bg-dark border  p-lg-3 p-2'} 
                        text={'Create free account'} 
                        func={() => navigation('/user/login')}
                    />
                    <Button 
                        classes={'btn d-flex align-items-center border p-lg-3 mx-2 my-lg-0 my-4'} 
                        img={'../images/google-icon.svg'} 
                        text={'Get on Android'}
                    />
                </div>
            </div>
            <div className="col-lg-5 col-xl-5 col-md-5 col-10 d-flex justify-content-center px-lg-0 px-5 my-lg-0 my-5">
                <img src="./images/seller.png" className="img-fluid" />
            </div>
        </div>
    </section>
    {/*---------Security---------*/}
    <section className="py-lg-4">
        <div className="container my-lg-0 px-4">
            <div 
                className="col-md-9 mx-auto d-lg-flex 
                justify-content-center text-lg-start text-center">
                <div className="col-lg-1 col-2 mx-auto my-4 mx-lg-0">
                    <img 
                        src="./images/security.png" 
                        className="img-fluid" 
                    />
                </div>
                <div className="mx-lg-5 px-lg-0 px-lg-4">
                    <h1 className="fw-bold fs-1">Instant Wallet Funding</h1>
                    <p className="fw-light">Yes, we got you covered. Enjoy easy, fast and instant funding of your wallet after payment. You will receive your personal easyon bank account details for instant funding of wallet after registration. Any payment made into the bank account gets your wallet credited automatically. </p>
                    <div className="d-flex align-items-baseline justify-content-center justify-content-lg-start">
                        <Button 
                            classes={'text-decoration-none fw-bold px-2 py-1 btn border'} 
                            text={'Fund your wallet'}
                            func={() => {
                                Helper.session_verifier().then(res => res ? useNavigate('/user/login') : useNavigate('/user/login'))
                            }}
                        />
                        <i className="fa fa-arrow-right mx-2"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Jumbotrom

// /user/login"