import { usePaystackPayment } from "react-paystack";
import * as Helper from '../../component/HelperFunction/Helper'

export const user_session = () => {
    Helper.session_verifier().then(res => res)
}

const config = {
    reference: (new Date()).getTime().toString(),
    email: 'hartjust553@gmail.com',
    amount: 10000,
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

export const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
    )
}