import Action from "./Action"
const Menu = () => {
  return (
    <div className="bg-white shadow-sm rounded-bottom px-4">
      <div className="border-bottom"></div>
      <div className="my-4 d-flex justify-content-between justify-content-lg-space-around">
        <Action 
          classname={'fa fa-plus'} 
          background={"#66CD71"} 
          text={"Fund Wallet"}
        />
        <Action 
          classname={'fa fa-arrow-right'} 
          background={"#EC4D6D"} 
          text={"Send"}
        />
        <Action 
          classname={'fa fa-arrow-down'} 
          background={"#F8B431"} 
          text={"Withdraw"}
        />
      </div>
    </div>
  )
}
export default Menu