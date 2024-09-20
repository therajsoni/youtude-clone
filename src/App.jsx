import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes , Route } from 'react-router-dom'
import Viedo from './pages/viedo/Viedo'
import { useState } from 'react'

const App = () => {

  const [sidebar,setSidebar] = useState(true);
  console.log(sidebar);  

  return (
    <div>
<Navbar setSidebar={setSidebar} />
<Routes>
  <Route path="/" element={<Home sidebar={sidebar} />} />
  <Route path="/viedo/:categoryId/:viedoId" element={<Viedo/>} />
</Routes>
    </div>
  )
}

export default App