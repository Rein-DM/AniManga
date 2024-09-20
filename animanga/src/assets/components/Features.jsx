import section2 from "../resources/section2.png";
import { features } from "../constants";

const Features = () => {
  return (
    <div className="container flex pt-14">
      <div className="flex flex-1 lg:w-1/2">
        <img className="h-[1000px] w-full" src={section2} alt="section2" />
      </div>
      <div className="text-left flex flex-1 flex-col px-14">
        <h1 className="text-4xl font-bold mb-8 mt-10">AniManga Features</h1>        
        <ul className="mt-10">
            {features.map((feature, index) => (
              <li key={index} className=" flex items-start mt-2">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-10 h-10 flex justify-center items-center bg-white border border-black text-black rounded-full font-bold">
                    {index + 1}
                  </div>
                  {index < features.length - 1 && (
                    <div className="w-px h-48 border-r-2 border-dashed border-black"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-5 mt-2 ml-2">{feature.feature}</h3>
                  <p className="text-sm font-bold ml-2">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Features;
