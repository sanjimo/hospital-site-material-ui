import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
      <Box sx={{ flexGrow: 1, backgroundColor: 'lightgray', mb:0, mt: 0.5 }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{backgroundColor:'lightgray'}}>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightgray'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor: 'lightgray'}}>
                     <CardContent>
                        <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
                           SERVICES
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2">
                           Emergency Dental Care
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Treatment of Personal Disease
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Tooth Extraction
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Check Up
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightgray'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor: 'lightgray'}}>
                     <CardContent>
                        <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
                           ORAL HEALTH
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Emergency Dental Care
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Treatment of Personal Disease
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Tooth Extraction
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           Check Up
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightgray'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor: 'lightgray'}}>
                     <CardContent>
                        <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
                        OUR ADDRESS
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1}} variant="body2" >
                           New York - 101010
                        </Typography>
                        <Typography sx={{textAlign: 'start', m:1, mb:2}} variant="body2" >
                           Hudson Yards
                        </Typography>
                        <FacebookIcon sx={{mx:1}}></FacebookIcon>
                        <GoogleIcon sx={{mx:1}}></GoogleIcon>
                        <TwitterIcon sx={{mx:1}}></TwitterIcon>
                        <Typography sx={{textAlign: 'start', m:1, my:2}} variant="body2" >
                           Call Now <span style={{color:'blue'}}>+234567891</span>
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
         </Grid>
         <Typography sx={{textAlign: 'center', mt:1, mb:0, pb: 1}} variant="body2" >
            Copyright 2021 All Rights Reserved
         </Typography>
      </Box>
    );
};

export default Footer;