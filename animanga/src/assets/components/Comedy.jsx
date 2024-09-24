import genre_comedy from "../resources/genre/genre_comedy.png"
import { comedies } from "../constants"
const Comedy = () => {
  return (
    <div className="mt-28 container mx-auto flex flex-1">
        <div className="px-16">
            <ul>
                {comedies.map((comedy, index) => (
                    <li key={index} className="flex items-start mb-10">
                        <div className="flex flex-col items-center mr-6">
                            <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                            {index + 5}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-bold text-xl mb-10">
                                {comedy.comedy}
                            </h1>
                            <p className="tracking-tight font-bold mb-14 mr-16">
                                {comedy.desc}
                            </p>
                            <p className="text-lg font-bold mb-6">
                                {comedy.expected}
                            </p>
                            <ul className="list-disc list-inside leading-loose">
                                <li>{comedy.char1}</li>
                                <li>{comedy.char2}</li>
                                <li>{comedy.char3}</li>
                                <li>{comedy.char4}</li>
                                <li>{comedy.char5}</li>
                            </ul>
                        </div>
                        <div className="ml-11 w-[40%]">
                            <img src={genre_comedy} alt="comedy" className="w-full h-3/4 max-w-sm -mt-32" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Comedy