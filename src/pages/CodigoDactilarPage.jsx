import { useState } from "react"
import { useLocation } from "react-router-dom"
import KioskLayout from "../layouts/KioskLayout"

export default function CodigoDactilarPage(){

  const location = useLocation()
  const cedula = location.state?.cedula || ""

  const [codigo,setCodigo] = useState("")

  const agregarNumero = (num)=>{
    if(codigo.length >= 4) return
    setCodigo(codigo + num)
  }

  const borrar = ()=>{
    setCodigo(codigo.slice(0,-1))
  }

  const bebe = ()=>{
    setCodigo("X")
  }

  const aceptar = ()=>{
    console.log("Cedula:", cedula)
    console.log("Codigo dactilar:", codigo)
  }

  return(

    <KioskLayout>

      <div className="flex flex-col items-center gap-10">

        <h1 className="text-white text-4xl font-bold">
          Ingrese código dactilar
        </h1>

        <input
          value={codigo}
          readOnly
          className="
          w-[400px]
          text-center
          text-4xl
          p-6
          rounded-xl
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

          {/* BOTON BEBE */}

          <button
            onClick={bebe}
            className="
            w-32
            h-24
            bg-yellow-500
            text-white
            text-2xl
            rounded-xl
            shadow-lg
            "
          >
            X
          </button>

          {/* BOTON 0 */}

          <button
            onClick={()=>agregarNumero(0)}
            className="
            w-32
            h-24
            bg-white
            text-3xl
            rounded-xl
            shadow-lg
            "
          >
            0
          </button>

          {/* BORRAR */}

          <button
            onClick={borrar}
            className="
            w-32
            h-24
            bg-red-500
            text-white
            text-xl
            rounded-xl
            shadow-lg
            "
          >
            Borrar
          </button>

          {/* ACEPTAR */}

          {(codigo.length === 4 || codigo === "X") && (
            <button
              onClick={aceptar}
              className="
              w-32
              h-24
              bg-green-600
              text-white
              text-xl
              rounded-xl
              shadow-lg
              "
            >
              Aceptar
            </button>
          )}

        </div>

      </div>

    </KioskLayout>

  )

}