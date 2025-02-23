import './App.css'
import Footer from './components/core/Footer'
import {Routes , Route} from "react-router"
import Restaurents from './pages/Restaurants'
import Instamart from './pages/Instamart'
import Dineout from './pages/Dineout'
import Genie from './pages/Genie'
import Home from './pages/Home'
import RestMenu from './components/core/RestMenu'


function App() {

  return (
    <> 
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/restaurants' element={<Restaurents/>}  /> 
          <Route path='/instamart' element={<Instamart/>} />
          <Route path='/dineout' element={<Dineout/>}/>
          <Route path='/genie' element={<Genie/>}/>
          <Route path='/city/hyderabad/:id' element={<RestMenu/>} />
         </Routes>
         <Footer/>
    </>
  )
}

export default App
