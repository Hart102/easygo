import Logo from "../../component/Logo/Logo"
import Header from '../../pages/UserDashboard/DashboardComp/Header'
import InputField from "../../component/HomePageComponents/Contact/InputField"
const Buydata = () => {
  return (
    <>
    <Header />
    <div className="d-flex1 flex-column align-items-center justify-content-center px--5" style={{
        width: '800px', 
        maxWidth: "100%",
        height: '', 
        // background: '#F5F6FB',
        margin: 'auto',
        marginBottom: '100px'
      }}>
        <section className="my-lg-2 my-5 p-4">
            <b>Buy Data</b>
            <form className="row justify-content-between py-4">
                <div className="col-md-5 p-0">
                    <label className="fw-light">Which network would you line to buy ?</label>
                    <select name="" className="form-control border-0 border-bottom px-0">
                        <option value="">MTN</option>
                        <option value="">AIRTEL</option>
                        <option value="">Glo</option>
                        <option value="">9Mobile</option>
                    </select>
                </div>
                <div className="col-md-5 p-0">
                    <label className="fw-light">Select a data plan ?</label>
                    <select name="" className="form-control border-0 border-bottom px-0">
                        <option value="">MTN</option>
                        <option value="">AIRTEL</option>
                        <option value="">Glo</option>
                        <option value="">9Mobile</option>
                    </select>
                </div>
                <div className="col-md-12 p-0 my-4">
                    <label className="fw-light">Phone to deliver data?</label>
                    <input type="tel" className="form-control"/>
                </div>
            </form>
        </section>
      </div>
    </>
  )
}

export default Buydata