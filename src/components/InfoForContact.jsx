import LocationIcon from "./LocationIcon.jsx";
import PhoneIcon from "./PhoneIcon.jsx";
import EmailIcon from "./EmailIcon.jsx";
import { useTranslation } from 'react-i18next';

export default function InfoForContact(){
    const { t } = useTranslation();
    return (
        <div className="  flex flex-col items-center justify-center mt-[-80px] px-4">
            <div className="w-full max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl p-6 md:p-10 space-y-6 mx-auto">

                <div >
                    <h2 className="font-['Poppins'] text-[#353767] mb-5 md:text-[23px] lg:text-[25px] xl:text-[42px] text-[24px] px-1 py-1 mb-6 rounded-[15px] w-fit bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-xl shadow-[#6769b7]/40 font-bold">
                        {t("infozakontakt")}</h2>
                    <h3 className="text-2xl font-bold xl:text-[27px] pt-2">Марина Карличиќ</h3>
                    <p className="text-sm mt-2 mb-3 lg:text-[17px] xl:text-[19px]">
                        {t("sLLice")}
                    </p>
                </div>

                <div className="flex flex-col items-start lg:items-center lg:flex-row space-x-4">
                    <div className="flex items-center gap-2">
                        <PhoneIcon/>
                        <span className="text-gray-800 font-medium xl:text-[22px]">078 411 152</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <EmailIcon/>
                        <span className="text-gray-800 font-medium xl:text-[22px]">contact@dsdskopje.mk</span>
                    </div>
                </div>
                <hr className="my-3 border-[#a3a5d2]"/>

                <div className="flex flex-col gap-4">

                    <div className="flex items-center gap-4 rounded-xl py-3">
                        <div className="flex items-center rounded-xl gap-2 bg-[#d3d4e9] py-1 px-2">
                        <PhoneIcon/>
                        <span className="font-medium text-lg mr-2 xl:text-[22px]">{t("telefon")}</span>
                        </div>
                        <span className="text-lg flex-1 flex flex-wrap gap-2 xl:text-[22px]">
                            023 226 261 <span className="mx-1 xl:text-[22px]">|</span>
                          023 117 654 <span className="mx-1 xl:text-[22px]">|</span>
                          023 228 844
                        </span>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl py-3">
                        <div className="flex rounded-xl items-center gap-2 bg-[#d3d4e9] py-1 px-2">
                        <LocationIcon/>
                        <span className="font-medium text-lg mr-2 xl:text-[22px]">{t("adresa")}</span>
                        </div>
                        <span className="text-lg xl:text-[22px]">бул. “Митрополит Теодосиј Гологанов” 266</span>
                    </div>
                </div>
            </div>
        </div>
    );
}