import Axios from "axios"
export const Data = () => {
    return{
        SendData(api, data){
            return Axios.post(api, data)
        },
        RecieveData(api){
            return Axios.get(api)
        }
    }
}