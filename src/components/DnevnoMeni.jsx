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

            <div className="flex gap-7 items-between justify-center">
                {/* слика */}
                <div className=" max-w-xl my-8  flex justify-center rounded-xl border border-[#dad8f0] ring-1 ring-indigo-300 shadow-lg xl:shadow-2xl bg-gradient-to-br from-[#a3a5d2] to-[#f2f2fc] p-4 w-full">
                    <img className="border-3 border-[#5C5EAA] rounded-xl" src={dnevnoMeniImg} alt="Dnevno Meni" />
                </div>
                {/* форма */}
                <div
                    className="my-8 flex flex-col gap-5  ">

                    <section id="obrok-prijava" className="max-w-3xl mx-auto p-6 rounded-xl border border-[#dad8f0] ring-1 ring-indigo-300 shadow-lg xl:shadow-2xl bg-gradient-to-br from-[#a3a5d2] to-[#f2f2fc] p-4 w-full">
                        <h3 className="text-2xl font-semibold mb-4">Електронска пријава за оброк</h3>

                        <p className="mb-3">
                            Секој студент е потребно да изврши <strong>електронска пријава за оброк</strong> преку
                            формата со внесување на своето студентско {/*bla*/}
                            <strong>ID</strong>.
                        </p>

                        <p className="mb-3">
                            При пријавата, треба да одберете за кој ден ја пополнувате формата и дали ќе
                            користите <strong>ручек, вечера или двата оброка</strong>.
                        </p>

                        <p className="mb-3">
                            Секој студент има на располагање <strong>три „џокери“</strong> во текот на месецот –
                            можност да се пријави, а потоа да не дојде на оброк.
                            По искористување на овие џокери, ќе следат соодветни последици доколку не се почитува
                            системот.
                        </p>

                        <p className="mb-4">
                            Оваа постапка се воведува со цел да се обезбеди попрецизна организација и да се намали
                            непотребното фрлање на храна.
                        </p>

                    </section>
                    <p>
                        <a href="https://forms.gle/48dAZ4JEgzrScjsd7"  target="_blank"
                           className="inline-block px-4 py-2 bg-[#5c5eaa] text-white rounded-md hover:opacity-90">
                            Пополнете ја формата
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DnevnoMeni;
