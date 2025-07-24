import React from "react";

const StudentsSectionHP = () => {
    return (
        <main className="bg-[#ebecf3] min-h-screen flex flex-col items-center py-8">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 relative top-[-90px] relative">
                {/* Prva sekcija -0 za Studenti lista */}
                <div
                    className="relative w-full max-w-full sm:max-w-[calc(100vw-8rem)] 2xl:h-[720px] h-[520px] mx-auto overflow-hidden rounded-xl sm:430px">
                    {/*  */}


                    {/* Za Studenti lista */}
                    <div className="flex flex-col sm:text-l">
                        <div className=""
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                            </svg>


                            <div
                                className="left-[32px] top-[-3px] absolute text-[#2c2c2c] text-[25px] font-semibold font-['Poppins']">
                                За студенти
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-4 ml-4">
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                                </svg>
                                <span className="text-black text-xl font-normal font-['Inter']">
      Како да аплицираш (линк до е-услуги + кратко упатство со слики)
    </span>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                                </svg>
                                <span className="text-black text-xl font-normal font-['Inter']">
      ЧПП – Често поставувани прашања (Кога се објавуваат резултати, како да пријавиш дефект, итн.)
    </span>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                                </svg>
                                <span className="text-black text-xl font-normal font-['Inter']">
      Внатрешен правилник / кодекс на однесување (PDF или HTML)
    </span>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                                </svg>
                                <span className="text-black text-xl font-normal font-['Inter']">
      Проблеми и пријави (линк до секцијата на управници и студентски управници во „За нас“)
    </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Sekcija- citat i slika */}
                <div className="w-full px-4 py-5">
                    <div
                        className="mx-auto max-w-7xl bg-[#a3a5d2] border-4 border-[#5c5eaa] rounded-[15px] shadow-lg p-6 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8">

                        {/* Citat */}
                        <div className="text-[#ebecf3] text-xl md:text-2xl font-semibold font-['Inter'] md:w-1/2">
                            “Ние сме убедени дека домовите може да ги направиме поубаво место за живеење за сите
                            студенти. Во таа насока, за нас од исклучителна важност е придонесот на студентите,
                            споделување на нивните идеи и проблеми кои ќе придонесат во реализација и обезбедување на
                            подобри услови за нив”
                        </div>

                        {/* slika del */}
                        <div className="relative md:w-1/2 w-full">
                            <img
                                src="src/images/studenti.png"
                                alt="Студенти"
                                className="w-full h-auto rounded-[30px] border-4 md:border-[10px] border-[#5c5eaa]"
                            />
                            <div className="absolute inset-0 bg-[#5c5eaa]/50 rounded-[30px]"/>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
};

export default StudentsSectionHP;
