import React from "react";
import {useTranslation} from "react-i18next";

export default function DocumentsMain() {
    const { t } = useTranslation();
    return (
        <div className="flex-1 flex flex-col pt-5">

            <div className="px-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("baranjeZaPristapDoInformacii")}
                    </div>
                </div>

                <div className=" lg:text-[22px] mt-4 px-9 whitespace-pre-line text-center ">
                    <p>{t("prezemiBaranjeZaPristapDoInformacii")}</p>
                    <p className="pt-4  ">
                        <a href="src/assets/Барање-за-пристап-до-информации-од-јавен-карактер.docx"
                           download="Барање_за_пристап_информации.docx"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block "
                        >
                            <button
                                className="cursor-pointer border-[#353767] rounded-[13px] bg-[#353767] text-white px-3 py-1">{t("prezemi")}</button>
                        </a>
                    </p>
                </div>
            </div>

            <div className="px-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("postapkaZaVseluvanjeVoGoce")}
                    </div>
                </div>

                <div className=" lg:text-[22px] mt-4 px-9 whitespace-pre-line text-center ">
                    <p>{t("prezemiPostapkaZaVseluvanjeVoGoce")}</p>
                    <p className="pt-4  ">
                        <a href="src/assets/ПОСТАПКА%20ЗА%20ВСЕЛУВАЊЕ%20за%20гоце%202025.docx"
                           download="Постапка_за_вселуванје_гоце.docx"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block "
                        >
                            <button
                                className="cursor-pointer border-[#353767] rounded-[13px] bg-[#353767] text-white px-3 py-1">{t("prezemi")}</button>
                        </a>
                    </p>
                </div>

            </div>


            <div className="px-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("akti")}
                    </div>
                </div>

                <div className="mt-4 mb-5 px-9 whitespace-pre-line text-center flex flex-col md:flex-row gap-6 md:gap-8 ">

                    <div
                        className=" flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-violet-300/90 rounded-xl  shadow-xl">
                        <div className="py-4 px-2 flex-1">
                            <p className="text-center text-base sm:text-lg leading-snug whitespace-normal break-words">
                                {t("interenOglas")}
                            </p>
                        </div>
                        <div className="mt-3 flex justify-center bg-slate-300 p-4">
                            <button
                                type="button"
                                onClick={() => window.open("src/assets/интерен-оглас-012022.pdf", "_blank", "noreferrer")}
                                className="text-[20px] rounded-[13px] bg-[#353767] text-white px-3 py-1 cursor-pointer"
                            >
                                {t("pregledaj")}
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-violet-300/90 rounded-xl  shadow-xl">
                        <div className="py-4 px-2 flex-1">
                            <p className="text-center text-base sm:text-lg leading-snug whitespace-normal break-words">
                                {t("prijavaZaInterenOglas")}
                            </p>
                        </div>
                        <div className="mt-3 flex justify-center bg-slate-300 p-4">
                            <button
                                type="button"
                                onClick={() => window.open("src/assets/Пријава-за-интерен-оглас-ЈП-Водовод-и-канализација-003.pdf", "_blank", "noreferrer")}
                                className="text-[20px] rounded-[13px] bg-[#353767] text-white px-3 py-1 cursor-pointer"
                            >
                                {t("pregledaj")}
                            </button>
                        </div>
                    </div>

                    <div
                        className=" flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-violet-300/90 rounded-xl  shadow-xl">
                        <div className="py-4 px-2 flex-1">
                            <p className="text-center text-base sm:text-lg leading-snug whitespace-normal break-words">
                                {t("odlukaZaUnapreduvanje")}
                            </p>
                        </div>
                        <div className="mt-3 flex justify-center bg-slate-300 p-4">
                            <button
                                type="button"
                                onClick={() => window.open("src/assets/одлука-за-избор.pdf", "_blank", "noreferrer")}
                                className="text-[20px] rounded-[13px] bg-[#353767] text-white px-3 py-1 cursor-pointer"
                            >
                                {t("pregledaj")}
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}