import React from "react";
import {useTranslation} from "react-i18next";
import DocumentCard from "./DocumentCard.jsx";
import baranje from "../assets/Барање-за-пристап-до-информации-од-јавен-карактер.docx"
import postapkaZaVseluvanje from "../assets/ПОСТАПКА ЗА ВСЕЛУВАЊЕ за гоце 2025.docx"
import interenOglas from "../assets/интерен-оглас-012022.pdf"
import prijavaInterenOglas from "../assets/Пријава-за-интерен-оглас-ЈП-Водовод-и-канализација-003.pdf"
import odlukaZaIzbor from "../assets/одлука-за-избор.pdf"
export default function DocumentsMain() {
    const {t} = useTranslation();

    const akti = [{
        tekst: t("interenOglas"), url: interenOglas
    }, {
        tekst: t("prijavaZaInterenOglas"), url: prijavaInterenOglas
    }, {
        tekst: t("odlukaZaUnapreduvanje"), url: odlukaZaIzbor
    }]

    return (<div className="flex-1 flex flex-col pt-5">

            <div className=" px-4 lg:px-23 pt-8 lg:flex lg:gap-10 lg:items-center lg:h-30">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" className="mb-[27px]  lg:mb-[0px]">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("baranjeZaPristapDoInformacii")}
                    </div>
                </div>

                <div className="text-[18px] lg:text-[22px] mt-4 px-9 whitespace-pre-line text-center ">
                    {/*<p className="xl:text-[26px]"> {t("prezemiBaranjeZaPristapDoInformacii")}</p>*/}
                    <p className="pt-4  ">
                        <a
                            href={baranje}
                            download="Барање_за_пристап_информации.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button
                                className="group relative cursor-pointer border-2 lg:mb-[20px] border-[#353767] rounded-[13px] bg-[#353767] text-white px-3 py-1 md:px-5 md:py-2 font-semibold overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#353767]"
                            >
                                {/* Текст */}
                                <span
                                    className="text-[17px] md:text-[24px] relative z-10 transform transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:opacity-0"
                                >
                                  {t("prezemi")}
                                </span>

                                {/* Стрелка */}
                                <span
                                    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none
                 opacity-0 transform translate-x-2 transition-all duration-300 ease-in-out
                 group-hover:opacity-100 group-hover:translate-x-0"
                                >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                  >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v12m0 0l4-4m-4 4-4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </span>
                            </button>
                        </a>

                    </p>
                </div>
            </div>

            <div className=" px-4 lg:px-23 pt-8 lg:flex lg:gap-6 lg:items-center lg:h-30">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" className="mb-[27px]  lg:mb-[0px]">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("postapkaZaVseluvanjeVoGoce")}
                    </div>
                </div>

                <div className="text-[18px] lg:text-[22px] mt-4 px-9 whitespace-pre-line text-center ">
                    {/*<p className="xl:text-[26px]">{t("prezemiPostapkaZaVseluvanjeVoGoce")}</p>*/}
                    <p className="pt-4  ">
                        <a
                            href={postapkaZaVseluvanje}
                            download="Постапка_за_вселуванје_гоце.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button
                                className="group relative cursor-pointer border-2 border-[#353767] rounded-[13px] bg-[#353767] text-white px-3 py-1 md:px-5 md:py-2 lg:mb-[20px] font-semibold overflow-hidden transition-all duration-300 ease-in-out hover:bg-white hover:text-[#353767]"
                            >
                                {/* Текст */}
                                <span
                                    className=" text-[17px] md:text-[24px] relative z-10 transform transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:opacity-0"
                                >
                                  {t("prezemi")}
                                </span>

                                {/* Стрелка */}
                                <span
                                    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none
                 opacity-0 transform translate-x-2 transition-all duration-300 ease-in-out
                 group-hover:opacity-100 group-hover:translate-x-0"
                                                            >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                  >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v12m0 0l4-4m-4 4-4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </span>
                            </button>
                        </a>

                    </p>
                </div>

            </div>


            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("akti")}
                    </div>
                </div>

                <div
                    className="mt-4 mb-5 px-9 whitespace-pre-line text-center flex flex-col items-center lg:items-stretch md:flex-row gap-6 md:gap-8 ">

                    {/*<div*/}
                    {/*    className=" flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-violet-300/90 rounded-xl  shadow-xl">*/}
                    {/*    <div className="py-4 px-2 flex-1 ">*/}
                    {/*        <p className="text-[30px] text-center leading-snug whitespace-normal break-words">*/}
                    {/*            {t("interenOglas")}*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-3 flex justify-center bg-slate-300 p-4">*/}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            onClick={() => window.open("src/assets/интерен-оглас-012022.pdf", "_blank", "noreferrer")}*/}
                    {/*            className="text-[20px] rounded-[13px] bg-[#353767] text-white px-3 py-1 cursor-pointer"*/}
                    {/*        >*/}
                    {/*            {t("pregledaj")}*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div*/}
                    {/*    className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-violet-300/90 rounded-xl  shadow-xl">*/}
                    {/*    <div className="py-4 px-2 flex-1">*/}
                    {/*        <p className="text-center text-[30px] leading-snug whitespace-normal break-words">*/}
                    {/*            {t("prijavaZaInterenOglas")}*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-3 flex justify-center bg-slate-300 p-4">*/}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            onClick={() => window.open("src/assets/Пријава-за-интерен-оглас-ЈП-Водовод-и-канализација-003.pdf", "_blank", "noreferrer")}*/}
                    {/*            className="text-[20px] rounded-[13px] bg-[#353767] text-white px-3 py-1 cursor-pointer"*/}
                    {/*        >*/}
                    {/*            {t("pregledaj")}*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div*/}
                    {/*    className=" flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-violet-300/90 rounded-xl  shadow-xl">*/}
                    {/*    <div className="py-4 px-2 flex-1">*/}
                    {/*        <p className="text-center text-[30px] leading-snug whitespace-normal break-words">*/}
                    {/*            {t("odlukaZaUnapreduvanje")}*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-3 flex justify-center bg-slate-300 p-4">*/}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            onClick={() => window.open("src/assets/одлука-за-избор.pdf", "_blank", "noreferrer")}*/}
                    {/*            className="text-[20px] rounded-[13px] bg-[#353767] text-white px-3 py-1 cursor-pointer"*/}
                    {/*        >*/}
                    {/*            {t("pregledaj")}*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {akti.map(akt => <DocumentCard tekst={akt.tekst} url={akt.url}/>)}
                </div>

            </div>

        </div>)
}