import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/header";
import Footer from "./components/footer";
import { INode } from "../core/models/node";



const MainLayout = ({ children }: INode, props: any) => {
  return (
    <div>
      <Header/>
      <CssBaseline />
      <Container style={{maxWidth: "1200px"}}>
        <Box  >
          {/* <img src={banner} width="1200px" height="540" alt="" /> */}
        </Box>
      </Container>
      <div className="container">
        {children}
        </div>
        <Footer/>
    </div>
  );
};

export default MainLayout;