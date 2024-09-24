import genre_slice from "../resources/genre/genre_slice.png"
import {sliceoflifes} from "../constants"
const Sliceoflife = () => {
  return (
    <div className="mt-28 container mx-auto flex flex-1">
            <div className="px-16 flex justify-between">
                <div className="ml-11 w-[40%]">
                    <img src={genre_slice} alt="Adventure" className="w-[600] h-[900px] max-w-lg -mt-36"/>
                </div>
                <div className="w-[55%]">
                    <ul>
                        {sliceoflifes.map((slice, index) => (
                            <li key={index} className="flex items-start mb-10">
                                <div className="flex flex-col items-center mr-6">
                                <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                                    {index + 4}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold text-xl mb-10">
                                        {slice.sliceoflife}
                                    </h1>
                                    <p className="tracking-tight font-bold mb-10 mr-16">
                                    {slice.desc}
                                    </p>
                                    <p className="text-lg font-bold mb-6">
                                    {slice.expected}
                                    </p>
                                    <ul className="list-disc list-inside leading-loose">
                                    <li>{slice.char1}</li>
                                        <li>{slice.char2}</li>
                                        <li>{slice.char3}</li>
                                        <li>{slice.char4}</li>
                                        <li>{slice.char5}</li>
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

export default Sliceoflife