import React from 'react';

export default function MonNews() {
    return (
        <div className="w-full max-w-7xl my-8 flex justify-center rounded-xl border border-[#dad8f0] ring-1 ring-indigo-300 shadow-lg xl:shadow-2xl bg-gradient-to-br from-[#a3a5d2] to-[#f2f2fc] p-4 w-full ">
            <div
                style={{
                    border: '2px solid #5C5EAA',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    width: '530px',
                    maxWidth: '100%',
                }}
            >
                <iframe
                    src="https://mon.gov.mk/mk-MK/odnosi-so-javnost/soopstenija?page=1"
                    title="Новости од МОН"
                    width="100%"
                    height="600"
                    style={{ border: 'none', borderRadius: '0' }}
                />
            </div>
        </div>
    );
}
// old src "https://mon.gov.mk/search/?s=%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8+%D0%B4%D0%BE%D0%BC%D0%BE%D0%B2%D0%B8"