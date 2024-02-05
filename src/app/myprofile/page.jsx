"use client";

import {
  Box,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import axios from "axios";

import { toast } from "sonner";

function Authentication() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoadind, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: form.email,
        password: form.password,
      });
      setIsLoading(false);
      setIsSuccess(true);
      console.log("res: ", res);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);

      toast.error("НЕПРАВИЛЬНЫЙ ЛОГИН ИЛИ  ПАРОЛЬ");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
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
            <Typography>Hello</Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "18px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "start" }}>
              <Typography
                sx={{
                  ml: "8px",
                  fontSize: "33px",
                  mr: "42px",
                }}
              >
                RAP
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  fontSize: "33px",
                  fontWeight: "600",
                }}
              >
                Sign In
              </Box>
              <Box
                sx={{
                  fontSize: "17px",
                  fontWeight: "400",
                  color: "#8A92A6",
                }}
              >
                Sign in to stay connected.
              </Box>
            </Box>
            <Box>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={form.email}
                onChange={handleChange}
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
                onChange={handleChange}
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
                sx={{ color: "#8A92A6" }}
              />
              <Button sx={{ color: "#3A57E8" }}>Forgot Password</Button>
            </Box>
            <Box>
              <Button
                sx={{
                  px: "50px",
                }}
                variant="contained"
                fullWidth
                color="#fff"
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
              <GoogleIcon
                sx={{
                  color: "#0286F7",
                  background: "#fff",
                }}
              />
              <FacebookIcon
                sx={{
                  color: "#395196",
                  background: "#fff",
                }}
              />
              <InstagramIcon
                sx={{
                  color: "#6228d7",
                  background: "#fff",
                }}
              />
              <TwitterIcon
                sx={{
                  color: "#1381ab",
                  background: "#fff",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>Don’t have an account? </Box>
              <Box sx={{ color: "#3A57E8" }}>Click here to sign up.</Box>
            </Box>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          flex: "1 1 auto",
          background:
            "radial-gradient(50% 50% at 50% 50%, #3B8AFF 0%, #0048B2 100%)",
        }}
      >
        2
      </Box>
    </Box>
  );
}
export default Authentication;
