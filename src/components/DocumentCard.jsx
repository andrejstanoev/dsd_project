import React from "react";
import {useTranslation} from "react-i18next";

export default function DocumentCard({tekst, url}) {
    const {t} = useTranslation();
    return (
        <div className="flex flex-col  max-w-3xs rounded-[20px] overflow-hidden bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-2xl shadow-[#6769b7]/70 border border-white/20">
            <div className="py-4 px-2 flex-1">
                <p className="text-[19px] md:text-[21px] lg:text-[22px] xl:text-[26px] text-center whitespace-normal break-words">
                    {tekst}
                </p>
            </div>

            <div className="mt-3 flex justify-center bg-slate-600 p-4">
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center justify-center rounded-[13px]
                 bg-[#353767] text-white px-4 py-2  font-semibold
                 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
                 hover:bg-white hover:text-[#353767]"
                >
                    {/* Текст */}
                    <span className="relative z-10 transform transition-all duration-300 ease-in-out
                       group-hover:-translate-x-2 group-hover:opacity-0 text-[17px] md:text-[24px]">
                        {t("pregledaj")}
                    </span>

                    {/* Икона */}
                    <span className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none
                       opacity-0 transform scale-75 transition-all duration-300 ease-in-out
                       group-hover:opacity-100 group-hover:scale-100">
                        <div className="bg-white p-2 rounded-full">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-[#353767]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                          >
                              <path
                                  d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zM12 17a5 5 0 110-10 5 5 0 010 10z"/>
                            <circle cx="12" cy="12" r="2.5" fill="#353767"/>
                          </svg>
                        </div>
                    </span>
                </a>
            </div>
        </div>
    )
}