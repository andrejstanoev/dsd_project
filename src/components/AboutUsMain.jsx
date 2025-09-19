import React from "react";
import { useTranslation } from 'react-i18next';
import AccordionItem from "./AccordionItem.jsx";
import ContactCard from "./ContactCard.jsx";
import {useDSD} from "../contexts/DSDContext.jsx";
export default function AboutUsMain() {
    const { t } = useTranslation();
    const {currentLanguage} = useDSD()

    const contacts =[
        {
            name:"Христина Димова Грнчароска",
            jobTitle:t("sovetnikZaOpstiRaboti"),
            phone:"078 411 152",
            email:"hristina.dimova.grncaroska@dsdskopje.mk"
        },
        {
            name:"Билјана Стојанова Драгановска",
            jobTitle:t("rakovoditelNaOdelenieHR"),
            phone:"078 360 279",
            email:"biljana.stojanova@dsdskopje.mk"
        },
        {
            name:"Марина Карличиќ",
            jobTitle:t("rakovoditelZaSmestuvanje"),
            phone:"075 284 386",
            email:"marina.karlicik@dsdskopje.mk"
        },
        {
            name:"Никола Тодоровски",
            jobTitle:t("rakovoditelZaPomoshnoTehnickiRaboti"),
            phone:"075 284 451",
            email:"nikola.todorovski@dsdskopje.mк"
        }
    ]

    return (
        <div className="mt-3 mb-6 flex flex-col">

            <div className="relative">
                <img className="w-full h-[300px] lg:h-[500px] object-cover" src="src/images/ZA_nas_slika%201.png"
                     alt="studenti"/>
                <div className="absolute inset-0 bg-[#5c5eaa]/50 "/>
                <p className=" text-[#353767] bg-[#a3a5d2]/30 backdrop-blur-md  rounded-[15px] lg:text-[38px] text-lg p-2 font-bold text-center bottom-8 md:bottom-24 -translate-x-1/2 left-1/2 z-10 absolute max-w-[90%]">{t("zanasRecenica")}</p>
            </div>

            <div
                className="grid grid-cols-2 gap-6 justify-items-center lg:flex lg:justify-center lg:gap-x-25 mt-8 px-5 flex-wrap">
                {[
                    {number: "170", label: t("vraboteni")},
                    {number: "12 000", label: t("smesteniStudenti")},
                    {number: "67", label: t("godiniPostoenje")},
                    {number: "100%", label: t("pasijaZaUspeh")},
                ].map((item, i) => (
                    <div
                        key={i}
                        className="relative w-[155px] h-[155px] flex flex-col justify-center items-center
                 rounded-full bg-purple/30 backdrop-blur-[25px] border border-[#F4F5FA]/50
                 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,1)] overflow-hidden">

                        {/* before (prv red) */}
                        <div
                            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

                        {/* after (levo) */}
                        <div
                            className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/80 via-transparent to-white/30"></div>

                        {/* content */}
                        <p className="text-lg lg:text-2xl font-bold text-[#353767]">{item.number}</p>
                        <p className="text-sm lg:text-lg text-[#353767] mt-1 text-center">{item.label}</p>
                    </div>
                ))}
            </div>


            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("misijaIVizija")}
                    </div>
                </div>

                <div className="lg:text-[22px] xl:text-[25px]  mt-4 ml-9 mr-9">
                    {t("misijata")}
                </div>

            </div>

            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("seZaUdobenZivot")}
                    </div>
                </div>

                <div className=" mt-4 ml-9 mr-9 space-y-3">

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="#fff"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2"/>

                            <path
                                fill="#000"
                                d="M10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                        </svg>
                        <p className="lg:text-[19px] xl:text-[25px]">{t("kvalitetnoSmestuvanje")}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="#fff"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2"/>

                            <path
                                fill="#000"
                                d="M10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                        </svg>
                        <p className="lg:text-[19px] xl:text-[25px]">{t("organiziranaIshrana")}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="#fff"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2"/>

                            <path
                                fill="#000"
                                d="M10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                        </svg>
                        <p className="lg:text-[19px] xl:text-[25px]">{t("zdrastvenaGriza")}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="#fff"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2"/>

                            <path
                                fill="#000"
                                d="M10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                        </svg>
                        <p className="lg:text-[19px] xl:text-[25px]">{t("kulturnoZabavniAktivnosti")}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="#fff"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2"/>

                            <path
                                fill="#000"
                                d="M10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                        </svg>
                        <p className="lg:text-[19px] xl:text-[25px]">{t("sportskiAktivnosti")}</p>
                    </div>

                </div>

            </div>

            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("direktorNaDSDSKopje")}
                    </div>
                </div>

                <div
                    className="mt-4 mx-9 px-9 py-3 lg:px-12 flex flex-col md:flex-row  lg:justify-start gap-6 bg-gradient-to-br from-[#b8baf2] shadow-xl shadow-[#6769b7]/50 to-[#a3a5d2] border border-white/20 rounded-[15px]">
                    <div>
                        <img src="src/images/direktor_slika%201.png" className="w-full max-w-[350px] h-[300px]"
                             alt="Директор"/>
                    </div>
                    <div className="text-10px lg:text-[20px]  xl:text-[22px] pt-6 lg:pt-8 px-4 lg:px-6  lg:w-2/3 ">
                        {t("tekstsZaDirektorot")}
                    </div>
                </div>

                <div className="py-6 px-11">
                    <AccordionItem title={t("rabotnoIskustvo")} body={t("rabotnoIskustvoDirektor")} color="#FFD166"/>
                    <AccordionItem title={t("proekti")} body={t("proektiDirektor")} color="#FFD166"/>
                </div>

            </div>

            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("organizacija")}
                    </div>
                </div>

                <div className="mt-4 px-9 grid grid-cols-1 gap-x-10 gap-y-10 justify-items-center
                  lg:grid-cols-2">
                    {contacts.map(c => (
                        <ContactCard
                            key={c.email}
                            name={c.name}
                            jobTitle={c.jobTitle}
                            phone={c.phone}
                            email={c.email}
                        />
                    ))}
                </div>

            </div>

            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("opstiInformacii")}
                    </div>
                </div>

                <div className=" lg:text-[22px] xl:text-[25px] mt-4 px-9 whitespace-pre-line ">
                    {t("opstiInformaciiTekst")}
                </div>

            </div>

            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("organizacioniEdinici")}
                    </div>
                </div>

                <div className=" lg:text-[22px] xl:text-[25px] mt-4 px-9 whitespace-pre-line space-y-5 ">
                    {t("organizacioniEdiniciTekst1")}
                    <div className="py-3 px-5 space-y-4">
                        <p><span>&#9679;</span> {t("dsdKuzman")}</p>
                        <p><span>&#9679;</span> {t("dsdGoce")}</p>
                        <p><span>&#9679;</span> {t("dsdStiv")}</p>
                    </div>
                    {t("organizacioniEdiniciTekst2")}
                </div>

            </div>

            <div className=" px-4 lg:px-23 pt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div
                        className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                        {t("organogram")}
                    </div>
                </div>

                <div className="px-8 flex justify-center items-center">
                    {currentLanguage === "mk" ?
                        <img alt="органограм" src="src/images/organogram_mk.png"/> : currentLanguage === "en" ?
                            <img alt="органограм" src="src/images/organogram_en.png"/> :
                            <img alt="органограм" src="src/images/organogram_sq.png"/>}

                </div>

            </div>

        </div>
    )
}