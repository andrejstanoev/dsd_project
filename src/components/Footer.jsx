import React from "react";

const Footer = () => {
   return(

           <div
               className="h-[94px] bg-[#353767]  relative flex justify-center sm:flex sm:justify-center gap-3 items-center  px-6 py-4">
               {/*call ikona*/}
               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"
               className="bg-[#f5c144] rounded-full p-1"
               >
                   <path fill="#353767"
                         d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"/>
               </svg>

               {/*mail ikona*/}
               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"
                    className="bg-[#f5c144] rounded-full p-1"
               >
                   <rect width="416" height="320" x="48" y="96" fill="none" stroke="#353767" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="32" rx="40" ry="40"/>
                   <path fill="none" stroke="#353767" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="32" d="m112 160l144 112l144-112"/>
               </svg>

               {/*lokacija ikona*/}
               <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 16 16"
                    className="bg-[#f5c144] rounded-full p-1"
               >
                   <g fill="none" stroke="#353767" stroke-width="1">
                       <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z"/>
                       <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/>
                   </g>
               </svg>
           </div>


   );

}

export default Footer;