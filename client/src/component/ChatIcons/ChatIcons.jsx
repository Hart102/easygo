import { Link } from "react-router-dom"

const ChatIcons = () => {
  return (
    <div className="fixed-bottom d-flex flex-column align-items-end px-3 mb-lg-0 mb-5">
        <div className="p-2" style={{
        background: "blue", 
        height: '40px', 
        width: '40px', 
        borderRadius: '30px'
        }}>
            <Link to={'https://www.facebook.com/profile.php?id=100076575378123'} 
            className={'nav-link p-0 text-center'}>
                <i className="fab fa-facebook-f fa-2x text-white"></i>
            </Link>
        </div>
        <div 
        className="d-flex align-items-center justify-content-center my-3" 
        style={{
        background: "#61BF33", 
        height: '40px', 
        width: '40px', 
        borderRadius: '30px'
        }}>
            <Link to={'https://wa.me/09137837393'} className={'nav-link p-0 text-center'}>
                <i className="fab fa-whatsapp fa-2x text-white"></i>
            </Link>
        </div>
    </div>
  )
}

export default ChatIcons