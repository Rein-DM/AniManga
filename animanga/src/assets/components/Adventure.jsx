    import genre_adventure from "../resources/genre/genre_adventure.png"
    import {adventures} from "../constants"
    const Adventure = () => {
    return (
        <div className="mt-28 container mx-auto flex flex-1">
            <div className="px-16 flex justify-between">
                <div className="ml-11 w-[40%]">
                    <img src={genre_adventure} alt="Adventure" className="w-full h-4/4 max-w-sm -mt-48"/>
                </div>
                <div className="w-[55%]">
                    <ul>
                        {adventures.map((adventure, index) => (
                            <li key={index} className="flex items-start mb-10">
                                <div className="flex flex-col items-center mr-6">
                                <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                                    {index + 2}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold text-xl mb-10">
                                        {adventure.adventure}
                                    </h1>
                                    <p className="tracking-tight font-bold mb-14 mr-16">
                                    {adventure.desc}
                                    </p>
                                    <p className="text-lg font-bold mb-6">
                                    {adventure.expected}
                                    </p>
                                    <ul className="list-disc list-inside leading-loose">
                                    <li>{adventure.char1}</li>
                                        <li>{adventure.char2}</li>
                                        <li>{adventure.char3}</li>
                                        <li>{adventure.char4}</li>
                                        <li>{adventure.char5}</li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
    }

    export default Adventure