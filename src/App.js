import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Orders from './components/Orders'
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Shipping from './components/Shipping';
import Channel from './components/Channel';
import Accepted from './components/Accepted';
import AwbCreated from './components/AwbCreated';
import Cancelled from './components/Cancelled';
import ReadyToShip from './components/ReadyToShip'
import Completed from './components/Completed';

import './App.css';
import Pending from './components/Pending';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path='/' element={ <Orders />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path='/inventory' element={ <Inventory /> } />
        <Route path='/shipping' element={ <Shipping /> } />
        <Route path='/channel' element={ <Channel /> } />
        <Route path='/pending' element={ <Pending /> } />
        <Route path='/accepted' element={ <Accepted /> } />
        <Route path='/awb-created' element={ <AwbCreated /> } />
        <Route path='/completed' element={ <Completed />} />
        <Route path='/cancelled' element={ <Cancelled /> } />
        <Route path='/ready' element={ <ReadyToShip /> } />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
