import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CedulaPage from "./pages/CedulaPage"

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/cedula/:tipo" element={<CedulaPage />} />

    </Routes>
  )

}

export default App