import KioskLayout from "../layouts/KioskLayout";
import ServiceCard from "../components/ServiceCard";
import baby from "../assets/baby.png"
import boda from "../assets/matrimonio.png"
import defuncion from "../assets/defuncion.png"
import identidad from "../assets/identidad.png"
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate()

  return (
    <KioskLayout>
      <div className="flex flex-col items-center gap-16">
        <h1
          className="
        text-white
        text-4xl
        md:text-5xl
        font-bold
        text-center
        "
        >
          Escoja el tipo de certificado
        </h1>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-12
            justify-items-center
            mx-auto
          "
        >
          <ServiceCard icon={baby} title="Nacimiento" onClick={()=>navigate("/cedula/nacimiento")} />

          <ServiceCard icon={boda} title="Matrimonio" onClick={()=>navigate("/cedula/matrimonio")} />

          <ServiceCard icon={defuncion} title="Defunción" onClick={()=>navigate("/cedula/defuncion")} />

          <ServiceCard icon={identidad} title="Identidad" onClick={()=>navigate("/cedula/identidad")} />
        </div>
      </div>
    </KioskLayout>
  );
}
