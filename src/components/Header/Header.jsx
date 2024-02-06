import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export const NAVIGATIONS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/ourteam",
    title: "Our team",
  },
  {
    href: "/login",
    title: "Log In",
  },
  {
    href: "/contacts",
    title: "Contacts",
  },
  {
    href: "/myprofile",
    title: "My profile",
  },
];

const Header = () => {
  return (
    <div className="tw-pt-[15px] w-[100%]">
      <div className="tw-flex tw-items-center">
        <HeaderMobile />
      </div>
      <HeaderDesktop />
    </div>
  );
};

export default Header;
