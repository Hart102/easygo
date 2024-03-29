import axios from "axios"
import Button from "../../component/Button"
import { addUser } from "../../Redux/Users"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ServerMessageModel from "../../component/Model/ServerMessageModel"
import * as Helper from '../../component/HelperFunction/Helper'

const VerifyMail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const[msg, setMsg] = useState('')
  return (
    <>
    <div className="fixed-top w-100 h-100 d-flex flex-column align-items-center justify-content-center p-3" 
    style={{background: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)'}}>
        <ServerMessageModel 
            Text={msg} 
            Title={'Error'} 
            func={() => Helper.modelAction().closeModel()}
        />
        <div className="col-md-4 bg-white shadow rounded p-5">
            <h5 className="fw-light text-center px-3">A code was sent to your email, please verify.</h5>
            <div className="d-flex align-items-center">
                <input 
                    type="text" 
                    className="form-control border-0 my-4 py-2" 
                    placeholder="Enter Code"
                    autoFocus
                    onChange={(e) => setOtp(e.target.value)}
                />
                <p className="my-0 ms-3" role='button'>Resend</p>
            </div>
            <Button 
                classes={'btn w-100 border btn-dark py-2'} 
                text={'Verify'}
                func={() => {
                    axios.post(
                        'http://localhost:5000/api/confirm_mail', 
                        {otp: otp, email: location.state}).then(res => {
                        res.data !== true ? Helper.modelAction(setMsg).openModel(res.data) : 
                        navigate('/easygo/user/dashboard')}
                    )
                }}
            />
        </div>
    </div>
    </>
  )
}

export default VerifyMail