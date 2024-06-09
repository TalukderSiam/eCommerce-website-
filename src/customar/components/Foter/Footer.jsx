import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ pb: 5 }} variant="h6" gutterBottom>
            Company
          </Typography>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">About</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Jobs</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Press</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Partner</Button>
          </div>
        </Grid>

        {/* Support Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ pb: 5 }} variant="h6" gutterBottom>
            Support
          </Typography>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Help Center</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Contact Us</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Privacy Policy</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Terms of Service</Button>
          </div>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ pb: 5 }} variant="h6" gutterBottom>
            Services
          </Typography>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Consulting</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Sales</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Support</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Training</Button>
          </div>
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ pb: 5 }} variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Facebook</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Twitter</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">LinkedIn</Button>
          </div>
          <div>
            <Button sx={{ pb: 5 }} color="inherit">Instagram</Button>
          </div>
        </Grid>
      
        {/* All rights reserved section */}
        <Grid item xs={12} className="mt-400">
          <Typography sx={{ pt: 5, pb: 3 ,mt: 40  }} variant="body2" color="inherit">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved. 
            <br></br>
            Any reproduction of this website or its contents <br></br> without express permission is prohibited.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
