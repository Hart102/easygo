import Logo from './Logo/Logo'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useEffect, useState } from 'react'
// import MenuIcon from '../pages/UseDashboard/DashboardComp/FooterMenu/MenuIcon'
import * as Helper from './HelperFunction/Helper'

const Navbar = ({
    signInAction,
    signUpAction,
    scrollToAbout,
    scrollToContact
}) => {
    const [scroll, setScroll] = useState(false)
    const[session, setSession] = useState(false)
    window.addEventListener('scroll', () => { //scroll functionality
        window.scrollY > 8 ? setScroll(true) : setScroll(false)
    })

    useEffect(() => {
        Helper.session_verifier().then(res => res[0] ? 
            setSession(true) : setSession(false))
    },[])

  return (
    <div>
        <nav //------Desktop navbar------
            className={scroll ? "shadow-sm bg-white fixed-top top-0" : 
            "bg-white fixed-top top-0"}>
            <div className="container py-1 d-flex align-items- align-items-baseline justify-content-between">
                <Logo size={'h2 fw-bolder d-lg-block d-none'}/>
                <Logo size={'h4 fw-bold d-lg-none d-block'}/>
                <div className="d-lg-flex d-none text-center d-none">
                    <Link to={'/'} className='text-dark nav-link fw-bold'>Home</Link>
                    <Link to={'/'} className='text-dark nav-link fw-bold' onClick={scrollToAbout}>About</Link>
                    <Link to={'/'} className='text-dark nav-link fw-bold' onClick={scrollToContact}>Contact</Link>
                </div>
                <div className="d-flex">
                    <Button 
                        classes={session ? 'd-none' : 'text-dark bg-transparent border px-l-3 py-lg-2 py-1 mx-3'} 
                        text={'Sign in'} func={signInAction}/>
                    <Button 
                        classes={'d-lg-block d-none text-white bg-dark border-0 px-lg-3 py-2'} 
                        text={'Create account'} func={signUpAction}/>
                </div>
            </div>
        </nav>
        {/*------- Mobile Navbar -------*/}
        <nav className='bg-white shadow-sm fixed-bottom bottom-0 px-5 w-100 border-top'>
            {/* <div className="d-lg-none d-flex justify-content-between text-center">
                <MenuIcon location={'/'} iconName={'fa fa-home'} text={'Home'}/>
                <MenuIcon location={'/'} iconName={'fa fa-info'} text={'Help'}/>
                <MenuIcon location={'/'} iconName={'fa fa-envelope'} text={'Contact'}/>
            </div> */}
        </nav>
    </div>
  )
}

export default Navbar

// user/login