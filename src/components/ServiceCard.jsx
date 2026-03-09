export default function ServiceCard({ icon, title, onClick }) {

  return (

    <button
      onClick={onClick}
      className="
      w-80
      h-48
      rounded-2xl
      bg-white
      shadow-xl
      flex
      flex-col
      items-center
      justify-center
      gap-4
      text-[#0A2540]
      text-xl
      font-semibold
      transition
      duration-200
      hover:scale-105
      hover:bg-sky-50
      "
    >

      <img
        src={icon}
        className="h-28 w-28 object-contain"
      />

      {title}

    </button>

  )

}