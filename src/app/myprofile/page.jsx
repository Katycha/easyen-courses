"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Katycha from "@/assets/Katycha.jpg";
import { Box, Typography } from "@mui/material";
import Form from "@/components/Form";
import FormCard from "@/components/FormCard";

const MyProfile = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    teacher: "",
    schedule: "",
    price: "",
  });

  const handleAdd = () => {
    setCourses((prevState) => [...prevState, { ...newCourse, id: uuidv4() }]);
    setNewCourse({ teacher: "", schedule: "", price: "" });
  };

  const handleTeacherChange = (event) => {
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      teacher: event.target.value,
    }));
  };

  const handleScheduleChange = (event) => {
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      schedule: event.target.value,
    }));
  };

  const handlePriceChange = (event) => {
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      price: event.target.value,
    }));
  };

  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  return (
    <div className="tw-bg-[#7a1d39] tw-p-[50px] tw-h-[100vh]">
      <div className="tw-gap-y-[30px] tw-w-[300px]">
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
      </div>
      <div className="tw-flex tw-flex-col tw-pt-[20px] tw-gap-y-[40px] md:tw-flex md:tw-flex-row  md:tw-basis-1/3 md:tw-gap-x-[40px] md:tw-flex-wrap">
        <Form
          className="tw-w-[300px]"
          handleAdd={handleAdd}
          handleTeacherChange={handleTeacherChange}
          handlePriceChange={handlePriceChange}
          handleScheduleChange={handleScheduleChange}
          teacher={newCourse.teacher}
          price={newCourse.price}
          schedule={newCourse.schedule}
        />
        {courses.map((course) => (
          <FormCard
            key={course.id}
            title="Added course"
            teacher={course.teacher}
            schedule={course.schedule}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
