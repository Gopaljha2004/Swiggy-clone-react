import './App.css'
import Footer from './components/core/Footer'
import {Routes , Route} from "react-router"
import Restaurents from './pages/Restaurants'
import Instamart from './pages/Instamart'
import Dineout from './pages/Dineout'
import Genie from './pages/Genie'
import Home from './pages/Home'
import RestMenu from './components/core/RestMenu'
import SearchFood  from './components/core/SearchFood'
import SecondHome from './pages/SecondHome'
import Checkout from './pages/Checkout'


function App() {

  return (
    <> 
         <Routes>
          <Route path='/' element={<Home/>} />
         
          <Route path='/instamart' element={<Instamart/>} />
          <Route path='/dineout' element={<Dineout/>}/>
          <Route path='/genie' element={<Genie/>}/>
          <Route element={<SecondHome/>} >
          <Route path='/restaurants' element={<Restaurents/>}  /> 
          <Route path='/city/hyderabad/:id' element={<RestMenu/>} />
          <Route path='city/hyderabad/:id/search' element={<SearchFood/>}/>
          </Route>
          <Route path='/checkout' element={<Checkout/>} />
         </Routes>
         <Footer/>
    </>
  )
}

export default App
