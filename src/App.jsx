import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CedulaPage from "./pages/CedulaPage"
import CodigoDactilarPage from "./pages/CodigoDactilarPage"
import VistaCertificadoPage from "./pages/VistaCertificadoPage"
import PagoPage from "./pages/PagoPage"

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/cedula/:tipo" element={<CedulaPage />} />

      <Route path="/dactilar" element={<CodigoDactilarPage />} />

      <Route path="/certificado" element={<VistaCertificadoPage/>}/>

      <Route path="/pago" element={<PagoPage/>}/>

    </Routes>
  )

}

export default App