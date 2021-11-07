import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';


const Testimonial = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
            <Container>
                <Typography sx={{fontWeight: 500, textAlign: 'start', m:2, color:"#39EAD6"}} variant="h6" component="div">
                   TESTIMONIAL
                </Typography>
                <Typography sx={{fontWeight: 600, textAlign: 'start', m:2}} variant="h4" component="div">
                   What's Our Patients Says
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{mt:4, mb:2}}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, m: 2 }}>
                            <CardContent>
                                <Typography sx={{textAlign: 'start'}} variant="h6" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni error voluptatum architecto iusto sed?
                                </Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                                <CardMedia
                                component="img"
                                style={{height: '80px', width: 'auto', marginStart: 0}}
                                image={img1}
                                alt=""
                                />
                                <CardContent>
                                    <Typography sx={{textAlign: 'start', color:"#39EAD6"}} variant="h6">
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{textAlign: 'start'}} variant="body" color="text.secondary">
                                       California
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, m: 2 }}>
                            <CardContent>
                                <Typography sx={{textAlign: 'start'}} variant="h6" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni error voluptatum architecto iusto sed?
                                </Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                                <CardMedia
                                component="img"
                                style={{height: '80px', width: 'auto', marginStart: 0}}
                                image={img2}
                                alt=""
                                />
                                <CardContent>
                                    <Typography sx={{textAlign: 'start', color:"#39EAD6"}} variant="h6">
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{textAlign: 'start'}} variant="body">
                                       California
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, m: 2 }}>
                            <CardContent>
                                <Typography sx={{textAlign: 'start'}} variant="h6" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni error voluptatum architecto iusto sed?
                                </Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                                <CardMedia
                                component="img"
                                style={{height: '80px', width: 'auto', marginStart: 0}}
                                image={img3}
                                alt=""
                                />
                                <CardContent>
                                    <Typography sx={{textAlign: 'start', color:"#39EAD6"}} variant="h6">
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{textAlign: 'start'}} variant="body" color="text.secondary">
                                       California
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;