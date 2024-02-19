import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.css'


const Pending = () => (
         <div className='main-container'>
        <div className='sidebar'>
            <Sidebar />
        </div>
        <div className='content'>
            <div>
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
               <div className='table'>
                    <table className='table-content'>
                        <tr>
                            <th> Channel</th>
                            <th> Order No </th>
                            <th> Order Date </th>
                            <th> City </th>
                            <th> Customer Name </th>
                            <th> Order Value </th>
                            <th> Status </th>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> xTKN20203754 </td>
                            <td> 2022-05-04 </td>
                            <td> Lucknow </td>
                            <td> Abhishik Dixit </td>
                            <td> 0.0 </td>
                            <td> Pending </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td> xTKN20203754 </td>
                            <td> 2022-05-04 </td>
                            <td> Lucknow </td>
                            <td> Abhishik Dixit </td>
                            <td> 0.0 </td>
                            <td> Pending </td>
                        </tr>
                        <tr>
                            <td> 3 </td>
                            <td> xTKN20203754 </td>
                            <td> 2022-05-04 </td>
                            <td> Lucknow </td>
                            <td> Abhishik Dixit </td>
                            <td> 0.0 </td>
                            <td> Pending </td>
                        </tr>
                    </table>
               </div>
            </div>
    </div>
   
)

export default Pending