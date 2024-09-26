import Topmanga from "../resources/TopAnime.png"
const TopAnime = () => {
  return (
    <div className="mt-28 container mx-auto ">
        <div className="px-16 justify-center mb-10 text-center">
            <h1 className="text-2xl font-bold">Top Manga in AniManga</h1>
        </div>
        <div className="flex justify-center mb-10">
            <img className="w-[1000px] h-auto" src={Topmanga} alt="Topmanga" />
        </div>
    </div>
  )
}

export default TopAnime