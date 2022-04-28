import React from "react";
import "./loginStyle.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { Button, Input } from "@mui/material";
const Login = () => {
  return (
    <>
      <section className="container">
        <nav className="navbar">
          <Button className="nav-icon">
            <BsArrowLeftShort />
          </Button>
          <Button className="nav-text">
            <h3>setting</h3>
          </Button>
        </nav>
        <header className="content">
          <div className="top_text">
            <h4>Your Phone Number</h4>
            <p>fsd sdfsd dsfsdfsd hhyt ghghfgh thrthtr gdthsf fhhfgdn efgds</p>
          </div>
          <div className="center_input">
            <Input value="Uzbekistan" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Login;
