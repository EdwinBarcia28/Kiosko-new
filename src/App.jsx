import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CedulaPage from "./pages/CedulaPage"
import CodigoDactilarPage from "./pages/CodigoDactilarPage"

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/cedula/:tipo" element={<CedulaPage />} />

      <Route path="/dactilar" element={<CodigoDactilarPage />} />

    </Routes>
  )

}

export default App