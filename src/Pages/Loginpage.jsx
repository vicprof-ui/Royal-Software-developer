import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress, 
  
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';



const Login = () => {
  const navigate =useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const Loginhandle = async () => {
    setLoading(true)
    setError("")
    let payload= {email,password}
    try {
      const response = axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/login",
        payload
      );
      console.log(response);
      // Handle successful login
      navigate("/");
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      setError(error?.response?.data?.error|| "Login failed")
    } finally{
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1565c0, #42a5f5)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: { xs: 4, sm: 5 },
            width: { xs: "90%", sm: 400 },
            borderRadius: "20px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1976d2, #42a5f5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 4px 20px rgba(25, 118, 210, 0.5)",
            }}
          >
            <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: "#0d47a1" }}
          >
            Welcome Back
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={Loginhandle}
            sx={{
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #1976d2, #0d47a1)",
              boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #1565c0, #0d47a1)",
              },
            }}
          >
          
           {loading ? (<CircularProgress size={24} color="inherit" />):("login")}
              
          </Button>       

          {/* Footer Text */}
          <Typography
            variant="body2"
            sx={{ mt: 3, color: "text.secondary", textAlign: "center" }}
          >
            Don’t have an account?{" "}
            <Link to ="/Registration"
              style={{
                color: "#1976d2",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}
export default Login
