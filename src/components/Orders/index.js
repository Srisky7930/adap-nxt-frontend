import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.css'


const Orders = () => {
    return (
        <div className='main-container'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='content'>
                <nav>
                    <ul className='items'>
                        <li> 
                            <Link to='/pending' className='link'> Pending </Link>  
                        </li>
                        <li> 
                            <Link to='/accepted' className='link'> Accepted </Link>  
                        </li>
                        <li> 
                            <Link to='/awb-created' className='link'> AWB created  </Link>  
                        </li>
                        <li> 
                            <Link to='/ready' className='link'> Ready To Ship   </Link>  
                        </li>
                        <li> 
                            <Link to='/completed' className='link'> Completed </Link>  
                        </li>
                        <li> 
                            <Link to='/cancelled' className='link'> Cancelled </Link>  
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Orders 