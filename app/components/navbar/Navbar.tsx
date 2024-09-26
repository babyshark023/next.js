import Logo from "./Logo";
import SignOut from "./SignOut";
import Menu from "./Menu";
import Sidebar from "../Sidebar/Sidebar";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 h-16 bg-[#464c5c]">
      <Logo />
      <SignOut />
      <Menu />
      <Sidebar />
     
    </div>
  );
};

export default Navbar;
