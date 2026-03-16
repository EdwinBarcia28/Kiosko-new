import { useLocation, useNavigate } from "react-router-dom"
import KioskLayout from "../layouts/KioskLayout"
import { CreditCard } from "lucide-react"
//import { CreditCard } from "lucide-react"

export default function PagoPage(){

  const location = useLocation()
  const navigate = useNavigate()

  const { tipoCertificado, precio } = location.state || {}

  return(

    <KioskLayout>

      <div className="flex flex-col items-center justify-center gap-10 h-full">

        <h1 className="text-white text-5xl font-bold">
          Pago del certificado
        </h1>

        <div className="bg-white p-10 rounded-xl shadow-2xl text-center w-[500px]">

          <h2 className="text-2xl font-bold mb-4">
            Tipo de certificado
          </h2>

          <p className="text-xl capitalize mb-6">
            {tipoCertificado}
          </p>

          <h2 className="text-2xl font-bold mb-2">
            Valor
          </h2>

          <p className="text-4xl font-bold text-green-600 mb-8">
            ${precio}.00
          </p>

          <div className="flex flex-col items-center gap-4">

            <CreditCard size={80} className="text-blue-600"/>

            <p className="text-xl font-semibold">
              Acerque su tarjeta de débito o crédito
            </p>

          </div>

        </div>

        <button
          onClick={()=>navigate("/")}
          className="px-10 py-4 bg-red-500 text-white text-xl rounded-xl"
        >
          Cancelar
        </button>

      </div>

    </KioskLayout>

  )

}