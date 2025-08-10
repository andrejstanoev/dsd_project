import React from "react";
import { useTranslation } from 'react-i18next';
export default function AboutUsMain() {
    const { t } = useTranslation();
    return (
        <div className="mt-3 mb-6 flex flex-col">

            <div className="relative">
                <img className="w-full h-[300px] lg:h-[500px] object-cover"  src="src/images/ZA_nas_slika%201.png" alt="studenti"/>
                <div className="absolute inset-0 bg-[#5c5eaa]/50 "/>
                <p className=" text-[#353767] bg-[#a3a5d2]/60 rounded-[15px] lg:text-[36px] p-2 font-bold text-center bottom-24 -translate-x-1/2 left-1/2 z-10 absolute w-fit whitespace-nowrap" >{t("zanasRecenica")}</p>
            </div>

            <div className="flex justify-around my-8 mx-5">

                <div className=" rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">170</p>
                    <p className="text-[14px] lg:text-[20px]">{t("vraboteni")}</p>
                </div>

                <div className=" rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">12 000</p>
                    <p className="text-[14px] lg:text-[20px]">{t("smesteniStudenti")}</p>
                </div>

                <div className=" rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">67</p>
                    <p className="text-[14px] lg:text-[20px]">{t("godiniPostoenje")}</p>
                </div>

                <div className=" rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">100%</p>
                    <p className="text-[14px] lg:text-[20px]">{t("pasijaZaUspeh")}</p>
                </div>

            </div>

            <div className="mx-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[30px] font-semibold font-['Poppins']">
                        {t("misijaIVizija")}
                    </div>
                </div>

                <div className="lg:text-[25px] text-[#353767] mt-4 ml-9 mr-9">
                    {t("misijata")}
                </div>

            </div>
        </div>
    )
}