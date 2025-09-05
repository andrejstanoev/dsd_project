import React from "react";
import {useTranslation} from "react-i18next";

export default function DocumentCard({tekst, url}) {
    const {t} = useTranslation();
    return (
        <div className=" flex flex-col w-[320px]   bg-violet-300/90 rounded-[15px] overflow-hidden shadow-2 xl">
            <div className="py-4 px-2 flex-1 ">
                <p className="text-[30px] text-center whitespace-normal break-words">
                    {tekst}
                </p>
            </div>
            <div className="mt-3 flex justify-center bg-slate-600 p-4">
                <button
                    type="button"
                    onClick={() => window.open(url, "_blank", "noreferrer")}
                    className="text-[20px] rounded-[13px] bg-[#353767] text-white px-4 py-2 cursor-pointer"
                >
                    {t("pregledaj")}
                </button>
            </div>
        </div>
    )
}