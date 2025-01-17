import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PagenotFound from './pages/PagenotFound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import ForgotPassword from './pages/Auth/ForgotPassword.jsx'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './Components/routes/Private'
import AdminRoute from './Components/routes/AdminRoute.jsx'
import AdminDashboard from './pages/Admin/AdminDashboard.jsx'
import CreateCategory from './pages/Admin/CreateCategory.jsx'
import CreateProduct from './pages/Admin/CreateProduct.jsx'
import Users from './pages/Admin/users.jsx'
import Orders from './pages/user/Orders.jsx'
import Profile from './pages/user/Profile.jsx'
import Products from './pages/Admin/Products.jsx'
import UpdateProduct from './pages/Admin/UpdateProduct.jsx'
import Search from './pages/Search.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Categories from './pages/user/Categories.jsx'
import CategoryProduct from './pages/CategoryProduct.jsx'
import CartPage from './pages/CartPage.jsx'
import AdminOrders from './pages/Admin/AdminOrders.jsx'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product/:slug' element={<ProductDetails/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/category/:slug' element={<CategoryProduct/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
  )
}

export default App
