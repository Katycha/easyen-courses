"use client";
import { Link, ListItem, ListItemText } from "@mui/material";
import { NAVIGATIONS } from "./Header";

const HeaderMobile = () => {
  return (
    <div className="tw-flex md:tw-hidden tw-px">
      <div>
        <nav className="tw-flex tw-gap-x-[5px]">
          {NAVIGATIONS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="tw-no-underline hover:tw-cursor "
            >
              <ListItem className="tw-text-center" LinkComponent={Link}>
                <ListItemText
                  primary={item.title}
                  className="tw-text-[#d6c3a5] hover:tw-text-[#9b8d77] tw-font-medium"
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
