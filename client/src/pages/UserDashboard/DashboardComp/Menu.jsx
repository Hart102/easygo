import Action from "./Action"
import { useNavigate } from "react-router-dom"

const Menu = () => {
  const navigation = useNavigate()
  return (
    <div className="px-4">
      <div className="border-bottom"></div>
      <div className="my-4 d-flex justify-content-between justify-content-lg-space-around">
      {/* <div className="d-flex flex-wrap my-4"> */}
          <Action 
            func={() => navigation('/payment')}
            classname={'fa fa-plus'} 
            background={"#5FC797"} 
            text={"Fund Wallet"}
          />
          <Action 
            classname={'fa fa-arrow-right'} 
            background={"#5FC797"} 
            text={"Send"}
          />
        <Action 
          classname={'fa fa-arrow-down'} 
          background={"#5FC797"} 
          text={"Withdraw"}
        />
      </div>
    </div>
  )
}
export default Menu