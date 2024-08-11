import React, {useEffect} from "react";

const SkillsModal = ({data, setShowModal}) => {
    const escFunction = (event) => {
        if (event.key === "Escape") {
            setShowModal(false)
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
//background: linear-gradient(to bottom right, #fcf2d8, #FFFBF3FF, #FFFBF3FF, #FFFBF3FF, #ffffff);
    return (

        <div id="skillModal"
             className="overflow-y-hidden overflow-x-hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-[400] h-full">
            <div
                className="bg-gradient-to-br from-[#fcf2d8] via-[#FFFBF3FF] to-[#ffffff] rounded-lg p-6 relative w-1/3 h-1/3 shadow-xl flex flex-col justify-center content-center">
                <h2 className="font-extrabold text-3xl bg-gradient-to-r from-purple-900 via-yellow-900-accent to-green-900 text-transparent bg-clip-text">{data ? data[0] : ""}</h2>
                <p className="text-xl">{data[1].description}</p>
                <p className="py-4 text-lg italic">{data[1].exp.notes}</p>
                <div
                    className="absolute top-5 flex flex-col-reverse border-solid border-gray-600 border-4 w-20 h-20 rounded-full content-center justify-center">
                    <dt className="text-base text-gray-600 -mt-2">Y.o.E.</dt>
                    <dd className="text-4xl -mt-2 font-bold bg-gradient-to-r from-purple-900 via-yellow-900 to-green-900-accent inline-block text-transparent bg-clip-text">{data[1].exp.years}</dd>
                </div>
                <div className="h-28 -m-6 content-end self-center">
                    <button onClick={() => setShowModal(false)}
                            className="btn -m-6 w-16 border-solid border-gray-600 border-4 font-light text-gray-600 hover:text-gray-700 bg-transparent">Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SkillsModal;
