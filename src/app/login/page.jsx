"use client";

import { useState } from "react";
import {
  Box,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import Work3 from "@/assets/Work3.webp";
import NextLink from "next/link";

function Authentication() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setForm({ ...form, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setForm({ ...form, password: event.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post("https://dummyjson.com/auth/login", {
        username: form.email,
        password: form.password,
      });
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);

      toast.error("Неправильный логин или пароль!");
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-pb-8 tw-px-[40px] tw-bg-[#7a1d39] md:tw-flex md:tw-flex-row md:tw-h-[100vh] ">
      <Box
        sx={{
          flexBasis: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSuccess ? (
          <Box>
            <Typography sx={{ color: "#d6c3a5" }}>SUCCESS</Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "18px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "33px",
                  fontWeight: "600",
                  color: "#d6c3a5",
                }}
              >
                Log in
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "400",
                  color: "#d6c3a5",
                }}
              >
                Log in to stay connected.
              </Typography>
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={form.email}
                onChange={handleEmailChange}
              />
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={form.password}
                onChange={handlePasswordChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me?"
                sx={{ color: "#d6c3a5" }}
              />
              <Button sx={{ color: "#d6c3a5" }}>Forgot Password?</Button>
            </Box>
            <Box>
              <Button
                sx={{
                  px: "50px",
                  backgroundColor: "#d6c3a5",
                  color: "#7a1d39",
                }}
                variant="contained"
                fullWidth
                disableElevation
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#d6c3a5",
              }}
            >
              or sign in with other accounts?
            </Box>
            <Box
              sx={{
                display: "flex",
                columnGap: "25px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NextLink
                href="https://makesyoufluent.com/all/?cmpid=64f9b76b96406f000150b821&sub1=MYF_Tutor_ALL&sub2=english%20tutor%20online&sub3=b&sub4=162684614772&sub5=686771673310&sub6=20920462484&sub7=c&sub8=&sub9=g&sub10=&ref_id=CjwKCAiA5L2tBhBTEiwAdSxJX6Y1XAd6QC98SSIaWDCvjAHhWrpbTrXbp13FFFt-gK76xATlMVoj4RoCP_8QAvD_BwE&gclid=CjwKCAiA5L2tBhBTEiwAdSxJX6Y1XAd6QC98SSIaWDCvjAHhWrpbTrXbp13FFFt-gK76xATlMVoj4RoCP_8QAvD_BwE"
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <GoogleIcon />
                </IconButton>
              </NextLink>
              <NextLink
                href="https://www.facebook.com/share/p/j1aTFjum1TxtZ8eh/?mibextid=oFDknk"
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <FacebookIcon />
                </IconButton>
              </NextLink>
              <NextLink
                href="https://www.instagram.com/makesyoufluent?igsh=MTRtbmdvaWs5anpicg=="
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <InstagramIcon />
                </IconButton>
              </NextLink>
              <NextLink
                href="https://www.linkedin.com/posts/bank-kyrgyzstan_mbank-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%BC-%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B8%D0%BB-%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%BD%D1%83%D1%8E-%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%83-activity-7155510787921305600-PhRk?utm_source=share&utm_medium=member_android"
                passHref
              >
                <IconButton sx={{ color: "#d6c3a5" }}>
                  <TwitterIcon />
                </IconButton>
              </NextLink>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ color: "#d6c3a5" }}>Don’t have an account? </Box>
              <Box sx={{ color: "#d6c3a5" }}>Click here to sign up.</Box>
            </Box>
          </Box>
        )}
      </Box>

      <div
        sx={{
          flexBasis: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" tw-hidden md:tw-flex md:tw-basis-[50%] md:flex-col md:tw-justify-center md:tw-items-center"
      >
        <Image src={Work3} alt="Work" className="tw-w-[300px] tw-h-[450px]" />
      </div>
    </div>
  );
}

export default Authentication;
