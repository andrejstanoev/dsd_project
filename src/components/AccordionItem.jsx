import React, {useState} from "react";

export default function AccordionItem({title, body}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleToggle(){
        setIsOpen((curr)=>!curr)
    }

    return (
        // flex items-start gap-4
        <div className="" >
            <div className="flex items-start gap-4 cursor-pointer" onClick={handleToggle}>
                {
                    isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                        <path fill="#5c5eaa" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/>
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                    <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                    </svg>
                }

            <span className="text-black text-xl font-normal font-['Inter']">
              {title}
            </span>
            </div>
            {isOpen && <div className="bg-red-700 ml-12 mt-2">{body}</div>}
        </div>);
}