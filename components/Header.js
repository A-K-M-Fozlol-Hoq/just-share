import Image from "next/image";
import longLogo from "../assets/images/insta.png";
import shortLogo from "../assets/images/instaMob.png";
import { SearchIcon, PlusCircleIcon, UserGroupIcon, heartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline'
const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image src={longLogo} layout="fill" objectFit="contain"></Image>
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src={shortLogo} layout="fill" objectFit="contain"></Image>
        </div>
        {/* Middle - search input field */}
        <div className="relative mt-1 p-3 rounded bg-red-500">
          <div className="absolute inset-y-0 pl-3 flex item-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500"/>
          </div>
          <input type="text" placeholder="Search" />
        </div>
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
