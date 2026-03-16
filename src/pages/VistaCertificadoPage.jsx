import { useLocation, useNavigate } from "react-router-dom"
import KioskLayout from "../layouts/KioskLayout"

export default function VistaCertificadoPage(){

  const location = useLocation()
  const navigate = useNavigate()

  const { pdfUrl, tipoCertificado } = location.state || {}

  // determinar precio
  const precio = tipoCertificado === "identidad" ? 5 : 3

  const irPago = ()=>{
    navigate("/pago",{
      state:{
        tipoCertificado,
        precio,
        pdfUrl
      }
    })
  }

  return(

    <KioskLayout>

      <div className="flex flex-col items-center gap-8 w-full h-full">

        <h1 className="text-white text-4xl font-bold">
          Vista previa del certificado
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-2xl">

          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-[900px] h-[600px] rounded-lg"
          />

        </div>

        <div className="flex gap-8">

          <button
            onClick={()=>navigate("/")}
            className="px-10 py-4 bg-red-500 text-white text-xl rounded-xl"
          >
            Volver
          </button>

          <button
            onClick={irPago}
            className="px-10 py-4 bg-blue-600 text-white text-xl rounded-xl"
          >
            Pagar
          </button>

        </div>

      </div>

    </KioskLayout>

  )

}