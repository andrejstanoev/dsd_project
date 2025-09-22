import React, {useState} from "react";

export default function ImagesGallery({images}) {
    const [current, setCurrent] = useState(0);

    function handlePreviousImg(){
        if (current === 0){
            setCurrent(images.length-1)
        }
        else{
            setCurrent(curr=>curr-1)
        }

    }

    function handleNextImg(){
        if (current === images.length-1){
            setCurrent(0)
        }
        else{
            setCurrent(curr=>curr+1)
        }
    }
    return (
        <div
            className="relative w-[300px] sm:w-[370px] md:w-[400px] lg:w-[430px] xl:w-[500px] 2xl:w-[570px] h-[400px] sm:h-[420px] lg:h-[440px] xl:h-[480px] 2xl:h-[500px] mx-auto overflow-hidden rounded-xl shadow-lg">


            {images.map((img, idx) => (
                <>
                    <img
                        key={img.name}
                        src={img.img}
                        className={` cursor-pointer absolute w-full h-full object-cover transition-all duration-700 ease-in-out
              ${idx === current ? "opacity-100 scale-100" : "opacity-0 scale-95 z-0"}
            `}
                        alt={`slika ${idx + 1}`}
                    />
                </>
            ))}
            <button onClick={handlePreviousImg}
                    className=" cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#a3a5d2]/50 backdrop-blur-md hover:bg-[#9596d3] rounded-md w-12 h-12 p-2 shadow-lg">
                {/*levo*/}
                <svg style={{
                    color: "#5c5eaa"
                }} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"
                     className="-translate-x-1.5 -translate-y-1.5">
                    <path fill="currentColor"
                          d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"/>
                </svg>
            </button>
            {/*desno*/}
            <button onClick={handleNextImg}
                    className=" cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#a3a5d2]/50 backdrop-blur-md hover:bg-[#9596d3] rounded-md w-12 h-12 p-2 shadow-lg">
                <svg style={{
                    color: "#5c5eaa"
                }} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"
                     className="-translate-x-1 -translate-y-1.5">
                    <path fill="currentColor"
                          d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"/>
                </svg>
            </button>
        </div>
    )
}