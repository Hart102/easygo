import { useState, useEffect, useRef } from 'react'
import AnchorTag from '../../../component/AnchorTag'
import { Data } from '../../../component/DataManager/PostData'
import * as Helper from '../../../component/HelperFunction/Helper'
import { addUser } from '../../../Redux/Users'
import { useSelector, useDispatch } from 'react-redux'
// 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

const Profile = () => {
    const[user, setUser] = useState('')
    const emailRef = useRef(null)
    const[swictEditBtn, setSwictEditBtn] = useState(false)
    const[editedEmail, setEditedEmail] = useState('')

    const session = useSelector((state) => state.users.value)
    console.log(session)

    useEffect(() => {
        Helper.session_verifier().then(res => setUser(res[0]))
    },[])
  return (
    <>
    <section 
        className={"fixed-top container d-flex d-none1 flex-column align-items-center justify-content-center py-5"} 
        style={{background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))', height: '100vh'}}>

        <div className="mx-auto" style={{
        width: '700px', 
        maxWidth: "100%", 
        background: '',
        marginBottom: '100px'
        }}>
            <div className="bg-white rounded border shadow-sm px-4 pb-5">
                <div className="d-flex justify-content-end py-4">
                    <AnchorTag 
                        location={'/user/dashboard'} 
                        text={<i className="fa fa-times"></i>}
                    />
                </div>
                <h3 className="fw-light mb-3">User Profile</h3>
                <b>Username:</b>
                <p>Hart</p>
                <b>Phone:</b>
                <p>0901122334</p>
                <div className="d-flex justify-content-between w-100">
                    <span>
                        <b>Email: {'Not verified'}</b>
                        <p>{user.email}</p>
                        <input type="text" 
                            className={'email form-control border-0 px-0 bg-transparent d-block'} 
                            ref={emailRef} onChange={(e) => setEditedEmail(e.target.value)}  />
                    </span>
                    <span className='d-flex align-items-center'>
                        <p className='text-danger my-0'>Verify</p>
                        <i className={swictEditBtn ? 'd-none' : 'd-block Edit ms-3'} role={'button'} 
                        onClick={() => {
                            setSwictEditBtn(true)
                            emailRef.current.focus()
                            emailRef.current.value = user.email
                        }}>Edit</i>
                        <i className={!swictEditBtn ? 'd-none' : 'fw-light ms-3'} role={'button'} 
                        onClick={async () => {
                            setSwictEditBtn(false)
                            if(editedEmail){
                                const newUser = {...user, email: editedEmail}
                                const response = await Data().SendData('http://localhost:4000/api/edit_email', newUser)
                                if(response.data === true) {
                                    emailRef.current.value = ''
                                    return setUser(newUser)
                                }
                            }
                        }}>save</i>
                    </span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Profile