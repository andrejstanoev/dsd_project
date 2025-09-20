import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import goce1slika from "../images/goce/goce1slika.jpg"
import kuzmanSlika from "../images/studenstki-dom-kuzman-josifovski-pitu-1.jpg"
import stivSlika from "../images/stiv.jpg"

export default function HomepageMain() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const navigate = useNavigate()
    const { t } = useTranslation();
    const images = [
        {
            name:`${t("studentskiDom")} „Гоце Делчев“`,
            img:goce1slika,
            page:"goce"
        },
        {
            name:`${t("studentskiDom")} „Кузман Јосифовски Питу“`,
            img:kuzmanSlika,
            page:"kuzman"
        },
        {
            name:`${t("studentskiDom")} „Стив Наумов“`,
            img:stivSlika,
            page:"stiv"
        }
    ];
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

    //old class for border: border-1 border-[#353767]

    return (
        <main className=" flex flex-col items-center py-16 pb-7" >
            <div className="pb-14 ">
                <h1 className="text-[#5c5eaa] text-4xl font-['Poppins'] md:text-[30px] lg:text-[35px] xl:text-[44px] text-[25px] px-5 py-3 rounded-[15px] bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-xl shadow-[#6769b7]/40 shadow-xl text-center text-[#353767] font-bold">{t("greetingHomePage")}</h1>
            </div>
            <div className="relative w-full max-w-full sm:max-w-[calc(90vw-8rem)] 2xl:h-[630px] h-[420px] xl:h-[480px] mx-auto overflow-hidden rounded-xl shadow-lg">
                <p className=" text-center w-full tracking-wide px-4 py-2 absolute top-4 z-2  text-[25px] xl:text-[27px] bg-slate-400/30 rounded shadow text-xl font-semibold ">{images[current].name}</p>

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
                <button onClick={handlePreviousImg}  className=" cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#a3a5d2]/50 backdrop-blur-md hover:bg-[#9596d3] rounded-md w-12 h-12 p-2 shadow-lg">
                    {/*levo*/}
                    <svg style={{
                        color: "#5c5eaa"
                    }} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"  className="-translate-x-1.5 -translate-y-1.5">
                        <path fill="currentColor"
                              d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"/>
                    </svg>
                </button>
                {/*desno*/}
                <button onClick={handleNextImg} className=" cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#a3a5d2]/50 backdrop-blur-md hover:bg-[#9596d3] rounded-md w-12 h-12 p-2 shadow-lg">
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