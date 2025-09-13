import React from "react";
import AccordionItem from "./AccordionItem.jsx";
import { useTranslation } from 'react-i18next';
import pravilnikPdf from "../assets/pravilnik.pdf"

export default function StudentsSectionHPV2(){
    const { t } = useTranslation();
    const elementi = [
        {
            id: 1,
            title:`${t("kakoDaAplicirash")} (линк до е-услуги + кратко упатство со слики)`,
            body:`<a target="_blank" class="text-blue-600 underline" href="https://e-uslugi.mon.gov.mk/">https://e-uslugi.mon.gov.mk/</a>`
        },
        {
            id: 2,
            title:`${t("cpp")}`,
            body:`<dl class="[&>dt]:font-semibold [&>dt]:text-slate-800 [&>dd]:text-slate-700 [&>dd]:leading-relaxed">
                    <dt>${t("p1")}</dt>
                    <dd>${t("o1")}</dd>
                    
                    <dt>${t("p2")}</dt>
                    <dd>${t("o2")}</dd>
                    
                    <dt>${t("p3")}</dt>
                    <dd>${t("o3")}</dd>
                    
                    <dt>${t("p4")}</dt>
                    <dd>${t("o4")}</dd>
                    
                    <dt>${t("p5")}</dt>
                    <dd>${t("o5")}</dd>
                    
                    <dt>${t("p6")}</dt>
                    <dd>${t("o6")}</dd>
                </dl>`
        },
        {
            id: 3,
            title:`${t("vnatresenPravilnik")}`,
            body:`<a href="${pravilnikPdf}" download="Pravilnik_DSD_Skopje.pdf" class="text-blue-600 underline" target="_blank" rel="noopener">
             ${t("vnatresenPravilnik")} (PDF)
           </a>\``
        },
        {
            id: 4,
            title:`${t("problemiPrijavi")} (линк до секцијата на управници и студентски управници во „За нас“)`,
            body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
    ]
    return(
        <div className="w-full max-w-screen-xl mx-auto px-4 2xl:py-8">

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pr-2">
                    <path fill="#5c5eaa"
                          d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
                </svg>

                <div className=" text-[#2c2c2c] text-[25px] xl:text-[30px] font-semibold font-['Poppins']">
                    {t("zaStudenti")}
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-4 ml-4">
                {elementi.map(el => <AccordionItem title={el.title} body={el.body} color="#5c5eaa" key={el.id}/>)}
            </div>

            <div className="w-full px-4 py-5 my-10">
                <div
                    className="mx-auto max-w-7xl bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] border border-white/20 rounded-[15px] shadow-xl shadow-[#6769b7]/50 p-6 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8">

                    {/* Citat */}
                    <div className="text-[#ebecf3] text-xl md:text-2xl xl:text-[25px] font-semibold md:w-1/2">
                        {t("citat")}
                    </div>

                    {/* slika del */}
                    <div className="relative md:w-1/2 w-full">
                        <img
                            src="src/images/studenti2.png"
                            alt="Студенти"
                            className="w-full h-auto rounded-[30px] border-1 shadow-xl border-[#5c5eaa]"
                        />
                        <div className="absolute inset-0 bg-[#5c5eaa]/50 rounded-[30px]"/>
                    </div>

                </div>
            </div>

        </div>
    )
}