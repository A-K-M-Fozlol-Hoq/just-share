import Image from "next/image";
import longLogo from "../assets/images/insta.png";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative h-24 w-24">
          <Image src={longLogo} layout="fill"></Image>
        </div>
        {/* Middle */}
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
