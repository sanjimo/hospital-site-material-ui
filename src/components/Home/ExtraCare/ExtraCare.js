import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import img from '../../../images/treatment.png';


const ExtraCare = () => {
    return (
        <Container sx={{ flexGrow: 1 , m:6,  width:'75%'}}>
            <Grid container spacing={2} sx={{m:5}}>
                <Grid item xs={12} md={6}>
                    <img
                    component="img"
                    sx={{maxWidth:'xs'}}
                    style={{border:0, width:'80%', height:'500px'}}
                    src={img}
                    alt="treatment"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: 'left'}}>
                        <Typography sx={{fontWeight:'600', mt:3}} gutterBottom variant="h4" component="div">
                           Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography sx={{fontWeight:'300', fontSize:'16px', mt:3}} variant="h6" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, alias voluptates aspernatur quae necessitatibus rem pariatur magnam reprehenderit soluta suscipit accusamus quibusdam amet aperiam maiores porro accusantium et ipsa vitae quaerat minus at neque facilis quo cumque. Eligendi, voluptatem ipsum.
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor:"#39EAD6", mt:3}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExtraCare;