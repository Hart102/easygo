import Action from "./Action"
import { useNavigate } from "react-router-dom"

const Menu = () => {
  const navigation = useNavigate()
  return (
    <div className="px-4">
      <div className="border-bottom"></div>
      {/* <div className="my-4 d-flex justify-content-between justify-content-lg-space-around"> */}
      <div className="row my-4 g-5">
        <div className="col-lg-4 col-ml-4 col-6 shadow rounded">
          <Action 
            func={() => navigation('/payment')}
            classname={'fa fa-plus'} 
            background={"#5FC797"} 
            text={"Fund Wallet"}
          />
        </div>
        <div className="col-lg-4 col-ml-4 col-6 shadow rounded">
          <Action 
            classname={'fa fa-arrow-right'} 
            background={"#5FC797"} 
            text={"Send"}
          />
        </div>
        <div className="col-lg-4 col-ml-4 col-6 shadow rounded">
        <Action 
          classname={'fa fa-arrow-down'} 
          background={"#5FC797"} 
          text={"Withdraw"}
        />
        </div>

      </div>
    </div>
  )
}
export default Menu