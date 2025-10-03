import LocationIcon from "./LocationIcon.jsx";
import PhoneIcon from "./PhoneIcon.jsx";
import EmailIcon from "./EmailIcon.jsx";
import { useTranslation } from 'react-i18next';
import AccordionItem from "./AccordionItem.jsx";
import React, {useState} from "react";

export default function InfoForContact(){
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    function handleToggle(){
        setIsOpen((curr)=>!curr)
    }

    function handleSubmit(e){
        e.preventDefault();
        setSending(true)

        setTimeout(() => {
            setSending(false);
            setName('');
            setSurname('');
            setEmail('');
            setMessage('');
            setShowSuccess(true);

            setTimeout(() => setShowSuccess(false), 1000);
        }, 1000);
    }
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

                <div className="">
                    <div className="" >
                        <div className="flex items-start gap-4 cursor-pointer bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] w-fit border border-white/20 rounded-[15px] shadow-xl shadow-[#6769b7]/50 p-2" onClick={handleToggle}>
                            {
                                isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                        <path fill="#5c5eaa" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/>
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                        <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                                    </svg>
                            }

                            <span className="text-black text-xl xl:text-[25px] font-normal font-['Inter']">
                              {t("kontaktirajNe")}
                            </span>
                        </div>
                        {isOpen && (
                            <div className="ml-12 mt-2 whitespace-pre-line">
                                <form onSubmit={handleSubmit} className="mx-auto p-4 rounded">
                                    <div className="mb-4">
                                        <label className="block mb-1">{t("ime")}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
                                            required
                                            className="w-full border p-2 rounded bg-white"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1">{t("prezime")}</label>
                                        <input
                                            type="text"
                                            name="surname"
                                            value={surname}
                                            onChange={(e)=>setSurname(e.target.value)}
                                            required
                                            className="w-full border p-2 rounded bg-white"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1">{t("email")}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                            required
                                            className="w-full border p-2 rounded bg-white"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1">{t("poraka")}</label>
                                        <textarea
                                            name="message"
                                            value={message}
                                            onChange={(e)=>setMessage(e.target.value)}
                                            required
                                            className="w-full border p-2 rounded bg-white"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="submit"
                                            className={`px-4 py-2 bg-[#353767] text-white rounded hover:cursor-pointer transition-colors ${
                                                sending ? 'opacity-50 pointer-events-none' : ''
                                            }`}
                                            disabled={sending}
                                        >
                                            {sending ? t("prakjanje") : t("isprati")}
                                        </button>
                                        {showSuccess && (
                                            <span className="text-green-600 text-lg">{t("uspesnoIspratena")}</span>
                                        )}
                                    </div>
                                </form>
                            </div>
                        )}
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