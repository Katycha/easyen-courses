"use client";

import Aiperi from "@/assets/Aiperi.jpeg";
import Adina from "@/assets/Adina.jpeg";
import Sapargul from "@/assets/Sapargul.jpeg";
import Benazir from "@/assets/Benazir.jpeg";
import Syimyk from "@/assets/Syimyk.jpeg";
import Nursultan from "@/assets/Nursultan.jpeg";
import Work1 from "@/assets/Work1.webp";
import Work2 from "@/assets/Work2.webp";
import Work3 from "@/assets/Work3.webp";
import Work4 from "@/assets/Work4.webp";
import Hi from "@/assets/Hi.webp";
import Image from "next/image";
import { Button } from "@mui/material";
import { Toaster, toast } from "sonner";

const Ourteam = () => {
  const teachers = [
    {
      img: Sapargul,
      name: "Sapargul Abdinabieva",
      id: 1,
      university: "Sussex University",
      country: "UK",
      test: "IELTS 7.5",
      age: 32,
      level: "Beginner level",
      schedule: "Mn, Wd, Fr 16:00",
      price: "100$/month",
    },
    {
      img: Syimyk,
      name: "Syimyk Zhyrgalbekov",
      id: 2,
      university: "Mercubuana University",
      country: "Indonesia",
      test: "SAT 200",
      age: 24,
      level: "Upper-intermediate level",
      schedule: "Mn, Wd, Fr 10:00",
      price: "150$/month",
    },
    {
      img: Benazir,
      name: "Benazir Baialieva",
      id: 3,
      university: "Kyrgyz State Law Academy",
      country: "Kyrgyzstan",
      test: "TOEFL 120",
      age: 27,
      level: "Intermediate level",
      schedule: "Tu, Th, St 15:00",
      price: "100$/month",
    },
    {
      img: Aiperi,
      name: "Aiperi Usman",
      id: 4,
      university: "Kyrgyz - Turkish Manas University",
      country: "Kyrgyzstan",
      test: "IELTS 8.0",
      age: 24,
      level: "Beginner level",
      schedule: "Mn, Wd, Fr 16:00",
      price: "100$/month",
    },

    {
      img: Adina,
      name: "Adina Tilek",
      id: 5,
      university: "North American University",
      country: "USA",
      test: "IELTS 7.5",
      age: 30,
      level: "Upper-intermediate level",
      schedule: "Mn, Wd, Fr 09:00",
      price: "200$/month",
    },
    {
      img: Nursultan,
      name: "Nursultan Asylov",
      id: 6,
      university: "University of Massachusetts Amherst",
      country: "USA",
      test: "Duolingo 90",
      age: 26,
      level: "Intermediate level",
      schedule: "Tu, Th, St 16:00",
      price: "110$/month",
    },
  ];

  const handleClick = () => {
    toast.success("Successfully joined!");
  };

  return (
    <div className="tw-bg-[#7a1d39] tw-p-[50px]">
      <h2 className="tw-text-center tw-text-[#d6c3a5] tw-mb-[40px]">
        Our mentors
      </h2>
      <div className="tw-flex tw-justify-center tw-items-center tw-basis-1/3 tw-flex-wrap tw-px-[20px] tw-gap-x-[50px] tw-mb-[50px]">
        {teachers.map((item) => (
          <div
            className="tw-w-[300px] tw-h-[350px] tw-rounded-lg tw-border-solid tw-border-2   tw-border-[#d6c3a5] tw-text-center tw-pt-[10px] tw-mb-[30px] tw-bg-blur-2xl tw-text-[#d6c3a5]"
            key={item.id}
          >
            <Image
              src={item.img}
              alt={item.name}
              className="tw-w-[130px] tw-h-[150px] tw-rounded-[20%]"
            />
            <p>
              {item.name} , {item.age} y.o.
            </p>
            <p>Education: {item.university}</p>
            <p>{item.country}</p>
            <p>Mentor of: {item.level}</p>
            <div className="tw-mt-[10px]">
              <Button
                variant="contained"
                className="tw-bg-[#d6c3a5] tw-text-[#7a1d39]"
                onClick={handleClick}
              >
                join
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="tw-text-[#d6c3a5] tw-flex tw-flex-col tw-text-center tw-px-[20px] tw-gap-y-[40px]">
        <div className="tw-flex tw-flex-col tw-gap-y-[40px] md:tw-flex md:tw-flex-row md:tw-justify-between md:tw-mx-[40px]">
          <div className="tw-flex tw-flex-col tw-gap-y-[30px] tw-justify-center">
            <h2>Why we created EasyEn</h2>
            <p>
              It is a journey filled with excitement, discovery, and a promise
              to help others unlock the wonders of the world, one word at a
              time.
            </p>
          </div>
          <div>
            <Image
              src={Hi}
              alt="mobile"
              className="tw-w-[200px] tw-h-[170px]  md:tw-w-[450px] md:tw-h-[300px] md:tw-ml-10 tw-rounded-[10%]"
            />
          </div>
        </div>
        <h1 className="tw-my-[30px]">How EasyEn works</h1>
        <div className="tw-flex tw-flex-col tw-gap-y-[40px] md:tw-flex md:tw-flex-row md:tw-justify-between md:tw-mx-[40px]">
          <div className="">
            <Image
              src={Work1}
              alt="mobile"
              className="tw-h-[300px] tw-w-[200px] md:tw-w-[300px] md:tw-h-[450px] md:tw-mr-10"
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-y-[30px]  tw-justify-center">
            <h3>Real-Life Conversations</h3>
            <p>
              Engage in enjoyable and dynamic voice conversations with our
              mentors.
            </p>
            <h3>Refine Your Pronunciation</h3>
            <p>
              Improve your pronunciation skills with instant feedback and
              practice.
            </p>
            <h3>Immediate Feedback</h3>
            <p>
              Receive instant feedback on your language skills and valuable tips
              for improvement.
            </p>
          </div>
        </div>
        <div className="tw-flex tw-flex-col-reverse tw-gap-y-[40px] md:tw-flex md:tw-flex-row md:tw-justify-between md:tw-mx-[40px]">
          <div className="tw-flex tw-flex-col tw-gap-y-[30px]  tw-justify-center">
            <h3>Explore Multiply Languages</h3>
            <p>
              Start by practising the most popular languages in the world, and
              stay tuned for our ongoing additions to our language list.
            </p>
          </div>
          <div>
            <Image
              src={Work2}
              alt="mobile"
              className="tw-h-[300px] tw-w-[200px] md:tw-w-[300px] md:tw-h-[450px] md:tw-ml-[40px]"
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-y-[40px] md:tw-flex md:tw-flex-row md:tw-justify-between md:tw-mx-[40px]">
          <div className="">
            <Image
              src={Work3}
              alt="mobile"
              className="tw-h-[300px] tw-w-[200px] md:tw-w-[300px] md:tw-h-[450px] md:tw-mr-10"
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-y-[30px]  tw-justify-center">
            <h3>Interesting Topics to Explore</h3>
            <p>
              Talk about the weather or prepare for a job interview - choose a
              topic based on your current mood.
            </p>
          </div>
        </div>
        <div className="tw-flex tw-flex-col-reverse tw-gap-y-[40px] md:tw-flex md:tw-flex-row md:tw-justify-between md:tw-mx-[40px]">
          <div className="tw-flex tw-flex-col tw-gap-y-[30px]  tw-justify-center">
            <h3>Seamless Translations</h3>
            <p>
              Access instant translations to assist you during your
              conversations and learning journey.
            </p>
          </div>
          <div>
            <Image
              src={Work4}
              alt="mobile"
              className=" tw-h-[300px] tw-w-[200px] md:tw-w-[300px] md:tw-h-[450px] md:tw-ml-[40px]"
            />
          </div>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Ourteam;
