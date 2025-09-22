import {useTranslation} from 'react-i18next';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LocationIcon from "./LocationIcon.jsx";
import React from "react";
import PhoneIcon from "./PhoneIcon.jsx";
import EmailIcon from "./EmailIcon.jsx";
import PolaroidPhoto from "./PolaroidPhoto.jsx";
import pravilnikPdf from "../assets/pravilnik.pdf"
import goce1slika from "../images/goce/goce1slika.jpg"
import goce2slika from "../images/goce/goce2slika.jpg"
import goce3slika from "../images/goce/goce3slika.jpg"
import goce4slika from "../images/goce/goce4slika.jpg"
import goce5slika from "../images/goce/goce5slika.jpg"
import goce6slika from "../images/goce/goce6slika.jpg"
import goce7slika from "../images/goce/goce7slika.jpg"
import goce8slika from "../images/goce/goce8slika.jpg"
import goce9slika from "../images/goce/goce9slika.jpg"
import dvToalet1 from "../images/goce/sobi/DvoKrevetnaSoToalet/goce7slika.jpg"
import dvToalet2 from "../images/goce/sobi/DvoKrevetnaSoToalet/goce-delcev-studentski-dom-9.jpg"
import dvToalet3 from "../images/goce/sobi/DvoKrevetnaSoToalet/toalet.jpg"
import dvToalet4 from "../images/goce/sobi/DvoKrevetnaSoToalet/toalet2.jpg"
import dvKujna1 from "../images/goce/sobi/DvoKrevetnaSoKujna/Goce1.jpg"
import dvKujna2 from "../images/goce/sobi/DvoKrevetnaSoKujna/20200214-kako-izgleda-renoviraniot-studentski-dom-goce-delchev-5.jpg"
import dvKujna3 from "../images/goce/sobi/DvoKrevetnaSoKujna/studentski-dom-goce-delcev.jpg"

export default function GoceMain() {
    const {t} = useTranslation();
    const responsive = {
        superLargeDesktop: {breakpoint: {max: 4000, min: 3000}, items: 5},
        desktop: {breakpoint: {max: 3000, min: 1024}, items: 3},
        tablet: {breakpoint: {max: 1024, min: 464}, items: 2},
        mobile: {breakpoint: {max: 464, min: 0}, items: 1},
    };
    return <div className="flex-1 flex flex-col pt-16">

        <div className="flex justify-center  ">
            <h1 className="text-[#5c5eaa] text-4xl font-['Poppins'] md:text-[30px] lg:text-[35px] xl:text-[44px] text-[25px] px-5 py-3 rounded-[15px] bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-xl shadow-[#6769b7]/40 shadow-xl text-center text-[#353767] font-bold">{t("studentskiDom")} “Гоце
                Делчев”</h1>
        </div>

        {/*karusel*/}
        <div className="py-12">
            <Carousel responsive={responsive} autoPlay={false} autoPlaySpeed={3000} infinite>
                <div><img className="h-[350px] w-[507px] px-3 rounded-[10px]" src={goce6slika}
                          alt="Slide 1"/></div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src={goce2slika} alt="Slide 2"/>
                </div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src={goce3slika} alt="Slide 3"/>
                </div>
                <div><img className="h-[350px] w-[507px] px-3 rounded-[10px]" src={goce4slika}
                          alt="Slide 1"/></div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src={goce5slika} alt="Slide 2"/>
                </div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src={goce1slika} alt="Slide 3"/>
                </div>
                <div><img className="h-[350px] w-[507px] px-3 rounded-[10px]" src={goce7slika}
                          alt="Slide 1"/></div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src={goce8slika} alt="Slide 2"/>
                </div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src={goce9slika} alt="Slide 3"/>
                </div>
            </Carousel>
        </div>

        {/*ikonki*/}
        <div
            className="mb-4 pt-6 px-10 grid grid-cols-2 gap-4 justify-items-center md:flex md:justify-center md:gap-x-7 lg:gap-x-8 lg:text-[19px] xl:text-[22px] xl:gap-x-10"
        >
            <div
                className="flex items-center text-[#353767] justify-center lg:w-[220px] w-[170px]  h-16 bg-[#F5C144] rounded-[15px] shadow-lg ring-2 ring-[#e5b42c] border border-[#e5b42c]
    transition-transform duration-300 hover:scale-105 hover:bg-[#FFD75A] text-[17px] lg:text-[24px] xl:text-[24px]"
            >
    <span className="pr-1">
      {/* иконка */}
    </span>
                {t("pridruziSe")}
            </div>

            <div
                className="flex items-center text-[#353767] justify-center lg:w-[220px] w-[170px] h-16 bg-[#F5C144] rounded-[15px] shadow-lg ring-2 ring-[#e5b42c] border border-[#e5b42c]
    transition-transform duration-300 hover:scale-105 hover:bg-[#FFD75A] text-[17px] lg:text-[24px] xl:text-[24px]"
            >
    <span className="pr-1">
      {/* иконка */}
    </span>
                {t("nedelnoMeni")}
            </div>

            <a
                href="https://www.google.com/maps/place/Goce+Delcev..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
            >
                <div
                    className="flex items-center text-[#353767] justify-center lg:w-[220px] w-[170px] h-16 bg-[#F5C144] rounded-[15px] shadow-lg ring-2 ring-[#e5b42c] border border-[#e5b42c]
      transition-transform duration-300 hover:scale-105 hover:bg-[#FFD75A] text-[17px] lg:text-[24px] xl:text-[24px]"
                >
      <span className="pr-1">
        {/* иконка */}
      </span>
                    {t("lokacija")}
                </div>
            </a>

            <a
                href="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%84%D0%B5..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
            >
                <div
                    className="flex items-center text-[#353767] justify-center lg:w-[220px] w-[170px] h-16 bg-[#F5C144] rounded-[15px] shadow-lg ring-2 ring-[#e5b42c] border border-[#e5b42c]
      transition-transform duration-300 hover:scale-105 hover:bg-[#FFD75A] text-[17px] lg:text-[24px] xl:text-[24px]"
                >
      <span className="pr-1">
        {/* иконка */}
      </span>
                    {t("kafeBarCitalna")}
                </div>
            </a>
        </div>



        {/*za domot*/}
        <div className="px-4 lg:px-23 pt-8">

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                </svg>
                <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                    {t("zadomot")}
                </div>
            </div>

            <div className=" lg:text-[22px] xl:text-[25px] mt-4 px-9 whitespace-pre-line ">
                {t("zaGoceDomotInfo")}
            </div>

        </div>

        <div className="px-4 lg:px-23 pt-8">
            <div className="flex flex-col items-center gap-y-4 md:flex-row md:justify-around xl:px-9">
                <a
                    href={pravilnikPdf}
                    download="Pravilnik_DSD_Skopje.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center border-2 border-[#353767]
             rounded-[13px] bg-[#353767] text-white px-3 py-1 font-semibold cursor-pointer

             overflow-hidden transition-all duration-300 ease-in-out
             hover:bg-white hover:text-[#353767]"
                >
                    {/* Текст */}
                    <span
                        className="relative z-10 transform transition-all duration-300 ease-in-out
               group-hover:-translate-x-2 group-hover:opacity-0 text-[19px] lg:text-[23px] xl:text-[25px]"
                    >
    {t("pravilnikZaDomuvanje")}
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
                </a>


                <p className=" flex items-center justify-center border-2 border-[#353767] rounded-[13px] bg-[#F5C144] text-[#353767] px-3 py-1 font-semibold
transition-transform duration-300 hover:scale-105 hover:bg-[#FFD75A] text-[19px] lg:text-[23px] xl:text-[25px]">
                    {/*<span>*/}
                    {/*    <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path*/}
                    {/*        fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/></svg>*/}
                    {/*</span>*/}
                    <span>{t("prijaviProblem")}</span>
                </p>
            </div>
        </div>

        {/*tipovi na sobi*/}
        <div className="px-4 lg:px-23 pt-8">

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                </svg>
                <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                    {t("tipoviNaSobi")}
                </div>
            </div>

            <div className="pt-4 px-9 space-y-4">

                <p className="space-x-2 lg:text-[20px]">
                    <span>&#9679;</span>
                    <span className="lg:text-[22px] xl:text-[25px]">{t("dvoKrevetnaToalet")}</span>
                </p>
                {/*sliki*/}
                <div className="flex flex-row gap-6 flex-wrap justify-center">
                    <PolaroidPhoto src={dvToalet1} caption={t("roomCaption1")} rotation={-3}/>
                    <PolaroidPhoto src={dvToalet2} caption={t("roomCaption1")} rotation={2}/>
                    <PolaroidPhoto src={dvToalet3} caption={t("roomCaption1")} rotation={1}/>
                    <PolaroidPhoto src={dvToalet4} caption={t("roomCaption1")} rotation={4}/>
                </div>

                <p className="space-x-2 lg:text-[20px]">
                    <span>&#9679;</span>
                    <span className="lg:text-[22px] xl:text-[25px]">{t("dvoKrevetnaKujna")}</span>
                </p>
                {/*sliki*/}
                <div className="flex flex-row gap-6 flex-wrap justify-center">
                    <PolaroidPhoto src={dvKujna1} caption={t("roomCaption1")} rotation={-2}/>
                    <PolaroidPhoto src={dvKujna2} caption={t("roomCaption1")} rotation={5}/>
                    <PolaroidPhoto src={dvKujna3} caption={t("roomCaption1")} rotation={1}/>

                </div>

                <p className="space-x-2 lg:text-[20px]">
                    <span>&#9679;</span>
                    <span className="lg:text-[22px] xl:text-[25px]">{t("apsoloventskaToalet")}</span>
                </p>
                {/*sliki*/}
                <div></div>

                <p className="space-x-2 lg:text-[20px]">
                    <span>&#9679;</span>
                    <span className="lg:text-[22px] xl:text-[25px]">{t("apsoloventskaKujna")}</span>
                </p>
                {/*sliki*/}
                <div></div>



            </div>

        </div>
        {/*povolnosti*/}
        <div className="px-4 lg:px-23 pt-8">

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                </svg>
                <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                    {t("povolnostiVoDomot")}
                </div>
            </div>

            <div
                className=" mt-4 px-9 grid grid-cols-2 justify-items-center gap-y-2 md:flex md:justify-center md:gap-x-2 lg:gap-x-6 xl:justify-around ">

                <div className=" lg:text-[20px]  sm:text-[17px]
           flex items-center justify-center gap-x-2 px-3 py-2
           rounded-[15px] bg-[#353767] w-fit text-white font-semibold
           transition-transform transition-colors duration-300 ease-in-out
           hover:scale-105 hover:bg-[#40427a]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/>
                    </svg>
                    <p>{t("peralna")}</p>
                </div>

                <div className=" lg:text-[20px]  sm:text-[17px]
           flex items-center justify-center gap-x-2 px-3 py-2
           rounded-[15px] bg-[#353767] w-fit text-white font-semibold
           transition-transform transition-colors duration-300 ease-in-out
           hover:scale-105 hover:bg-[#40427a]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/>
                    </svg>
                    <p>{t("internet")}</p>
                </div>

                <div className=" lg:text-[20px]  sm:text-[17px]
           flex items-center justify-center gap-x-2 px-3 py-2
           rounded-[15px] bg-[#353767] w-fit text-white font-semibold
           transition-transform transition-colors duration-300 ease-in-out
           hover:scale-105 hover:bg-[#40427a]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/>
                    </svg>
                    <p>{t("citalna")}</p>
                </div>

                <div className=" lg:text-[20px]  sm:text-[17px]
           flex items-center justify-center gap-x-2 px-3 py-2
           rounded-[15px] bg-[#353767] w-fit text-white font-semibold
           transition-transform transition-colors duration-300 ease-in-out
           hover:scale-105 hover:bg-[#40427a]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/>
                    </svg>
                    <p>{t("parking")}</p>
                </div>

                <div className=" lg:text-[20px]  sm:text-[17px]
           flex items-center justify-center gap-x-2 px-3 py-2
           rounded-[15px] bg-[#353767] w-fit text-white font-semibold
           transition-transform transition-colors duration-300 ease-in-out
           hover:scale-105 hover:bg-[#40427a]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/>
                    </svg>
                    <p>{t("kafeBar")}</p>
                </div>

            </div>

        </div>

        {/*korisni informacii*/}
        <div className="px-4 lg:px-23 pt-8 pb-8">

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                </svg>
                <div className="text-[#353767] text-[20px]  lg:text-[26px] xl:text-[35px] font-semibold font-['Poppins']">
                    {t("korisniInformacii")}
                </div>
            </div>

            <div className="mt-4 px-9 space-y-4">

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                    <p className="text-[19px] lg:text-[21px] xl:text-[23px]">{t("rabVreme")}: <strong>8:00-16:00 | 24/7</strong></p>
                </div>

                <div className="flex items-center">
                    <PhoneIcon/>
                    <p className="pl-2 text-[19px] lg:text-[21px] xl:text-[23px]"><strong>078 411 152</strong></p>
                </div>

                <div className="flex items-center">
                    <EmailIcon/>
                    <p className="pl-2 text-[19px] lg:text-[21px] xl:text-[23px]"><strong>contact@dsdskopje.mk</strong></p>
                </div>

                <div className="flex items-center">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#353767"
                              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                    </svg>
                    <p className="pl-2 text-[19px] lg:text-[21px] xl:text-[23px]">{t("sovetNaStanari")}</p>
                </div>

                <div className="flex items-center">
                    <svg className="text-[#353767]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                           stroke-width="2">
                            <path
                                d="M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2s-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
                            <circle cx="7" cy="18" r="2"/>
                            <path d="M9 18h5"/>
                            <circle cx="16" cy="18" r="2"/>
                        </g>
                    </svg>
                    <p className="pl-2 text-[19px] lg:text-[21px] xl:text-[23px]">{t("lokacijaNajbliskaPostojka")}</p>
                </div>

            </div>

        </div>

    </div>
}