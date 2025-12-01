import { DiSmashingMagazine } from "react-icons/di";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-around px-12 py-6 bg-gray-400">
      <div className="flex items-center gap-4">
        <DiSmashingMagazine className="text-6xl text-black" />
        <h2 className="text-3xl font-bold text-black">SARAVANAN</h2>
      </div>

      <div className="flex items-center gap-7 text-black">
        {/* Use same path casing as in App.js */}
        <Link to="/Home" className="cursor-pointer font-medium">Home</Link>
        <a className="cursor-pointer font-medium">About</a>
        <a className="cursor-pointer font-medium">Contact</a>
        <a className="">Services</a>
      </div>
    </div>
  );
};

export default Header;
