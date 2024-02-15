"use client";
import { useState } from "react";
import { NAVIGATIONS } from "./Header";
import { Link, ListItem, ListItemText } from "@mui/material";
import Logo from "@/assets/Logo.jpeg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="tw-flex md:tw-hidden tw-px-[20px]">
      <div>
        <div className="tw-flex tw-flex-row tw-justify-between tw-w-[80vw]">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              className="tw-w-[50px] tw-h-[50px] tw-rounded-3xl"
            />
          </div>
          <div
            onClick={toggleMenu}
            className="tw-cursor-pointer tw-text-[#d6c3a5] hover:tw-text-[#9b8d77] tw-flex tw-items-center"
          >
            <MenuIcon />
          </div>
        </div>

        {isMenuOpen && (
          <nav className="tw-flex tw-flex-col tw-gap-y-[5px] tw-justify-center tw-items-end tw-text-center">
            {NAVIGATIONS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="tw-no-underline hover:tw-cursor-pointer tw-text-center"
              >
                <ListItem LinkComponent={Link}>
                  <ListItemText
                    primary={item.title}
                    className="tw-text-[#d6c3a5] hover:tw-text-[#9b8d77] tw-font-bold tw-text-center"
                  />
                </ListItem>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
