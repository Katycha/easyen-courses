import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export const NAVIGATIONS = [
  {
    href: "/home",
    title: "Home",
  },
  {
    href: "/ourteam",
    title: "Our team",
  },
  {
    href: "/login",
    title: "Log in / Registration",
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
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
};

export default Header;
