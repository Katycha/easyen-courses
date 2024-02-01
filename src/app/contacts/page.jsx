import Icon1 from "@/assets/Icon1.svg";
import Icon2 from "@/assets/Icon2.svg";
import Icon3 from "@/assets/Icon3.svg";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

const Contacts = () => {
  const cards = [
    {
      id: 1,
      img: Icon1,
      title: "Customer support",
      description:
        "If you still need help with the order, product or payments. We answer all of the emails within 24-72 hours (including weekends!)",
      email: "hello@easyen.com",
    },
    {
      id: 2,
      img: Icon2,
      title: "Partnerships",
      description:
        "If you are a content creator or affiliate and would like to work with us.",
      email: "partnerships@easyen.com",
    },
    {
      id: 3,
      img: Icon3,
      title: "Feedback",
      description:
        "If you want to share any feedback with us or just to say a good word.",
      email: "feedbacks@easyen.com",
    },
  ];
  return (
    <div className="tw-bg-[#7a1d39] tw-p-[40px] tw-text-[#d6c3a5]">
      <h3 className="tw-pb-[30px]">Contact Us</h3>
      <div className="tw-flex tw-flex-col tw-gap-y-[50px] md:tw-flex md:tw-flex-row  md:tw-basis-1/3  md:tw-gap-x-[20px]  tw-items-center tw-border-b-2 tw-border-b-[#d6c3a5]">
        {cards.map((item) => (
          <div
            className="tw-w-[270px] tw-h-[350px] md:tw-w-[370px] md:tw-h-[280px] tw-border-1 tw-bg-[#d6c3a5] tw-text-[#7a1d39]  tw-p-[15px] tw-border-solid tw-rounded-md tw-flex tw-items-center tw-flex-col tw-gap-y-[30px]"
            key={item.id}
          >
            <Image src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="tw-flex tw-flex-col tw-gap-y-[40px] tw-mt-10 md:tw-flex md:tw-flex-row md:tw-justify-center md:tw-gap-x-[40px] ">
          <div className="tw-flex tw-flex-col tw-gap-y-[30px]">
            <div className="tw-flex tw-items-center tw-justify-between">
              <h4>We are on the Instagram: </h4>
              <IconButton sx={{ color: "#d6c3a5" }}>
                <InstagramIcon />
              </IconButton>
            </div>
            <div className="tw-flex tw-items-center  tw-justify-between">
              <h4>We are on WhatsApp :</h4>
              <IconButton sx={{ color: "#d6c3a5" }}>
                <WhatsAppIcon />
              </IconButton>
            </div>
            <div className="tw-flex tw-items-center  tw-justify-between">
              <h4>We are on Youtube: </h4>
              <IconButton sx={{ color: "#d6c3a5" }}>
                <YouTubeIcon />
              </IconButton>
            </div>
          </div>
          <div>
            <p className="tw-text-[16px] tw-font-bold md:tw-text-[20px]">
              We are located at: Bishkek city A.Tokombaev 23/1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
