import React, {useEffect} from "react";

const SkillsModal = ({data, setShowModal}) => {
    const escFunction = (event) => {
        if (event.key === "Escape") {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div id="skillModal"
             className="overflow-y-hidden overflow-x-hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-[400] h-full w-full">
            <div
                className="bg-gradient-to-br from-[#fcf2d8] via-[#FFFBF3FF] to-[#ffffff] rounded-lg p-4 sm:p-6 lg:p-8 relative w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 h-1/4 sm:h-1/2 md:h-1/3 shadow-xl flex flex-col gap-2 justify-center items-center">
                <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-900 via-yellow-900 to-green-900 text-transparent bg-clip-text text-center">
                    {data ? data[0] : ""}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-center mt-4 sm:mt-2">
                    {data[1].description}
                </p>
                <p className="py-2 sm:py-4 text-xs sm:text-lg italic text-center">
                    {data[1].exp.notes}
                </p>
                <div
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 flex flex-col items-center border-solid border-gray-600 border-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full content-center justify-center">
                    <dt className="text-xs sm:text-base md:text-lg text-gray-600 -mt-1 sm:-mt-2">Y.o.E.</dt>
                    <dd className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-900 via-yellow-900 to-green-900 text-transparent bg-clip-text">
                        {data[1].exp.years}
                    </dd>
                </div>
                <div className="flex justify-center items-end w-full h-full mt-4">
                    <button onClick={() => setShowModal(false)}
                            className="btn w-12 sm:w-12 md:w-16 border-solid border-gray-600 border-2 font-light text-gray-600 hover:text-gray-700 hover:bg-gray-200 bg-transparent">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SkillsModal;
