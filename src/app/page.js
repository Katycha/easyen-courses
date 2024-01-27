import Image from "next/image";
import Globus from "@/assets/Globus.webp";
import { Typography } from "@mui/material";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="tw-bg-[#7a1d39] tw-px-[20px] tw-pt-[50px] md:tw-px-[30px]  tw-h-[100%] tw-pb-[30px]">
      <div className="tw-flex tw-flex-col tw-gap-y-[20px] md:tw-flex md:tw-flex-row-reverse tw-gap-x-[50px]">
        <div className="tw-flex tw-justify-center tw-items-center">
          <Image
            src={Globus}
            alt="language"
            className="tw-w-[200px] tw-h-[150px] md:tw-w-[450px] md:tw-h-[500px]"
          />
        </div>
        <div>
          <Typography className="tw-text-[#f5ebeb] tw-font-extrabold tw-text-[23px] tw-flex md:tw-hidden">
            EasyEn
          </Typography>
        </div>
        <div className="tw-text-[#d6c3a5] tw-flex tw-flex-col tw-justify-between">
          <div className="tw-flex tw-flex-col tw-gap-y-[20px]">
            <Typography className="tw-text-[23px]">
              {"  "}Learn and improve English in 3 months.
            </Typography>
            <Typography>
              Forget boring language lessons. Have real conversations with our
              teachers and students. Improve your language skills by learning
              just 10 minutes a day.
            </Typography>
            <Typography>
              We provide you with a site for learning English by several
              methods: vocabulary building every day, conversation clubs,
              listening texts, movies with subtitles. And all this from the
              comfort of your own home. All for your convenience.
            </Typography>
          </div>

          <div className="tw-hidden md:tw-flex  tw-flex-col tw-justify-end tw-pl-0">
            <Footer />
          </div>
        </div>
      </div>
      <div className="tw-flex md:tw-hidden">
        <Footer />
      </div>
    </main>
  );
}
