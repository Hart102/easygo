import axios from "axios"
import Button from "../../component/Button"
import { addUser } from "../../Redux/Users"

const VerifyMail = () => {
  return (
    <>
    <div className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3" 
    style={{background: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)'}}>
        <div className="col-md-4 bg-white shadow rounded p-5">
            <h4 className="fw-light text-center">A code was sent to your email, please verify.</h4>
            <input type="text" 
                className="form-control my-4 py-2" 
                placeholder="Enter Code"
                autoFocus
            />
            <Button 
                classes={'btn w-100 border btn-dark py-2'} 
                text={'Verify'}
                func={() => {
                    axios.post('http://localhost:5000/api/sign_up', {
                        note: 'verify email'
                    }).then(res => res.data)
                }}
            />
        </div>
    </div>
    </>
  )
}

export default VerifyMail