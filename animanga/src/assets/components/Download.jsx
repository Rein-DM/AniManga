import apple from "../resources/apple.png"
import maclogo from "../resources/MacLogo.png"
import google from "../resources/google.png"
import android from "../resources/Android.png"
const Download = () => {
  return (
    <div className="mt-52 container mx-auto mb-52">
        <div className="px-72 mb-10">
            <h1 className="text-2xl font-bold">Download From:</h1>
        </div>
        <div className="px-16 justify-center mb-10 text-start flex gap-8">               
            <div className="border border-black w-[300px] h-[300px] rounded-lg px-5 py-5">
                <img className="w-[50px] mb-10" src={maclogo} alt="Maclogo" />
                <p className="text-sm font-bold">Mobile Phone</p>
                <p className="text-2xl font-bold">iOS</p>
                <p className="text-sm mb-2">Stay ahead with quick, adaptable communication strategies for evolving business landscapes.</p>
                <img className="w-[110px]" src={apple} alt="apple" />
            </div>

            <div className="border border-black w-[300px] h-[300px] rounded-lg px-5 py-5">
                <img className="w-[50px] mb-10" src={android} alt="android" />
                <p className="text-sm font-bold">Mobile Phone</p>
                <p className="text-2xl font-bold">IOS</p>
                <p className="text-sm mb-2">Stay ahead with quick, adaptable communication strategies for evolving business landscapes.</p>
                <img className="w-[110px]" src={google} alt="google" />
            </div>
        </div>
    </div>
  )
}

export default Download