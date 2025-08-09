import React from "react";

const Maps = () => {
    return(
        <main className="flex justify-around items-start py-5 px-20 mb-[25px]">
            <div className=" text-center flex-col">
                <div
                    className="relative text-right w-full max-w-md h-96 mx-auto border-[2px]"
                    style={{borderColor: "#353767"}}
                >
                    <div className="overflow-hidden bg-none w-full h-full">
                        <iframe
                            title="Map - Кузман Јосифовски Питу"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?q=Student%20Dormitory%20%E2%80%9EKuzman%20Josifovski%20-%20Pitu%E2%80%9C&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            className="w-full h-full"
                        />
                    </div>
                </div>


                <h4 className="text-xl mt-4">Студентски дом <br/> ”Кузман Јосифовски- Питу”</h4>
            </div>
            <div className="text-center flex-col">
                <div
                    className="relative text-right w-full max-w-md h-96 mx-auto border-[2px]"
                    style={{borderColor: "#353767"}}
                >
                    <div className="overflow-hidden bg-none w-full h-full">
                        <iframe
                            title="Map - Гоце Делчев"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?q=Goce%20Delcev&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            className="w-full h-full"
                        />
                    </div>
                </div>

                <h4 className="text-xl mt-4">Студентски дом <br/>”Гоце Делчев”</h4>
            </div>
            <div className=" text-center flex-col">
                <div className="relative text-right w-full max-w-md h-96 mx-auto border-[2px]"
                     style={{borderColor: "#353767"}}>
                    <div className="overflow-hidden bg-none w-full h-full">
                        <iframe
                            title="Map - Студентски дом Стив Наумов"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?q=%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%20%D0%B4%D0%BE%D0%BC%20%7C%20%D0%BE%D0%B4%D0%B4.%20%D0%A1%D1%82%D0%B8%D0%B2%20%D0%9D%D0%B0%D1%83%D0%BC%D0%BE%D0%B2&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            className="w-full h-full"
                        />
                    </div>
                </div>


                <h4 className="text-xl mt-4">Студентски дом <br/>”Стив Наумов”</h4>
            </div>
        </main>
    );
}

export default Maps;