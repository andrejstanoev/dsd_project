import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";

const images = [
    {
        name:"Студентски дом „Гоце Делчев“",
        img:"https://makfax.com.mk/wp-content/uploads/2017/06/Studentski-dom-Goce-Delcev.jpg",
        page:"goce"
    },
    {
        name:"Студентски дом „Кузман Јосифовски Питу“",
        img:"https://sdk.mk/wp-content/uploads/2021/01/studenstki-dom-kuzman-josifovski-pitu-1.jpg",
        page:"kuzman"
    },
    {
        name:"Студентски дом „Стив Наумов“",
        img:"https://www.radiomof.mk/wp-content/uploads/2021/02/%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8-%D0%B4%D0%BE%D0%BC-%D0%A1%D1%82%D0%B8%D0%B2-%D0%9D%D0%B0%D1%83%D0%BC%D0%BE%D0%B2-%D0%94%D0%A1%D0%94-%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5.jpg",
        page:"stiv"
    }
];

export default function HomepageMain() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const navigate = useNavigate()

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

    function handleClickImage(){
        navigate(images[current].page)
        console.log(images[current].page)
    }

    useEffect(() => {

        timeoutRef.current = setTimeout(() => {
            setCurrent((curr) => (curr + 1) % images.length);
        }, 5000);

        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <main className="  flex flex-col items-center 2xl:py-8 pb-7" >
            <h1 className=" text-center text-[#5c5eaa] mt-10 text-4xl mb-15 mt-5 font-bold">Нашите студентски домови</h1>
            <div className="relative w-full max-w-full sm:max-w-[calc(100vw-8rem)] 2xl:h-[520px] h-[420px]  mx-auto overflow-hidden rounded-xl shadow-lg">
                <p className=" text-center w-full tracking-wide px-4 py-2 absolute top-4 z-2  text-[25px] bg-slate-400/30 rounded shadow text-xl font-semibold ">{images[current].name}</p>

                {images.map((img, idx) => (
                    <>
                    <img
                        onClick={handleClickImage}
                        key={img.name}
                        src={img.img}
                        className={` cursor-pointer absolute w-full h-full object-cover transition-all duration-700 ease-in-out
              ${idx === current ? "opacity-100 scale-100" : "opacity-0 scale-95 z-0"}
            `}
                        alt={`slika ${idx + 1}`}
                    />
                    </>
                ))}
                <button onClick={handlePreviousImg}  className=" cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#a3a5d2] hover:bg-[#9596d3] rounded-md w-12 h-12 p-2 shadow">
                    {/*levo*/}
                    <svg style={{
                        color: "#5c5eaa"
                    }} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"  className="-translate-x-1.5 -translate-y-1.5">
                        <path fill="currentColor"
                              d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"/>
                    </svg>
                </button>
                {/*desno*/}
                <button onClick={handleNextImg} className=" cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#a3a5d2] hover:bg-[#9596d3] rounded-md w-12 h-12 p-2 shadow">
                    <svg style={{
                        color: "#5c5eaa"
                    }} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" className="-translate-x-1 -translate-y-1.5">
                        <path fill="currentColor"
                              d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"/>
                    </svg>
                </button>
            </div>

        </main>
    );
}