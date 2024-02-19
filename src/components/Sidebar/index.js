import { Link } from 'react-router-dom';
import './index.css'


const Sidebar = () => (
    <div className='sidebar-items'>
        <ul className='lists'>
            <li>
                <Link to="/dashboard" className='link'> Dashboard </Link>
            </li>
            <li>
                <Link to="/Inventory" className='link'> Inventory </Link>
            </li>
            <li>
                <Link to="/" className='link'> Orders </Link>
            </li>
           
            <li>
                <Link to="/shipping" className='link'> Shipping </Link>
            </li>
            <li>
                <Link to="/channel" className='link'> channel </Link>
            </li>
        </ul>
    
    </div>
)

export default Sidebar