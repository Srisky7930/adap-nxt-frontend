
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.css'


const Cancelled = () => (
    <div className='main-container'>
        <div className='sidebar'>
            <Sidebar />
        </div>
        <div className='content'>
            <div>
            <nav>
                    <ul className='items'>
                        <li> 
                            <Link to='/pending'> Pending </Link>  
                        </li>
                        <li> 
                            <Link to='/accepted'> Accepted </Link>  
                        </li>
                        <li> 
                            <Link to='/awb-created'> AWB created  </Link>  
                        </li>
                        <li> 
                            <Link to='/ready'> Ready To Ship   </Link>  
                        </li>
                        <li> 
                            <Link to='/completed'> Completed </Link>  
                        </li>
                        <li> 
                            <Link to='/cancelled'> Cancelled </Link>  
                        </li>
                    </ul>
                </nav>
            </div>
               <div>
                <p> Cancelled </p>
               </div>
            </div>
    </div>
)

export default Cancelled