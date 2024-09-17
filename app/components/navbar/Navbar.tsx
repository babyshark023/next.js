import Account from "./Account";
import Docs from "./Docs";
import Logo from "./Logo";
import SignOut from "./SignOut";
import Support from "./Support";
import Menu from "./Menu";
import Sidebar from "../Sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 h-16 bg-[#3f599e]">
      <Logo />
      <Account />
      <Docs />
      <Support />
      <SignOut />
      <Menu />
      <Sidebar />
    </div>
  );
};

export default Navbar;
