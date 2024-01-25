import Image from "next/image";
import Globus from "@/assets/Globus.webp";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="tw-bg-[#7a1d39] tw-px-[20px] tw-pt-[50px] md:tw-px-[40px]">
      <div className="tw-flex tw-flex-col tw-gap-y-[20px] md:tw-flex md:tw-flex-row md:tw-justify-between">
        <div>
          <Typography className="tw-text-[#f5ebeb] tw-font-extrabold tw-text-[23px] tw-flex md:tw-hidden">
            EasyEn
          </Typography>
        </div>
        <div className="tw-text-[#d6c3a5] tw-flex tw-flex-col tw-gap-y-[30px]">
          <Typography className="tw-text-[23px]">
            {"  "}Learn and improve English in 3 months.
          </Typography>
          <Typography>
            Forget boring language lessons. Have real conversations with our
            teachers and students.
          </Typography>
        </div>
        <div>
          <Image
            src={Globus}
            alt="language"
            className="tw-w-[150px] tw-h-[100px] md:tw-w-[450px] md:tw-h-[300px]"
          />
        </div>
      </div>
    </main>
  );
}
