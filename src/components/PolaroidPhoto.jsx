export default function PolaroidPhoto({src, caption, rotation = 0 }){
    return (
        <div
            className={`relative bg-white p-2 rounded-lg shadow-xl border-2 border-[#d1d1e8] w-48 mb-6
        transition-transform duration-300
        hover:-translate-y-2 hover:shadow-2xl md:w-60 lg:w-70 xl:w-89
      `}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <img
                src={src}
                alt={caption}
                className="w-full h-56 md:h-68 lg:h-80 xl:h-99 object-cover rounded-md shadow-inner"
            />
            <div className="mt-3 text-center text-[#353767] font-semibold text-[17px]"></div>
        </div>
    );
}