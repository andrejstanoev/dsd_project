import React from "react";
import { useTranslation } from 'react-i18next';
import AccordionItem from "./AccordionItem.jsx";
import ContactCard from "./ContactCard.jsx";
export default function AboutUsMain() {
    const { t } = useTranslation();

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
                <p className=" text-[#353767] bg-[#a3a5d2]/30 backdrop-blur-md  rounded-[15px] lg:text-[36px] text-lg p-2 font-bold text-center bottom-8 md:bottom-24 -translate-x-1/2 left-1/2 z-10 absolute max-w-[90%]">{t("zanasRecenica")}</p>
            </div>

            <div className=" grid grid-cols-2 gap-x-8 justify-items-center lg:flex lg:justify-center gap-y-4 lg:gap-x-20 mt-8 px-5">

                <div
                    className=" min-w-[120px] rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">170</p>
                    <p className="text-[14px] lg:text-[20px]">{t("vraboteni")}</p>
                </div>

                <div
                    className=" min-w-[120px] rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">12 000</p>
                    <p className="text-[14px] lg:text-[20px]">{t("smesteniStudenti")}</p>
                </div>

                <div
                    className="min-w-[120px] rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">67</p>
                    <p className="text-[14px] lg:text-[20px]">{t("godiniPostoenje")}</p>
                </div>

                <div
                    className="min-w-[120px] rounded-[15px] flex flex-col items-center w-fit bg-[#a3a5d2]/60 text-[#353767] px-2 lg:px-8">
                    <p className="text-[17px] lg:text-[28px] font-bold">100%</p>
                    <p className="text-[14px] lg:text-[20px]">{t("pasijaZaUspeh")}</p>
                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("misijaIVizija")}
                    </div>
                </div>

                <div className="lg:text-[22px]  mt-4 ml-9 mr-9">
                    {t("misijata")}
                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
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
                        <p className="lg:text-[19px]">{t("kvalitetnoSmestuvanje")}</p>
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
                        <p className="lg:text-[19px]">{t("organiziranaIshrana")}</p>
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
                        <p className="lg:text-[19px]">{t("zdrastvenaGriza")}</p>
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
                        <p className="lg:text-[19px]">{t("kulturnoZabavniAktivnosti")}</p>
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
                        <p className="lg:text-[19px]">{t("sportskiAktivnosti")}</p>
                    </div>

                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("direktorNaDSDSKopje")}
                    </div>
                </div>

                <div className="mt-4 mx-9 px-9 py-3 lg:px-12 flex flex-col lg:flex-row  lg:justify-start gap-6 bg-[#a3a5d2] border-4 border-[#5c5eaa] rounded-[15px]">
                    <div>
                        <img src="src/images/direktor_slika%201.png" className="w-full max-w-[350px] h-[300px]"
                             alt="Директор"/>
                    </div>
                    <div className="text-15px lg:text-[20px] px-4 lg:px-6  w-2/3 ">
                        {t("tekstsZaDirektorot")}
                    </div>
                </div>

                <div className="py-6 px-11">
                    <AccordionItem title={t("rabotnoIskustvo")} body={t("rabotnoIskustvoDirektor")} color="#FFD166"/>
                    <AccordionItem title={t("proekti")} body={t("proektiDirektor")} color="#FFD166"/>
                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("organizacija")}
                    </div>
                </div>

                <div className="mt-4 px-9 flex flex-wrap gap-x-10 gap-y-10 justify-center">

                    {contacts.map(c => <ContactCard name={c.name} jobTitle={c.jobTitle} phone={c.phone}
                                                    email={c.email}/>)}
                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("opstiInformacii")}
                    </div>
                </div>

                <div className=" lg:text-[22px] mt-4 px-9 whitespace-pre-line ">
                    {t("opstiInformaciiTekst")}
                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("organizacioniEdinici")}
                    </div>
                </div>

                <div className=" lg:text-[22px] mt-4 px-9 whitespace-pre-line space-y-5 ">
                    {t("organizacioniEdiniciTekst1")}
                    <div className="py-3 px-5 space-y-4">
                        <p><span>&#9679;</span> {t("dsdKuzman")}</p>
                        <p><span>&#9679;</span> {t("dsdGoce")}</p>
                        <p><span>&#9679;</span> {t("dsdStiv")}</p>
                    </div>
                    {t("organizacioniEdiniciTekst2")}
                </div>

            </div>

            <div className="mx-10 mt-8">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                        {t("organogram")}
                    </div>
                </div>

                <div className="px-8">
                    <img alt="органограм" src="src/images/organogram2.png"/>
                </div>

            </div>

        </div>
    )
}