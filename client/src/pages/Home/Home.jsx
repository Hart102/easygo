import './Home.css'
import { useEffect } from 'react'
import Navbar from "../../component/Navbar"
import Jumbotrom from "../../component/HomePageComponents/Jumbotrom"
import Button from "../../component/Button"
import Card from "../../component/HomePageComponents/Card/Card"
import RowTemplate from '../../component/HomePageComponents/RowTemplate/RowTemplate'
import Footer from "../../component/Footer"
import Contact from '../../component/HomePageComponents/Contact/Contact'
import { Data } from '../../component/DataManager/PostData'
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addUser } from '../../Redux/Users'


const Home = () => {
  const navigation = useNavigate()
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   Data().RecieveData('http://localhost:5000/api/user_session')
  //   .then(res => dispatch(addUser(res.data)))
  // },[])
  

  return (
    <>
      <Navbar 
        signInAction={() => navigation('/user/login')}
        signUpAction={() => navigation('/user/login')}
      />
      <Jumbotrom />
      <section className="py-lg-5">
        <div className="container py-4 px-lg-0">
          <div className="row text-lg-start text-center">
            <div className="col-md-6 col-lg-4 my-5 px-4 mx-md-auto">
              <h2 className="fw-bolder fs-1">Data offer</h2>
              <p className="mb-5 fw-light">Easyon is the best plateform for automated vtu services.</p>
              <Button 
                func={() => navigation('/user/login')}
                classes="btn btn-dark d-flex align-items-center 
                border p-lg-3 p-2 fw-bold mx-auto mx-lg-0"
                text="Buy data"/>
            </div>
            <div className="col-md-8 px-lg-0 px-4 mx-md-auto">
              <div className="d-flex flex-wrap g-3">
                <Card 
                  img={'fa-phone'}
                  title={'Airtime'}
                  text={'Enjoy as much as 3% discount on airtime purchase on our platform. We offer VTU airtime for MTN, Glo, Airtel and 9mobile.'}
                  linkText={'Buy Airtime'}
                />
                <Card 
                  img={'fa-phone'}
                  title={'Data'}
                  text={"Buy and resell cheap data on Easyon and make money with us. We offer the cheapest data bundles for all networks."}
                  linkText={'Buy Data'}
                />
                <Card 
                  img={'fa-phone'}
                  title={'Cable TV'}
                  text={'Don’t miss that TV programme. Subscribe your Cable TV (DSTv, GOTv & Startimes) at the cheapest price. Instant activation!.'}
                  linkText={'Subscribe Cable TV'}
                />
                <Card 
                  img={'fa-phone'}
                  title={'Electricity'}
                  text={'Pay and get your token instantly via SMS, email etc.'}
                  linkText={'Pay Bills'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <RowTemplate 
        img='./images/seller.png' 
        title='VTU Business in Nigeria and Data Reselling' 
        text='Make money as an easyon data reseller, Start with little capital and focus on earning while we handle the messy jobs. Become a reseller with a little capital and earn money.'
        classname='lh-lg'
      />
      {/*--------About --------*/}
      <section style={{background: '#F9F9F9'}}>
        <RowTemplate 
          img='./images/VTU.ng-User.jpg' 
          title='About Us!' 
          text='Easyon is a virtual top-up platform owned and operated by Easyon Technologies. We are duly registered with the corporate affairs commission (CAC).Our services include but not limited to Buying/Reselling of Cheap Data & Airtime, Electricity Bills Payment, Cable TV Subscription and Airtime to Cash Conversion. Enjoy our massive discounts for resellers and partners and make money with us.'
          classname='flex-row-reverse lh-lg'
        />
      </section>
      {/*-------Contact Form-------*/}
      <Contact />
      {/* ---------Customers---------*/}
      <section>
          <div className="col-md-6 my-lg-0 my-5 mx-auto p-lg-5 px-4 text-center">
              <h2 className="fw-bolder display-6 my-3">Get the best out of Easyon</h2>
              <p className='fw-light'>Create a Free account with us now and enjoy access to all our services.</p>
              <div 
                className="d-flex justify-content-center 
                align-items-center flex-lg-row flex-column my-lg-4 my-3">
                <Button
                  classes="btn d-flex align-items-center border p-lg-3 my-lg-0 my-3 mx-lg-3" 
                  img="./images/apple-icon.svg"
                  text="Get on iphone"
                /> 
                <Button
                  classes="btn d-flex align-items-center border p-lg-3 my-lg-0 my-3" 
                  img="./images/google-icon.svg"
                  text="Get on Android"
                /> 
              </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Home