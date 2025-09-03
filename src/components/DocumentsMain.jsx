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
                            <button className="cursor-pointer border-[#353767] rounded-[13px] bg-[#353767] text-white px-3 py-1">{t("prezemi")}</button>
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}