import Logo from './Logo/Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-5" style={{background: '#F9F9F9'}}>
        <div className="container d-lg-flex justify-content-between flex-wrap">
            <Logo size={'h2 fw-bolder'}/>
            <div className="d-flex justify-content-space-around my-lg-0 my-lg-5">
                <div>
                    <Link to='/' className='nav-link fw-bold text-dark'>Products</Link>
                    <Link to='/' className='nav-link text-dark'>Home</Link>
                    <Link to='/' className='nav-link text-dark'>About</Link>
                    <Link to='/' className='nav-link text-dark'>Contact</Link>
                </div>
                <div>
                    <Link to='/#products' className='nav-link fw-bold text-dark'>Quick Link</Link>
                    <Link to='/#company' className='nav-link text-dark'>Company</Link>
                    <Link to='/#dashboard' className='nav-link text-dark'>'Buy Data'</Link>
                    <Link to='/#dashboard' className='nav-link text-dark'>Buy Airtime</Link>
                    <Link to='/#dashboard' className='nav-link text-dark'>Subscribe TV</Link>
                </div>
            </div>
            <div className='mb-lg-0 mb-4'>
                <Link to='/#contact' className='nav-link fw-bold text-dark'>Quick Link</Link>
                <Link to='/' className='nav-link text-dark'>Legal</Link>
                <Link to='/' className='nav-link text-dark'>Terms</Link>
                <Link to='/' className='nav-link text-dark'>Privacy</Link>
                <Link to='/' className='nav-link text-dark'>Security</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer