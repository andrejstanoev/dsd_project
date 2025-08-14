import { useTranslation } from 'react-i18next';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LocationIcon from "./LocationIcon.jsx";
import React from "react";
export default function GoceMain() {
    const { t } = useTranslation();
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    return <div className="flex-1 flex flex-col pt-5">

        <div className="text-center pt-5">
            <h1>{t("studentskiDom")} “Гоце Делчев”</h1>
        </div>

        {/*karusel*/}
        <div className="py-12">
            <Carousel responsive={responsive} autoPlay={false} autoPlaySpeed={3000} infinite>
                <div><img className="h-[350px] w-[507px] px-3 rounded-[10px]" src="src/images/goce1slika.jpg"
                          alt="Slide 1"/></div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src="src/images/goce2slika.jpg" alt="Slide 2"/>
                </div>
                <div><img className="h-[350px] px-3 rounded-[10px]" src="src/images/goce3slika.jpg" alt="Slide 3"/>
                </div>
            </Carousel>
        </div>

        {/*ikonki*/}
        <div className="mb-4 px-10 grid grid-cols-2 gap-4 justify-items-center md:flex md:justify-center md:gap-x-7 lg:gap-x-8 lg:text-[19px] xl:text-[22px] xl:gap-x-10">
            <div
                className="flex items-center justify-center w-fit bg-[#F5C144] px-3 py-1 rounded-[15px] border xl:w-[270px]">
                <span className="pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                        fill="currentColor"
                        d="M7.965 6.202a.82.82 0 0 0-.537.106h-.014c-.375.22-.713.497-1.001.823c-.24.277-.37.557-.404.827c-.02.16-.006.322.041.475l.018.01c.27.793.622 1.556 1.052 2.274a13.4 13.4 0 0 0 2.03 2.775l.024.034l.038.028l.023.027l.028.024a13.6 13.6 0 0 0 2.782 2.04c1.155.629 1.856.926 2.277 1.05v.006c.123.038.235.055.348.055a1.6 1.6 0 0 0 .964-.414c.325-.288.6-.627.814-1.004v-.007c.201-.38.133-.738-.157-.981A12 12 0 0 0 14.41 13c-.448-.243-.903-.096-1.087.15l-.393.496c-.202.246-.568.212-.568.212l-.01.006c-2.731-.697-3.46-3.462-3.46-3.462s-.034-.376.219-.568l.492-.396c.236-.192.4-.646.147-1.094a12 12 0 0 0-1.347-1.88a.75.75 0 0 0-.44-.263M12.58 5a.5.5 0 0 0 0 1c1.264 0 2.314.413 3.145 1.205c.427.433.76.946.978 1.508c.219.563.319 1.164.293 1.766a.5.5 0 0 0 1 .042a5.4 5.4 0 0 0-.361-2.17a5.4 5.4 0 0 0-1.204-1.854l-.01-.01C15.39 5.502 14.085 5 12.579 5"/><path
                        fill="currentColor"
                        d="M12.545 6.644a.5.5 0 0 0 0 1h.017c.912.065 1.576.369 2.041.868c.477.514.724 1.153.705 1.943a.5.5 0 0 0 1 .023c.024-1.037-.31-1.932-.972-2.646V7.83c-.677-.726-1.606-1.11-2.724-1.185l-.017-.002z"/><path
                        fill="currentColor"
                        d="M12.526 8.319a.5.5 0 1 0-.052.998c.418.022.685.148.853.317c.169.17.295.443.318.87a.5.5 0 1 0 .998-.053c-.032-.6-.22-1.13-.605-1.52c-.387-.39-.914-.58-1.512-.612"/><path
                        fill="currentColor" fill-rule="evenodd"
                        d="M7.067 2.384a22.15 22.15 0 0 1 9.664 0l.339.075a5.16 5.16 0 0 1 3.872 3.763a19.7 19.7 0 0 1 0 9.7a5.16 5.16 0 0 1-3.872 3.763l-.34.075a22.2 22.2 0 0 1-6.077.499L8 22.633a.75.75 0 0 1-1.24-.435l-.439-2.622a5.16 5.16 0 0 1-3.465-3.654a19.7 19.7 0 0 1 0-9.7a5.16 5.16 0 0 1 3.872-3.763zm9.337 1.463a20.65 20.65 0 0 0-9.01 0l-.34.076A3.66 3.66 0 0 0 4.31 6.591a18.2 18.2 0 0 0 0 8.962a3.66 3.66 0 0 0 2.745 2.668l.09.02a.75.75 0 0 1 .576.608l.294 1.758l1.872-1.675a.75.75 0 0 1 .553-.19a20.7 20.7 0 0 0 5.964-.445l.339-.076a3.66 3.66 0 0 0 2.745-2.668c.746-2.94.746-6.021 0-8.962a3.66 3.66 0 0 0-2.745-2.668z"
                        clip-rule="evenodd"/></svg>
                </span>
                {t("pridruziSe")}
            </div>

            <div
                className="justify-center flex items-center w-fit bg-[#F5C144] px-3 py-1 rounded-[15px] border xl:w-[270px]">
                <span className="pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><g
                        fill="currentColor"><path fill-rule="evenodd"
                                                  d="M16.5 4.5h-13A.5.5 0 0 0 3 5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M4 15.5v-10h12v10z"
                                                  clip-rule="evenodd"/><path fill-rule="evenodd"
                                                                             d="M16.5 4.5h-13A.5.5 0 0 0 3 5v3a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 17 8V5a.5.5 0 0 0-.5-.5M4 7.5v-2h12v2z"
                                                                             clip-rule="evenodd"/><path
                        d="M5.5 5.5h1A.5.5 0 0 0 7 5V4a.5.5 0 0 0-.5-.5h-1A.5.5 0 0 0 5 4v1a.5.5 0 0 0 .5.5m8 0h1A.5.5 0 0 0 15 5V4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5m-7.5 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"/></g></svg>
                </span>
                {t("nedelnoMeni")}
            </div>


            <div
                className="justify-center flex items-center w-fit bg-[#F5C144] px-3 py-1 rounded-[15px] border xl:w-[270px]">
                <span className="pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle
                        cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="32"/></svg>
                </span>
                {t("lokacija")}
            </div>

            <div
                className=" justify-center flex items-center w-fit bg-[#F5C144] px-3 py-1 rounded-[15px] border xl:w-[270px]">
                <span className="pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle
                        cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="32"/></svg>
                </span>
                {t("kafeBarCitalna")}
            </div>

        </div>

        {/*za domot*/}
        <div className="px-10 mt-8">

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                </svg>
                <div className="text-[#353767] text-[20px]  lg:text-[26px] font-semibold font-['Poppins']">
                    {t("zadomot")}
                </div>
            </div>

            <div className=" lg:text-[22px] mt-4 px-9 whitespace-pre-line ">
                {t("zaGoceDomotInfo")}
            </div>

        </div>

    </div>
}