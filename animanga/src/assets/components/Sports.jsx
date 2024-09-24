import genre_sports from "../resources/genre/genre_sports.png"
import { sports } from "../constants"
const Sports = () => {
  return (
    <div className="mt-28 container mx-auto flex flex-1">
        <div className="px-16">
            <ul>
                {sports.map((sport, index) => (
                    <li key={index} className="flex items-start mb-10">
                        <div className="flex flex-col items-center mr-6">
                            <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                            {index + 3}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-bold text-xl mb-10">
                                {sport.sport}
                            </h1>
                            <p className="tracking-tight font-bold mb-14 mr-16">
                                {sport.desc}
                            </p>
                            <p className="text-lg font-bold mb-6">
                                {sport.expected}
                            </p>
                            <ul className="list-disc list-inside leading-loose">
                                <li>{sport.char1}</li>
                                <li>{sport.char2}</li>
                                <li>{sport.char3}</li>
                                <li>{sport.char4}</li>
                                <li>{sport.char5}</li>
                            </ul>
                        </div>
                        <div className="ml-11 w-[40%]">
                            <img src={genre_sports} alt="sports" className="w-full h-3/4 max-w-sm -mt-32" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sports