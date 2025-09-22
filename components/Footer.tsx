import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer =()=>{
    return(
        <footer className="w-full bg-[#F2F2F2] dark:bg-[#141414] mt-10 max-w-8xl mx-auto ">
         <div className="px-2 md:px-4 lg:px-6 py-3 ">
          {/* App Store Buttons */}
        

          {/* Social Links and Footer Links */}
          <div className="flex flex-wrap justify-between items-center border-t border-gray-600 pt-5 min-h-[60px]">
            <div className="flex space-x-6 !items-center lg:md-0 flex-wrap">
              <div className="flex gap-3 items-center pr-4 xs:pb-4 sm:pb-0 md:pb-0 lg:pb-0 flex-start sm:mx-auto xs:justify-center cursor-pointer">
                <img src="/logos/appStore.png" alt="Download on App Store" className="h-9 md:h-10" />
                <img src="/logos/googlePlay.png" alt="Get it on Google Play" className="h-9 md:h-10" />
              </div>
              {/* <div className="flex space-x-6 items-center pt-4 md:pt-0 sm:pt-0 md:mb-0 lg:mb-0">
                 <a href="#" className="text-[#2C2C2C] dark:text-white hover:text-[#2C2C2C]">
                <span className="sr-only">Instagram</span> */}
               {/* <img src={"/logos/instagram.svg"}></img> */}
               {/* <FaInstagram className="w-8 h-8 "/>
              </a> */}
              {/* <a href="#" className="text-[#2C2C2C] dark:text-white hover:text-[#2C2C2C]">
                <span className="sr-only">Facebook</span>
                 <FaFacebookF className="w-8 h-7 "/>
              </a>
              <a href="#" className="text-[#2C2C2C] dark:text-white hover:text-[#2C2C2C]">
                <span className="sr-only">Twitter</span> */}
                 {/* <img src={"/logos/twitter-x.svg"}></img> */}
                 {/* <FaXTwitter   className="w-8 h-8 "/>
              </a>
              </div> */}
             
              
            </div>
            

            <div className="flex flex-wrap items-center lg:pt-0 pt-4 sm:pt-4 md:pt-4 gap-2 gap-x-4 text-sm text-[#2C2C2C] dark:text-[#FFFFFF] items-center">
              <a href="/profile/help" className="hover:text-gray-900 dark:text-[#FFFFFF]">
                Help and Support
              </a>

              <a href="/profile/contacts" className="hover:text-gray-900 dark:text-[#FFFFFF]">

                Contact Us
              </a>
              <a href="/termsconditions" className="hover:text-gray-900 dark:text-[#FFFFFF]">
                Terms and Conditions
              </a>
              <a href="/termsconditions" className="hover:text-gray-900 dark:text-[#FFFFFF]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer;