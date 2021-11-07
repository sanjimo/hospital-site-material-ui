import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import background from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Container, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const appointmentBg ={
    background: `url(${background})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode : 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1 , mb: 6, mt:6}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img
                    style={{width:'500px', marginTop:'-120px'}}
                    src={doctor}
                    alt="doctor"
                    />
                </Grid>
                <Grid item xs={12} md={7} sx={{display:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                   <Box sx={{me:5}}>
                   <Typography variant="h6" sx={{color:"#39EAD6", mb:5}}>
                        Appointment
                    </Typography>
                    <Typography variant="h3" sx={{color:'white'}}>
                        Make an Appointment Today
                    </Typography>
                    <Typography variant="h6" sx={{color:'white', fontWeight:400, fontSize:14, my:5}}>
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate ratione sit nobis quasi quibusdam ullam ea aspernatur cum modi!
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment">
                        <Button variant="contained" style={{backgroundColor:"#39EAD6"}}>Learn More</Button>
                    </NavLink>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentBanner;