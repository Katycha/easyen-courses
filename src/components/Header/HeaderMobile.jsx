"use client";
import { NAVIGATIONS } from "./Header";
import { Link, ListItem, ListItemText } from "@mui/material";

const HeaderMobile = () => {
  return (
    <div className="tw-flex md:tw-hidden tw-px-[20px]">
      <div>
        <nav className="tw-flex tw-flex-col tw-gap-y-[5px]  tw-justify-center tw-items-center">
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
      </div>
    </div>
  );
};

export default HeaderMobile;
