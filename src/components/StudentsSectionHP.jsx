import React from "react";

const StudentsSectionHP = () => {
    return (
        <main className="bg-[#ebecf3] min-h-screen flex flex-col items-center py-8">
        <div className="w-[1440px] h-[950px] top-[-90px] relative">
            {/* Горната секција - За студенти */}
            <div className="relative w-full max-w-full sm:max-w-[calc(100vw-8rem)] 2xl:h-[720px] h-[520px] mx-auto overflow-hidden rounded-xl">
                {/* Икони (линиите) */}
                {[53, 108, 163, 218].map((top, idx) => (
                    <div
                        key={idx}
                        data-size="48"
                        className={`w-[47px] h-10 absolute left-[48px] top-[${top}px] overflow-hidden`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                            <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                        </svg>

                    </div>
                ))}

                {/* Наслов и текстови */}
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>


                    <div
                        className="left-[32px] top-[-3px] absolute text-[#2c2c2c] text-[25px] font-semibold font-['Poppins']">
                        За студенти
                    </div>
                </div>
                <div className="left-[81px] top-[56px] absolute text-black text-xl font-normal font-['Inter']">
                    Како да аплицираш (линк до е-услуги + кратко упатство со слики)
                </div>
                <div className="left-[81px] top-[110px] absolute text-black text-xl font-normal font-['Inter']">
                    ЧПП – Често поставувани прашања (Кога се објавуваат резултати, како да пријавиш дефект, итн.)
                </div>
                <div className="left-[81px] top-[166px] absolute text-black text-xl font-normal font-['Inter']">
                    Внатрешен правилник / кодекс на однесување (PDF или HTML)
                </div>
                <div className="left-[81px] top-[221px] absolute text-black text-xl font-normal font-['Inter']">
                    Проблеми и пријави (линк до секцијата на управници и студентски управници во „За нас“)
                </div>
            </div>

            {/* Долната секција - Цитат и слика */}
            <div className="w-[1440px] h-[464px] absolute top-[340px] left-0">
                <div className="relative w-full max-w-full sm:max-w-[calc(100vw-8rem)] 2xl:h-[720px] h-[520px] mx-auto overflow-hidden rounded-xl shadow-lg h-full absolute bg-[#a3a5d2] rounded-[15px] border-[3px] border-[#5c5eaa]" />

                <div className="w-[624px] h-[362px] left-[105px] top-[80px] absolute text-[#ebecf3] text-[31px] font-semibold font-['Inter']">
                    “Ние сме убедени дека домовите може да ги направиме поубаво место за живеење за сите студенти. Во таа насока, за
                    нас од исклучителна важност е придонесот на студентите, споделување на нивните идеи и проблеми кои ќе
                    придонесат во реализација и обезбедување на подобри услови за нив”
                </div>

                <img
                    className="w-[605.60px] h-[403px] left-[750px] top-[35px] absolute rounded-[50px] border-[10px] border-[#5c5eaa]"
                    src="src/images/studenti.png"
                    alt="Студенти"
                />

                <div className="w-[584px] h-96 left-[759px] top-[45px] absolute bg-[#5c5eaa]/50 rounded-[30px]" />
            </div>
        </div>
        </main>
    );
};

export default StudentsSectionHP;
