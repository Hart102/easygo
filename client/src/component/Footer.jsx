import AnchorTag from './AnchorTag'

const Footer = () => {
  return (
    <footer className="py-5" style={{background: '#F9F9F9'}}>
        <div className="container d-lg-flex justify-content-between flex-wrap">
            <h1 className="fw-bolder">EasyGo.com</h1>
            <div className="d-flex justify-content-space-around my-lg-0 my-lg-5">
                <div>
                    <AnchorTag location='/' classes='nav-link fw-bold' text='Products'/>
                    <AnchorTag location='/' classes='nav-link' text='Home'/>
                    <AnchorTag location='/#about' classes='nav-link' text='About'/>
                    <AnchorTag location='/#contact' classes='nav-link' text='Contact'/>
                </div>
                <div>
                    <AnchorTag location='/#products' classes='nav-link fw-bold' text='Quick Link'/>
                    <AnchorTag location='/#company' classes='nav-link' text='Company'/>
                    <AnchorTag location='/#dashboard' classes='nav-link' text='Buy Data'/>
                    <AnchorTag location='/#dashboard' classes='nav-link' text='Buy Airtime'/>
                    <AnchorTag location='/#dashboard' classes='nav-link' text='Subscribe TV'/>
                </div>
            </div>
            <div className='mb-lg-0 mb-4'>
                <AnchorTag location='/#contact' classes='nav-link fw-bold' text='FAQs'/>
                <AnchorTag location='/' classes='nav-link' text='Legal'/>
                <AnchorTag location='/' classes='nav-link' text='Terms'/>
                <AnchorTag location='/' classes='nav-link' text='Privacy'/>
                <AnchorTag location='/' classes='nav-link' text='Security'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer