import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import * as Helper from '../../component/HelperFunction/Helper'
import Button from "../../component/Button";
import Navbar from "../../component/Navbar";

const Payment = () => {
  const navigation = useNavigate()
  const [userEmail,  setUserEmail] = useState('')
  const [amount,  setAmount] = useState('')

  Helper.session_verifier().then(res => setUserEmail(res[0].email))
  const config = {
    reference: (new Date()).getTime().toString(),
    email: userEmail,
    amount: amount * 100,
    publicKey: 'pk_live_c1be6c177834df231b65089811ea851a27928392'
  }

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  }

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Button 
          func={() => initializePayment(onSuccess, onClose)}
          classes={'border py-2 px-3 col-md-12'} text={'Fund Wallet'}
        />
      </div>
    )
  }

  useEffect(() => {
    Helper.session_verifier().then(res => res[0] ? 
      navigation('/payment') : navigation('/user/login'))
  },[])

  return (
    <>
    <Navbar />
    <section className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
      <div className="d-flex flex-column align-items-center">
        <h3 className="fw-light">Continue to fund wallet.</h3>
        <form>
          <input 
            type="text" 
            className="form-control border-0" 
            value={userEmail} 
            disabled={true}
          />
          <input 
            type="number" 
            className="form-control my-3" 
            placeholder="Enter Amount" 
            step={'100'}
            onChange={(e) => setAmount(e.target.value)}
          />
        </form>
        <PaystackHook />
      </div>
    </section>
    </>
  )
}

export default Payment