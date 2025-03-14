import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import {Home} from './components/Home'
import { About } from './components/About'
import { Events } from './components/Events'
import { Ministries } from './components/Ministries'
import { Contact } from './components/Contact'
import { Give } from './components/Give'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/ministries' element={<Ministries/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/give' element={<Give/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
