import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const bannerBg ={
    background:`url(${bg})`
}

const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{flexGrow:1, my:4}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} style={{...verticalCenter}}>
                    <Box>
                        <Typography variant="h3" sx={{mb:3}}>
                        Your New Smile <br/>
                        Start Here
                        </Typography>
                        <Typography variant="h5" sx={{color:'lightgray', fontSize:14, mb:3}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam alias veniam soluta eaque laboriosam nisi autem in, reprehenderit enim.
                        </Typography>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment">
                           <Button variant="contained" style={{backgroundColor:"#39EAD6"}}>Get Appointment</Button>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{width:400, margin:'auto'}} src={chair} alt="chair"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;