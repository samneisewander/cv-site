import { Routes, Route } from 'react-router-dom'
import { Toast, Tooltip } from '@base-ui-components/react'
import { useEffect } from 'react'
import Home from './pages/Home'
import Emma from './pages/Emma'

export default function App() {

   useEffect(() => {
         const hash = window.location.hash;
         if (hash) {
            // Remove the '#' from the hash to get the element ID
            const elementId = hash.substring(1);
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
               targetElement.scrollIntoView({ behavior: 'smooth' });
            }
         }
      }, []); // Empty dependency array ensures this runs once on mount

   return (
      <>
         <Tooltip.Provider>
         <Toast.Provider>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/emma" element={<Emma />} />
               <Route path='/.well-known/discord' element={'dh=c9ffc1ff95bf341816e44758f8212ce61c4f5999'} />
            </Routes>
         </Toast.Provider>
         </Tooltip.Provider>
      </>
   )
}  