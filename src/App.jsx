import { BrowserRouter, Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

import Dashboard from "./pages/Dashboard"


const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>

          <Route path="/dashboard" element={<Dashboard />} />
    
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
