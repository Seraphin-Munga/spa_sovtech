import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <AppBar className="footer" position="static" color="primary">
      <Toolbar>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
      </Toolbar>
    </AppBar>
  );
}