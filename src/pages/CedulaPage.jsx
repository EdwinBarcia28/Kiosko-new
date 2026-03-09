import { useState } from "react"
import KioskLayout from "../layouts/KioskLayout"

export default function CedulaPage(){

  const [cedula,setCedula] = useState("")

  const agregarNumero = (num)=>{
    if(cedula.length >= 10) return
    setCedula(cedula + num)
  }

  const borrar = ()=>{
    setCedula(cedula.slice(0,-1))
  }

  return(

    <KioskLayout>

      <div className="flex flex-col items-center gap-10">

        <h1 className="text-white text-4xl font-bold">
          Ingrese número de cédula
        </h1>

        <input
          value={cedula}
          readOnly
          className="
          w-[500px]
          text-center
          text-4xl
          p-6
          rounded-xl
          outline-none
          "
        />

        {/* TECLADO */}

        <div className="grid grid-cols-3 gap-6">

          {[1,2,3,4,5,6,7,8,9].map(n=>(
            <button
              key={n}
              onClick={()=>agregarNumero(n)}
              className="
              w-32
              h-24
              bg-white
              text-3xl
              rounded-xl
              shadow-lg
              hover:bg-sky-100
              "
            >
              {n}
            </button>
          ))}

          <div></div>

          <button
            onClick={()=>agregarNumero(0)}
            className="
            w-32
            h-24
            bg-white
            text-3xl
            rounded-xl
            shadow-lg
            hover:bg-sky-100
            "
          >
            0
          </button>

          <button
            onClick={borrar}
            className="
            w-32
            h-24
            bg-red-500
            text-white
            text-2xl
            rounded-xl
            shadow-lg
            "
          >
            Borrar
          </button>

        </div>

      </div>

    </KioskLayout>

  )

}