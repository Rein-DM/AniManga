    import  {supportLinks,contactusLinks,companyLinks,helpLinks} from "../constants"
    import fb from "../resources/fb.png"
    import ig from "../resources/ig.png"
    import x from "../resources/x.png"
    import copyright from "../resources/copyright.png"

    const Footer = () => {
        return (
          <div className="bg-[#60C0D8] py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-items-center">
              <div>
                <h3 className="text-md font-bold mb-8 text-white">SUPPORT</h3>
                <ul className="space-y-1">
                  {supportLinks.map((support, index) => (
                    <li key={index}>
                      <a className="text-white" href={support.href}>{support.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-bold mb-8 text-white">CONTACT US</h3>
                <ul className="space-y-1">
                  {contactusLinks.map((contact, index) => (
                    <li key={index}>
                      <a className="text-white" href={contact.href}>{contact.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-bold mb-8 text-white">COMPANY</h3>
                <ul className="space-y-1">
                  {companyLinks.map((company, index) => (
                    <li key={index}>
                      <a className="text-white" href={company.href}>{company.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-bold mb-8 text-white">HELP</h3>
                <ul className="space-y-1">
                  {helpLinks.map((help, index) => (
                    <li key={index}>
                      <a className="text-white" href={help.href}>{help.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10 mt-8">
              <div className="flex items-center space-x-5">
                <img src={x} alt="X" className="w-[43px] h-auto" />
                <p className="text-white text-md">@AniManga_2024</p>
              </div>
              <div className="flex items-center space-x-5">
                <img src={fb} alt="FB" className="w-[43px] h-auto" />
                <p className="text-white text-md">AniManga</p>
              </div>
              <div className="flex items-center space-x-5">
                <img src={ig} alt="IG" className="w-[43px] h-auto" />
                <p className="text-white text-md">AniManga</p>
              </div>
            </div>
            <div className="flex justify-center w-full mt-8">
              <p className="text-white flex items-center space-x-1">
                Copyright <img src={copyright} alt="copyright" className="w-[16px] h-auto"/> 2024 All Rights Reserved
              </p>
            </div>
          </div>
        )
      }
      
      export default Footer;
      