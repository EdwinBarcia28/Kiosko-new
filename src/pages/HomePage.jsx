import KioskLayout from "../layouts/KioskLayout"
import ServiceCard from "../components/ServiceCard"

export default function HomePage(){

  return(

    <KioskLayout>

      <h1 className="text-white text-5xl font-bold mb-16">

        Kiosco de Certificados

      </h1>

      <div className="grid grid-cols-2 gap-10">

        <ServiceCard
          icon="👶"
          title="Nacimiento"
        />

        <ServiceCard
          icon="💍"
          title="Matrimonio"
        />

        <ServiceCard
          icon="⚰️"
          title="Defunción"
        />

        <ServiceCard
          icon="🪪"
          title="Identidad"
        />

      </div>

    </KioskLayout>

  )

}