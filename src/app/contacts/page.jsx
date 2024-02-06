"use client";

import Icon1 from "@/assets/Icon1.svg";
import Icon2 from "@/assets/Icon2.svg";
import Icon3 from "@/assets/Icon3.svg";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Location from "@/assets/Location.jpeg";

const Contacts = () => {
  const mapContainerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  /* useEffect(() => {
    if (!mapLoaded) {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=9fb28f30b50852552c0f81578c102e32bb6dee7c&callback=initMap`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      window.initMap = initMap;
      document.body.appendChild(googleMapScript);
      setMapLoaded(true);
    }
  }, [mapLoaded]);

  const initMap = () => {
    const map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
      zoom: 15,
    });
    const marker = new window.google.maps.Marker({
      position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
      map: map,
      title: "Our Location",
    });
  };*/

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
            className="tw-w-[250px] tw-h-[350px] md:tw-w-[370px] md:tw-h-[280px] tw-border-1 tw-bg-[#d6c3a5] tw-text-[#7a1d39]  tw-p-[15px] tw-border-solid tw-rounded-md tw-flex tw-items-center tw-flex-col tw-gap-y-[30px]"
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
          <div className="tw-flex tw-flex-col tw-gap-y-[30px] md:tw-gap-y-[60px]">
            <div className="tw-flex tw-items-center tw-justify-between">
              <h4>We are on the Instagram: </h4>
              <NextLink
                href="https://www.instagram.com/makesyoufluent?igsh=MTRtbmdvaWs5anpicg=="
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <InstagramIcon />
                </IconButton>
              </NextLink>
            </div>
            <div className="tw-flex tw-items-center  tw-justify-between">
              <h4>We are on the WhatsApp :</h4>
              <NextLink
                href="https://chat.whatsapp.com/CNQSJjK3WWhC6swbC3TSOl"
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <WhatsAppIcon />
                </IconButton>
              </NextLink>
            </div>
            <div className="tw-flex tw-items-center  tw-justify-between">
              <h4>We are on the Youtube: </h4>
              <NextLink
                href="https://youtube.com/@MakesYouFluent?si=FrrTzxWd98jZNmpo"
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <YouTubeIcon />
                </IconButton>
              </NextLink>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-y-[20px] tw-pt-[5px]">
            <p className="tw-text-[15px] tw-font-semibold md:tw-text-[18px]">
              We are located at: <br />
              Bishkek city A.Tokombaev 23/1
            </p>
            <Image
              src={Location}
              alt="location"
              className="tw-w-[150px] tw-h-[200px] md:tw-w-[300px] md:tw-h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
