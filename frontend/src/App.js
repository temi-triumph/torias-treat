import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'

import Product from './pages/Product'

import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'

import AddProduct from "./components/Drawer/AddProduct"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/account' element={<Account />} />
            <Route path='/add_product' element={<Product />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>

      
      <AddProduct >
                    
      </AddProduct>
    </ChakraProvider>
// 08034931554 daddy ore
  );
}

export default App;
