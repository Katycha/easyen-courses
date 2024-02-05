/*import { Box, Typography, TextField, Checkbox, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner"; 

function Login() {
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
    <div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-[#7a1d39] tw-p-[40px] md:tw-flex md:tw-flex-row">
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
           {isSuccess ? ( 
               <Box> 
                  <Typography> 
                    Verificated your Email
                  </Typography> 
               </Box> 
            ) : ( 
               <Box 
                  sx={{ 
                     display: 'flex', 
                     flexDirection: 'column', 
                     rowGap: '18px', 
                  }} 
               >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#f5ebeb", fontWeight: "400" }}>
              EasyEn
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "16px" }}
          >
            <Typography sx={{ color: "#f5ebeb", fontWeight: "600" }}>
              Log In
            </Typography>
            <Typography sx={{ color: "#f5ebeb", fontWeight: "400" }}>
              Log in to stay connected.
            </Typography>
          </Box>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={form.email} 
                        onChange={handleChange} />
          <TextField id="outlined-basic" label="Password" variant="outlined"  type="password" 
                        value={form.password} 
                        onChange={handleChange} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox color="default" />
              <Typography sx={{ color: "#f5ebeb", fontWeight: "400" }}>
                Remember me?
              </Typography>
            </Box>
            <Button variant="text" className="tw-text-[#f5ebeb]">
              Forgot Password
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingX: "24px",
              paddingY: "8px",
            }}
          >
            <Button
              variant="contained"
              className="tw-bg-[#f5ebeb] tw-text-[#7a1d39]"  disableElevation 
                        onClick={handleSubmit} 
            >
              Log in
            </Button>
          </Box>
       </Box>   
    </div>
  );
}

export default Login;*/
