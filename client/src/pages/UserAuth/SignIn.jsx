import './formStyle.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import Button from '../../component/Button'
import SocialIcons from './SocialIcons'
import { Data } from '../../component/DataManager/PostData'
import axios from 'axios'
import * as Helper from '../../component/HelperFunction/Helper'

const SignIn = () => {    
  axios.defaults.withCredentials = true
  // const userSession = useSelector((state) => state.users.value) 
  const navigation = useNavigate()
  const [signup, setSignup] = useState(false)

  //------Sign-up components------
  const[signUpMsg, setSignUpMsg] = useState('')
  const[phone, setPhone] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  //--------Login components--------
  const[serverMsg, setServerMsg] = useState('')
  const[phone_number, setPhone_number] = useState('')
  const[user_password, setPwd] = useState('')

  useEffect(() => {
    Helper.session_verifier().then(res => {
      res[0] ? navigation('/user/dashboard') : navigation('/user/login')
    })
  },[])

  return (
    <>
    <Navbar 
      signInAction={() => setSignup(false)} 
      signUpAction={() => setSignup(true)}
    />
    <div className={
      signup ? 
      "wrapper login-container sign-up-mode" : 
      "wrapper login-container"}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="user" className="sign-in-form mb-5">
            <h2 className="title1 h5 fw-light">Sign in</h2>
            <p className='fw-light text-danger text-center'>{serverMsg}</p>
            <div className="input-field border bg-transparent mb-lg-4">
              <i className="fas fa-user"></i>
              <input 
                type="tel" 
                placeholder="phone" 
                onChange={(e) => {
                  setServerMsg('')
                  setPhone_number(e.target.value)
                }}
              />
            </div>
            <div className="input-field border bg-transparent">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {
                  setServerMsg('')
                  setPwd(e.target.value)
                }}
              />
            </div>
            <Button 
              classes={phone_number && user_password ? 'btn btn-dark px-lg-5 my-3 rounded-pill' : 'd-none'} 
              text={'Login'}
              func={(e) => {
                e.preventDefault()
                if(Helper.verify_phone(phone_number) !== true){
                  setServerMsg(Helper.verify_phone(phone_number))
                }else{
                  Data().SendData('http://localhost:5000/api/user_login', 
                  {phone_number, user_password}).then(res => {
                    if(res.data !== true) return setServerMsg(Helper.filter_response(res.data).replace(/\_/g, " "))
                    setPhone_number('')
                    setPwd('')
                    navigation('/user/dashboard')
                    Helper.multiSelector('input').forEach(ele => ele.value ='')
                  })
                }
              }}
            />
            <SocialIcons />
          </form>

          {/*------Sign up Form ------*/}
          <form action="/user" className="sign-up-form mt-5">
            <h2 className="title1 fw-light h5">Sign up</h2>
            <p className='fw-light text-danger text-center'>{signUpMsg}</p>
            <div className="input-field bg-transparent border">
              <i className="fas fa-user"></i>
              <input
                type="tel" 
                placeholder="Phone" 
                onChange={(e) => {
                  setSignUpMsg(''); 
                  setPhone(e.target.value)
                }}
              />
            </div>
            <div className="input-field bg-transparent border">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Email" 
                onChange={(e) => {
                  setSignUpMsg(''); 
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="input-field bg-transparent border">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {
                  setSignUpMsg(''); 
                  setPassword(e.target.value)
                }}
              />
            </div>
            <Button 
              classes={phone && email && password ? 'btn btn-dark px-lg-5 my-3 rounded-pill' : 'd-none'} 
              text={'Sign up'} 
              func={(e) => {
              e.preventDefault()
              if(Helper.verify_phone(phone) !== true){
                setSignUpMsg(Helper.verify_phone(phone))
              }else{
                Data().SendData('http://localhost:5000/api/sign_up', 
                {phone, email, password}).then(res => {
                  if(res.data !== true) return setSignUpMsg(res.data.replace(/\"/g, " "))
                  setPhone('')
                  setEmail('')
                  setPassword('')
                  navigation('/user/dashboard')
                  Helper.multiSelector('input').forEach(ele => ele.value ='')
                })
              }
            }}/>
            <SocialIcons />
          </form>
        </div>
      </div>
      <div className="panels-container py-4">
        <div className="panel left-panel">
          <div className="content col-md-9">
            <h5>New here ?</h5>
            <p className='fw-light'>
              Create an account today, its easy and simple. You are just few clicks away
            </p>
            <Button 
              classes={'btn bg-white shadow text-dark rounded-pill px-5'} 
              text={'Sign up'}
              background={''}
              func={() => signup ? setSignup(false) : setSignup(true)}
            />
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content col-md-9">
            <h5>One of us ?</h5>
            <p className='fw-light'>
              Login to unlock our amazing features. You can Login using your email or phone number.
            </p>
            <Button 
              classes={'btn bg-white shadow text-dark rounded-pill px-5'} 
              text={'Sign in'}
              background={''}
              func={() => signup ? setSignup(false) : setSignup(true)}
            />
          </div>
          {/* <div className="col-md-3">
            <img src={'../images/seller.png'} className="img-fluid image" alt="register_img" />
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}
export default SignIn

// VTU.ng-User.jpg