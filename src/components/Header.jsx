import { useEffect, useState } from "react"
import logo from "../assets/logoCRCG.png"

export default function Header() {

  const [hora, setHora] = useState("")

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date()

      const time = now.toLocaleTimeString("es-EC", {
        hour: "2-digit",
        minute: "2-digit"
      })

      setHora(time)

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="
    w-full
    flex
    items-center
    justify-between
    mb-16
    ">

      <div className="flex items-center gap-4">

        <img
          src={logo}
          className="h-12"
        />

        {/* <span className="text-white text-lg font-semibold">
          Alcaldía de Guayaquil
        </span> */}

      </div>

      <div className="text-white text-xl font-semibold">

        {hora}

      </div>
                      
    </div>

  )

}