import PhoneIcon from "./PhoneIcon.jsx";
import EmailIcon from "./EmailIcon.jsx";

export default function ContactCard({ name, jobTitle, phone, email }) {
    return (
        <div className="rounded-xl border-2 border-[#5c5eaa] bg-[#a3a5d2] p-4 w-full max-w-md">

            <div className=" text-center rounded-xl bg-[#5C5EAA] py-2 px-4 mb-3">
                <span className="text-white text-lg lg:text-[20px] font-semibold">{name}</span>
            </div>

            <div className="text-center py-4">

                  <span className="mt-[6px] mr-2 text-black text-lg">&#9679;</span>
                  <span className="text-[17px] whitespace-pre-line">
                    {jobTitle}
                  </span>

            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <PhoneIcon/>
                    <span className="text-[#353767] font-medium">{phone}</span>
                </div>
                <div className="flex items-center gap-2">
                    <EmailIcon/>
                    <span className="text-[#353767] font-medium break-all">{email}</span>
                </div>
            </div>
        </div>
    );
}