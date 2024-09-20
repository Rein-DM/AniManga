import landing from "../resources/landing.png";

const DiscoverSection = () => {
  return (
    <div 
      style={{ backgroundColor: '', borderRadius: '0px 0px 300px 0px'}} 
      className="text-white py-11 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[710px] bg-[#60C0D8]"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-left py-4 lg:py-20 flex-1 lg:flex-none lg:w-1/2 px-4">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 max-w-xl">
            Discover a New World of Manga with AniManga!
          </h1>
          <div className="max-w-full lg:max-w-2xl py-4 lg:py-10">
            <p className="text-base lg:text-xl leading-relaxed">
              Welcome to AniManga, your ultimate gateway to the captivating universe
              of manga! Dive into an endless library of stories that span every genre
              imaginable from heartwarming romances and action-packed adventures to
              mind-bending sci-fi and thrilling mysteries. Whether you're a seasoned
              manga enthusiast or a newcomer eager to explore, AniManga offers a seamless,
              immersive reading experience tailored just for you.
            </p>
          </div>
          <div className="py-4 lg:py-10">
            <a
              href="#"
              className="py-2 px-6 lg:py-4 lg:px-10 border rounded-3xl bg-white font-bold text-[#60C0D8] text-xl"
              style={{ boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.25)' }}
            >
              Get Application
            </a>
          </div>
        </div>
        
        <div className="flex-1 lg:w-1/2 px-4">
          <img src={landing} alt="landing page" className="w-full h-auto rounded-br-lg" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
