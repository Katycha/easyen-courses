import Aiperi from "@/assets/Aiperi.jpeg";
import Adina from "@/assets/Adina.jpeg";
import Sapargul from "@/assets/Sapargul.jpeg";
import Benazir from "@/assets/Benazir.jpeg";
import Syimyk from "@/assets/Syimyk.jpeg";
import Nursultan from "@/assets/Nursultan.jpeg";
import Image from "next/image";

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
    },
    {
      img: Syimyk,
      name: "Syimyk Zhyrgalbekov",
      id: 2,
      university: "Gadjah Mada University",
      country: "Indonesia",
      test: "SAT 200",
      age: 24,
    },
    {
      img: Benazir,
      name: "Benazir Baialieva",
      id: 3,
      university: "Kyrgyz State Law Academy",
      country: "Kyrgyzstan",
      test: "TOEFL 120",
      age: 27,
    },
    {
      img: Aiperi,
      name: "Aiperi Usman",
      id: 4,
      university: "Kyrgyz - Turkish Manas University",
      country: "Kyrgyzstan",
      test: "IELTS 8.0",
      age: 24,
    },

    {
      img: Adina,
      name: "Adina Tilek",
      id: 5,
      university: "North American University",
      country: "USA",
      test: "IELTS 7.5",
      age: 30,
    },
    {
      img: Nursultan,
      name: "Nursultan Asylov",
      id: 6,
      university: "Bemidji State University",
      country: "USA",
      test: "Duolingo 90",
      age: 26,
    },
  ];
  return (
    <div className="tw-bg-[#7a1d39] tw-p-[50px]">
      <div className="tw-flex tw-justify-center tw-items-center tw-basis-1/3 tw-flex-wrap tw-px-[20px] tw-gap-x-[50px]">
        {teachers.map((item) => (
          <div
            className="tw-w-[300px] tw-h-[350px] tw-rounded-lg tw-border-[red] tw-text-[#fff]"
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
            <p>{item.university}</p>
            <p>{item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
