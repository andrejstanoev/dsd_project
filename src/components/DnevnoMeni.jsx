import React from "react";
import { useTranslation } from 'react-i18next';
// Увези ја сликата од src/images
import dnevnoMeniImg from '../images/dnevno_meni.png';

const DnevnoMeni = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex justify-center mt-[-50px]">
                <h1 className="md:text-[30px] lg:text-[35px] xl:text-[44px] text-[25px] px-5 font-['Poppins'] font-bold rounded-[15px] bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-xl shadow-[#6769b7]/40 text-center text-[#353767]">
                    {t("dnevnoMeni")}
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-7 items-between justify-center">
                {/* слика */}
                <div className=" max-w-xl my-8  flex justify-center rounded-xl border border-[#dad8f0] ring-1 ring-indigo-300 shadow-lg xl:shadow-2xl bg-gradient-to-br from-[#a3a5d2] to-[#f2f2fc] p-4 w-full">
                    <img className="border-3 border-[#5C5EAA] rounded-xl" src={dnevnoMeniImg} alt="Dnevno Meni" />
                </div>
                {/* форма */}
                <div
                    className="my-8 flex flex-col gap-5  ">

                    <section id="obrok-prijava" className="max-w-3xl mx-auto p-6 rounded-xl border border-[#dad8f0] ring-1 ring-indigo-300 shadow-lg xl:shadow-2xl bg-gradient-to-br from-[#a3a5d2] to-[#f2f2fc] p-4 w-full">
                        <h3 className="text-2xl font-semibold mb-4">{t("elektronskaPrijavaZaObrok")}</h3>

                        <p className="mb-3">
                            {t("sekoiStudent")} <strong>{t("elektronskaPrijavaZaObrokSoMali")}</strong> {t("prekuFormata")} {/*bla*/}
                            <strong>ID</strong>.
                        </p>

                        <p className="mb-3">
                            {t("zaKojDen")}<strong>{t("rucekVecera")}</strong>.
                        </p>

                        <p className="mb-3">
                            {t("sekojStudentImaNaRaspolaganje")} <strong>{t("triDzokeri")}</strong> {t("voTekotNaMesecot")}
                        </p>

                        <p className="mb-4">
                            {t("ovaaPostapka")}
                        </p>

                    </section>
                    <p>
                        <a href="URL_TO_FORM"
                           className="inline-block px-4 py-2 bg-[#5c5eaa] text-white rounded-md hover:opacity-90">
                            {t("popolnetaJaFormata")}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DnevnoMeni;
