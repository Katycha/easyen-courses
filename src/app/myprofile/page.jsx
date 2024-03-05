"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Katycha from "@/assets/Katycha.jpg";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

const MyProfile = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const teacherData = localStorage.getItem("teacher");
    if (teacherData) {
      setSelectedTeacher(JSON.parse(teacherData));
    }
  }, []);

  return (
    <div className="tw-bg-[#7a1d39] tw-p-[50px] tw-h-[100vh]">
      <div className="tw-flex tw-flex-col tw-gap-y-[30px] tw-w-[300px]">
        <div className="tw-border-1 tw-border-[#d6c3a5] tw-flex tw-gap-x-4">
          <Image
            src={Katycha}
            alt="image"
            className="tw-h-[50px] tw-w-[50px] tw-rounded-md"
          />
          <Typography className="tw-text-[#d6c3a5]">
            Dosmatova Bubukatycha
          </Typography>
        </div>
        <Link href="/ourteam">
          <Button className="tw-bg-[#d6c3a5] tw-text-[#7a1d39] tw-w-[150px]">
            Join a course
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
