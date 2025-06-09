import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Emma from './pages/Emma'
 
export default function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emma" element={<Emma />} />
         </Routes>
      </>
   )
}  