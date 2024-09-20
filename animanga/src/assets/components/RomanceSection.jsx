import { romances } from "../constants";
import genre_romance from "../resources/genre/genre_romance.png";

const RomanceSection = () => {
  return (
    <div className="mt-28 container mx-auto flex flex-1">
      <div className="px-16">
        <h1 className="text-2xl font-bold mb-8">Top Manga Series in Every Genre on AniManga</h1>
        <ul>
          {romances.map((romance, index) => (
            <li key={index} className="flex items-start mb-10">
              <div className="flex flex-col items-center mr-6">
                <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl mb-10">
                  {romance.romance}
                </h2>
                <p className="tracking-tight font-bold mb-14 mr-16">
                  {romance.desc}
                </p>
                <p className="text-lg font-bold mb-6">
                  {romance.expected}
                </p>
                <ul className="list-disc list-inside leading-loose">
                  <li>{romance.char1}</li>
                  <li>{romance.char2}</li>
                  <li>{romance.char3}</li>
                  <li>{romance.char4}</li>
                  <li>{romance.char5}</li>
                </ul>
              </div>
              <div className="ml-11 w-[40%]">
                    <img src={genre_romance} alt="romance" className="w-full h-3/4 max-w-sm -mt-32" />
                </div>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default RomanceSection;
