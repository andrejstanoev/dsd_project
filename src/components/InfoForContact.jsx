import LocationIcon from "./LocationIcon.jsx";
import PhoneIcon from "./PhoneIcon.jsx";
import EmailIcon from "./EmailIcon.jsx";
import { useTranslation } from 'react-i18next';

export default function InfoForContact(){
    const { t } = useTranslation();
    return (
        <div className="  flex flex-col items-center justify-center mt-[-80px] px-4">
            <div className="w-full max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl p-6 md:p-10 space-y-6 mx-auto">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5c5eaa] mb-8
                    md:text-[23px] lg:text-[25px] xl:text-[32px] text-[19px] px-3 py-1  rounded-[15px] border-1
                    border-[#353767] bg-[#A3A5D2] lg:w-106 lg:h-12 pl-5 text-[#353767] font-bold
                    ">{t("infozakontakt")}</h2>
                    <h3 className="text-2xl font-bold">Христина Димова Грчнароска</h3>
                    <p className="text-sm mt-1 mb-3">
                        {t("sLLice")}
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center gap-2">
                        <PhoneIcon/>
                        <span className="text-gray-800 font-medium">075 263 678</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <EmailIcon/>
                        <span className="text-gray-800 font-medium">contact@dsdskopje.mk</span>
                    </div>
                </div>
                <hr className="my-3 border-[#a3a5d2]"/>

                <div className="flex flex-col gap-4">

                    <div className="flex items-center gap-4 rounded-xl py-3">
                        <div className="flex items-center rounded-xl gap-2 bg-[#d3d4e9] py-1 px-2">
                        <PhoneIcon/>
                        <span className="font-medium text-lg mr-2">{t("telefon")}</span>
                        </div>
                        <span className="text-lg flex-1 flex flex-wrap gap-2">
                            023 226 261 <span className="mx-1">|</span>
                          023 117 654 <span className="mx-1">|</span>
                          023 228 844
                        </span>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl py-3">
                        <div className="flex rounded-xl items-center gap-2 bg-[#d3d4e9] py-1 px-2">
                        <LocationIcon/>
                        <span className="font-medium text-lg mr-2">{t("adresa")}</span>
                        </div>
                        <span className="text-lg">бул. “Митрополит Теодосиј Гологанов” 266</span>
                    </div>
                </div>
            </div>
        </div>
    );
}