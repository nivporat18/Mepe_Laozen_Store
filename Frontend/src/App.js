import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigations/Navigation';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Case from './components/cases/Case';
import AirPods from './components/airpods/AirPods';
import Iphone from './components/iphones/Iphone';
import Ipad from './components/ipads/Ipad';
import Mac from './components/mac/Mac';
import Watch from './components/watch/Watch';
import Iphone11 from './components/iphones/iphone11/Iphone11';
import Iphone13 from './components/iphones/iphone13/Iphone13';
import Iphone12 from './components/iphones/iphone12/Iphone12';
import Iphone14 from './components/iphones/iphone14/Iphone14';
import Dashboard from './components/admin/dashboard/Dashboard';
import Products from './components/admin/products/Products';
import Summary from './components/admin/summary/Summary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import CheckOutSuccess from './components/auth/checkOutSuccess/CheckOutSuccess';
import CreateProduct from './components/admin/createProducts/CreateProduct';
import Samsung from './components/samsung/Samsung';
import AirPodsPro from './components/airpods/airPodsPro/AirPodsPro';
import AirPods2 from './components/airpods/airPods2/AirPods2';
import AirPods3 from './components/airpods/airPods3/AirPods3';
import AirPodsProMax from './components/airpods/airPodsProMax/AirPodsProMax';
import AppleWatch6 from './components/watch/appleWatch6/AppleWatch6';
import AppleWatch7 from './components/watch/appleWatch7/AppleWatch7';
import AppleWatch8 from './components/watch/appleWatch8/AppleWatch8';
import AppleWatchUltra from './components/watch/appleWatchUltra/AppleWatchUltra';
import Imac from './components/mac/imac/Imac';
import MacMini from './components/mac/macMini/MacMini';
import MacbookAir from './components/mac/macbookAir/MacbookAir';
import MacbookPro from './components/mac/macbookPro/MacbookPro';
import IpadPro from './components/ipads/ipadPro/IpadPro';
import IpadAir from './components/ipads/ipadAir/IpadAir';
import IpadMini from './components/ipads/ipadMini/IpadMini';



function App() {


  return (
    <div>
          <BrowserRouter>
          <ToastContainer/>
          <Navigation/>
          <Routes>

          
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/> 
            <Route path='/' element={<Home/>}/>

          
            
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/case' element={<Case/>}/>
          <Route path='/checkout-success' element={<CheckOutSuccess/>}/>
          
          <Route path='/airpods' element={<AirPods/>}/>
          <Route path='/airpods/airpodspro' element={<AirPodsPro/>}/>
          <Route path='/airpods/airpods2' element={<AirPods2/>}/>
          <Route path='/airpods/airpods3' element={<AirPods3/>}/>
          <Route path='/airpods/airpodspromax' element={<AirPodsProMax/>}/>
         
          <Route path='/iphone' element={<Iphone/>}/>
          <Route path='/iphone/iphone11' element={<Iphone11/>}/>
          <Route path='/iphone/iphone12' element={<Iphone12/>}/>
          <Route path='/iphone/iphone13' element={<Iphone13/>}/>
          <Route path='/iphone/iphone14' element={<Iphone14/>}/>
         
         
          <Route path='/ipad' element={<Ipad/>}/>
          <Route path='/ipad/ipadpro' element={<IpadPro/>}/>
          <Route path='/ipad/ipadair' element={<IpadAir/>}/>
          <Route path='/ipad/ipadmini' element={<IpadMini/>}/>
          
          


          <Route path='/watch' element={<Watch/>}/>
          <Route path='/watch/applewatch6' element={<AppleWatch6/>}/>
          <Route path='/watch/applewatch7' element={<AppleWatch7/>}/>
          <Route path='/watch/applewatch8' element={<AppleWatch8/>}/>
          <Route path='/watch/applewatchultra' element={<AppleWatchUltra/>}/>


          <Route path='/mac' element={<Mac/>}/>
          <Route path='/mac/imac' element={<Imac/>}/>
          <Route path='/mac/macmini' element={<MacMini/>}/>
          <Route path='/mac/macbookair' element={<MacbookAir/>}/>
          <Route path='/mac/macbookpro' element={<MacbookPro/>}/>




          <Route path='/samsung' element={<Samsung/>}/>


          <Route path='/admin' element={<Dashboard/>} >
          <Route path='products' element={<Products/>}>
          <Route path='create-product' element={<CreateProduct/>}/>
          </Route>
          <Route path='summary' element={<Summary/>}/>
          </Route>
          
        
        

     
          
          </Routes>
     
          </BrowserRouter>
    </div>
  );
}

export default App;
