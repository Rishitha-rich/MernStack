import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contacts'
import Products from './Pages/Products'
import WebLayout from './layout/Weblayout'
import AdminLayout from './layout/Adminlayout'
import AdminDashboard from './Pages/Admin/AdminDashboard'
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App