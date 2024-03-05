"use client";

import { Link, ListItem, ListItemText } from "@mui/material";
import { NAVIGATIONS } from "./Header";
import Image from "next/image";
import Logo from "@/assets/Logo.jpeg";

const HeaderDesktop = () => {
  return (
    <div className="tw-hidden md:tw-block">
      <div className="tw-flex tw-justify-between tw-px-[40px]">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            className="tw-w-[80px] tw-h-[80px] tw-rounded-3xl"
          />
        </div>
        <div>
          <nav className="tw-flex tw-gap-x-[10px] tw-items-center tw-justify-center">
            {NAVIGATIONS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="tw-no-underline hover:tw-cursor-pointer"
              >
                <ListItem className="tw-text-center" LinkComponent={Link}>
                  <ListItemText
                    primary={item.title}
                    className="tw-text-[#d6c3a5] hover:tw-text-[#9b8d77] tw-font-bold"
                  />
                </ListItem>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
