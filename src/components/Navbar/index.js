import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import './index.css'



const Navbar = () => (
    <nav className="nav-bar">
        <div>
            <img src="abc" alt="img" />
        </div>
        <div>
            <button type="button" className="button"> <FiMoon /> </button>
            <button type="button" className="button"> <IoIosNotificationsOutline /> </button>
        </div>
    </nav>
)


export default Navbar