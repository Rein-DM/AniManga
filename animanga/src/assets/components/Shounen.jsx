import genre_shonen from "../resources/genre/genre_shonen.png"
import { shounens } from "../constants"
const Shounen = () => {
  return (
    <div className="mt-28 container mx-auto flex flex-1">
            <div className="px-16 flex justify-between">
                <div className="ml-11 w-[40%]">
                    <img src={genre_shonen} alt="shounen" className="w-[600] h-[900px] max-w-lg -mt-36"/>
                </div>
                <div className="w-[55%]">
                    <ul>
                        {shounens.map((shounen, index) => (
                        <li key={index} className="flex items-start mb-10">
                            <div className="flex flex-col items-center mr-6">
                                <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                                    {index + 6}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h1 className="font-bold text-xl mb-10">
                                        {shounen.shounen}
                                </h1>
                                <p className="tracking-tight font-bold mb-10 mr-16">
                                    {shounen.desc}
                                </p>
                                <p className="text-lg font-bold mb-6">
                                    {shounen.expected}
                                </p>
                                <ul className="list-disc list-inside leading-loose">
                                    <li>{shounen.char1}</li>
                                    <li>{shounen.char2}</li>
                                    <li>{shounen.char3}</li>
                                    <li>{shounen.char4}</li>
                                    <li>{shounen.char5}</li>
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

export default Shounen