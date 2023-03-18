import './formStyle.css'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import Button from '../../component/Button'
import SocialIcons from './SocialIcons'
import { Data } from '../../component/DataManager/PostData'
import axios from 'axios'
import * as Helper from '../../component/HelperFunction/Helper'
import Loader from '../../component/Loader/Loader'
// import Loader from '../../asserts/images/loader2.gif'


const SignIn = () => {    
  axios.defaults.withCredentials = true
  // const userSession = useSelector((state) => state.users.value) 
  const navigation = useNavigate()
  const [signup, setSignup] = useState(false)
  const [loader, setLoader] = useState(false)

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
          <form action="user" className="sign-in-form">
            <h2 className="title1 h5 fw-light">Sign in</h2>
            <p className='fw-light text-danger text-center'>{serverMsg}</p>
            <div className="input-field border bg-transparent mb-lg-">
              <i className="fas fa-user"></i>
              <input 
                type="tel" 
                placeholder="phone" 
                onChange={(e) => {
                  setServerMsg(''); setLoader(false); setPhone_number(e.target.value)}}
              />
            </div>
            <div className="input-field border bg-transparent">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {
                  setServerMsg(''); setLoader(false);setPwd(e.target.value)}}
              />
            </div>
            <span className={loader ? 'd-block' : 'd-none'}><Loader /></span>
            <Button 
              func={(e) => {//--------Login function----------
                e.preventDefault(); setLoader(true);
                if(Helper.verify_phone(phone_number) !== true){
                  setServerMsg(Helper.verify_phone(phone_number)); setLoader(false);
                }else{
                  Data().SendData('http://localhost:5000/api/user_login', {phone_number, user_password}).then(res => 
                  {
                    if(res.data !== true){
                      setLoader(false); setServerMsg(Helper.filter_response(res.data).replace(/\_/g, " "));
                    }else{
                      setPhone_number(''); setPwd(''); navigation('/user/dashboard');
                      Helper.multiSelector('input').forEach(ele => ele.value ='')
                    }
                  })
                }
              }}
              text={'Login'}
              background={'#0D60D8'}
              classes={phone_number && user_password ? 'btn text-white px-lg-5 my-3 rounded-pill col-6' : 'd-none'} 
            />
            <SocialIcons />
          </form>

          {/*------Sign up Form ------*/}
          <form action="/user" className="sign-up-form mt-5">
            <h2 className="title1 h5">Sign up</h2>
            <p className='fw-light text-danger text-center'>{signUpMsg}</p>
            <div className="input-field bg-transparent border">
              <i className="fas fa-user"></i>
              <input
                type="tel" 
                placeholder="Phone" 
                onChange={(e) => {
                  setSignUpMsg(''); setLoader(false); setPhone(e.target.value)
                }}
              />
            </div>
            <div className="input-field bg-transparent border">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Email" 
                onChange={(e) => {
                  setSignUpMsg(''); setLoader(false); setEmail(e.target.value)}}
              />
            </div>
            <div className="input-field bg-transparent border">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {
                  setSignUpMsg(''); setLoader(false); setPassword(e.target.value)}}
              />
            </div>
            <span className={loader ? 'd-block' : 'd-none'}><Loader /></span>
            <Button 
              func={(e) => {//------Sign up function-------------
                e.preventDefault(); setLoader(true);
                if(Helper.verify_phone(phone) !== true){
                  setSignUpMsg(Helper.verify_phone(phone)); setLoader(false);
                }else{
                  axios.post('http://localhost:5000/api/sign_up', {phone, email, password}).then(res => {
                    if(res.data !== true){setSignUpMsg(res.data); setLoader(false);
                    }else{navigation('/easygo/user/verification', {state: email})}
                  })
                }  
              }}
              text={'Sign up'} 
              background={'#0D60D8'}
              classes={phone && email && password ? 'btn text-white py-2 px-lg-5 col-6 rounded-pill' : 'd-none'} 
              />
            <SocialIcons />
          </form>
        </div>
      </div>
      <div className="panels-container py-">
        <div className="panel left-panel">
          <div className="content col-md-9 mx-auto">
            <h5 className='text-white'>New here ?</h5>
            <p className='fw- text-white'>
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
            <h5 className='text-white'>One of us ?</h5>
            <p className='text-white'>
              Login to unlock our amazing features. You can Login using your email or phone number.
            </p>
            <Button 
              classes={'btn bg-white shadow text-dark rounded-pill px-5'} 
              text={'Sign in'}
              background={''}
              func={() => signup ? setSignup(false) : setSignup(true)}
            />
          </div>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  )
}
export default SignIn

// VTU.ng-User.jpg