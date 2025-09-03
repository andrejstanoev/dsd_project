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
            title:`${t("cpp")} (Кога се објавуваат резултати, како да пријавиш дефект, итн.)`,
            body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            id: 3,
            title:`${t("vnatresenPravilnik")} (PDF или HTML)`,
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
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                </svg>
                <div className=" text-[#2c2c2c] text-[25px] font-semibold font-['Poppins']">
                    {t("zaStudenti")}
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-4 ml-4">
                {elementi.map(el => <AccordionItem title={el.title} body={el.body} color="#5c5eaa" key={el.id}/>)}
            </div>

            <div className="w-full px-4 py-5 my-10">
                <div
                    className="mx-auto max-w-7xl bg-[#a3a5d2] border-4 border-[#5c5eaa] rounded-[15px] shadow-lg p-6 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8">

                    {/* Citat */}
                    <div className="text-[#ebecf3] text-xl md:text-2xl font-semibold font-['Inter'] md:w-1/2">
                        {t("citat")}
                    </div>

                    {/* slika del */}
                    <div className="relative md:w-1/2 w-full">
                        <img
                            src="src/images/studenti2.png"
                            alt="Студенти"
                            className="w-full h-auto rounded-[30px] border-4 md:border-[10px] border-[#5c5eaa]"
                        />
                        <div className="absolute inset-0 bg-[#5c5eaa]/50 rounded-[30px]"/>
                    </div>

                </div>
            </div>

        </div>
    )
}