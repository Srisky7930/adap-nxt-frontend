
import Sidebar from '../Sidebar'
import './index.css'


const Dashboard = () => (
    <div className='main-container'>
        <div className='sidebar'>
            <Sidebar />
        </div>
        <div className='content'>
            <h1> Dashboard </h1>
        </div>
    </div>
)

export default Dashboard