export default function ServiceCard({icon,title,onClick}){

  return(

    <button
      onClick={onClick}
      className="
      w-72
      h-44
      bg-kiosk-card
      rounded-2xl
      shadow-xl
      flex
      flex-col
      items-center
      justify-center
      gap-3
      text-kiosk-text
      text-xl
      font-semibold
      hover:scale-105
      transition
      "
    >

      <div className="text-5xl">
        {icon}
      </div>

      {title}

    </button>

  )

}