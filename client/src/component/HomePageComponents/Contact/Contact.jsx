import AddressComponent from "./AddressComponent"
import InputField from "./InputField"
import Button from "../../Button"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <section className="my-4" id="contact">
        <div className="container py-5 px-lg-0 px-5">
            <h2 className="text-center display- fw-light mb-5">Keep in Touch</h2>
            <div className="row justify-content-between">
                <p className="fw-bold m-0">Contact Us:</p>
                <p className="fw-light mb-5">Please, feel free to contact us, if you have any request or complaints.</p>
                <div className="col-md-5">
                    <AddressComponent 
                        icon="fa fa-envelope" 
                        label="EMAIL" 
                        email="easygohelpcenter@gmail.com"
                    />
                    <AddressComponent 
                        icon="fab fa-twitter" 
                        label="TWITTER" 
                        email="@EasyGodata"
                    />
                </div>
                <form className="col-md-6 p-0">
                    <div className="d-lg-flex justify-content-between">
                        <InputField 
                            type='text' 
                            label='Name' 
                            classname={'border-0'}
                            background={'#F1F1F5'} 
                        />
                        <InputField 
                            type='email' 
                            label='Email' 
                            classname={'border-0'}
                            background={'#F1F1F5'}
                        />
                    </div>
                    <p className="text-left fw-light mt-3 mb-0">Message</p>
                    <textarea 
                        className="border-0 rounded p-3 w-100" 
                        style={{background: '#F1F1F5', outline: 'none'}}>
                    </textarea>
                    <Button 
                        classes="btn w-100 mt-2 border" 
                        text="Send Now!"
                    />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact