import Header from "../components/Header";

export default function KioskLayout({ children }) {

  return (

    <div className="
    bg-[#0F3B63]
    min-h-screen
    flex
    flex-col
    items-center
    ">

      <div className="w-full max-w-6xl px-8 pt-10">

        <Header />

        <div className="
        flex
        items-center
        justify-center
        min-h-[70vh]
        ">

          {children}

        </div>

      </div>

    </div>

  )

}