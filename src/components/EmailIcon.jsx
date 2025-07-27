import React from "react";

export default function EmailIcon() {
    return (
        // <svg className="w-6 h-6 text-[#5c5eaa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //     <rect width="20" height="16" x="2" y="4" rx="2" ry="2" strokeWidth="2" stroke="currentColor"/>
        //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor"
        //           d="M22 6l-10 7L2 6"/>
        // </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"
             className="w-6 h-6 text-[#5c5eaa]"
        >
            <rect width="416" height="320" x="48" y="96" fill="none" stroke="#353767" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="32" rx="40" ry="40"/>
            <path fill="none" stroke="#353767" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="32" d="m112 160l144 112l144-112"/>
        </svg>
)
}