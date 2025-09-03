import React, { useEffect } from "react";

export default function NewsSectionFB() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div className="w-full max-w-7xl mt-8 flex justify-center">

            <div
                style={{
                    border: '5px solid #5C5EAA',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    width: '900px',
                    maxWidth: '100%',
                }}
            >
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/dsdskopje"
                    data-tabs="timeline"
                    data-width="900"
                    data-height="600"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                    style={{ width: "100%" }}
                >
                    <blockquote
                        cite="https://www.facebook.com/dsdskopje"
                        className="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/dsdskopje">Државен студентски дом – Скопје</a>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
