import './Home.css'
import { useRef } from 'react'
import Navbar from "../../component/Navbar"
import Jumbotrom from "../../component/HomePageComponents/Jumbotrom"
import ChatIcons from '../../component/ChatIcons/ChatIcons'
import Button from "../../component/Button"
import Card from "../../component/HomePageComponents/Card/Card"
import RowTemplate from '../../component/HomePageComponents/RowTemplate/RowTemplate'
import Footer from "../../component/Footer"
import Contact from '../../component/HomePageComponents/Contact/Contact'
import { useNavigate } from 'react-router-dom'
import { write_up } from './Contents'
import VtuImage from '../../asserts/images/internet.jpg'


const Home = () => {
  const navigation = useNavigate()
  const AboutRef = useRef(null)
  const contactRef = useRef(null)

  

  return (
    <>
      <Navbar 
        signInAction={() => navigation('/user/login')}
        signUpAction={() => navigation('/user/login')}
        scrollToAbout={() => AboutRef.current?.scrollIntoView({behavior: 'smooth'})}
        scrollToContact={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})}
      />
      <Jumbotrom />
      <ChatIcons />
      <section className="py-lg-5">
        <div className="container py-4 px-lg-0">
          <div className="row text-lg-start text-center">
            <div className="col-md-6 col-lg-4 my-5 px-4 mx-md-auto">
              <h2 className="fw-bolder fs-1">Data offer</h2>
              <p className="mb-5 fw-light">EasyGo is the best plateform for automated vtu services.</p>
              <Button 
                func={() => navigation('/user/login')}
                classes="btn btn-dark d-flex align-items-center 
                border p-lg-3 p-2 fw-bold mx-auto mx-lg-0"
                text="Buy data"/>
            </div>
            <div className="col-md-8 px-lg-0 px-4 mx-md-auto">
              <div className="d-flex flex-wrap g-3">
                {write_up.map((content, index) => 
                <div className="cards col-lg-5 p-4 my-3 mx-lg-2 rounded-top rounded-bottom shadow-sm fw-light" 
                style={{background: '#F9F9F9'}} role="button" key={index}> 
                  <Card 
                    img={content.icon} 
                    title={content.title} 
                    text={content.text} 
                    linkText={content.linkText}
                  />
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <RowTemplate 
        img={VtuImage}
        title='VTU Business in Nigeria and Data Reselling' 
        text='Make money as an easygo data reseller, Start with little capital and focus on earning while we handle the messy jobs. Become a reseller with a little capital and earn money.'
        classname='lh-lg'
      />
      {/*--------About --------*/}
      <section style={{background: '#F9F9F9'}} ref={AboutRef}>
        <RowTemplate 
          img='./images/VTU.ng-User.jpg' 
          title='About Us!' 
          text='Easygo is a virtual top-up platform owned and operated by Easygo Technologies. We are duly registered with the corporate affairs commission (CAC).Our services include but not limited to Buying/Reselling of Cheap Data & Airtime, Electricity Bills Payment, Cable TV Subscription and Airtime to Cash Conversion. Enjoy our massive discounts for resellers and partners and make money with us.'
          classname='flex-row-reverse lh-lg'
        />
      </section>
      {/*-------Contact Form-------*/}
      <section ref={contactRef}><Contact /></section>
      {/* ---------Customers---------*/}
      <section>
          <div className="col-md-6 my-lg-0 my-5 mx-auto p-lg-5 px-4 text-center">
              <h2 className="fw-bolder display-6 my-3">Get the best out of Easygo</h2>
              <p className='fw-light'>Create a Free account with us now and enjoy access to all our services.</p>
              <div 
                className="d-flex justify-content-center 
                align-items-center flex-lg-row flex-column my-lg-4 my-3">
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