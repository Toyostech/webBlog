
import { Container, Grid, Typography } from '@mui/material'


import React from 'react'

import twitter from '../pic/twitter.png'
import whatsapp from '../pic/whatsapp.png'
import instagram from '../pic/instagram.png'


const Footer = () => {
    return (
        <section style={{
            background: "#512da8",
            paddingTop: 40,
            paddingBottom: 20

        }}>


            <Container>
                <Grid container spacing={2} textAlign="center" justifyContent={"center"}>
                    <Grid item md={3} xs={12} alignItems={"center"} justifyContent={"center"}>
                        <div>
                            <Typography variant='h3' sx={{
                                ":hover":{
                                    background: "red",
                                    padding: 2,
                                    borderRadius: "40px 5px",
                                    transition: "ease-in 500ms",
                                    color: "#fff"
                                }
                            }}   paddingBottom={{md:1, xs:0.5}}  fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}  >
                                Get Started
                            </Typography>
                            <Typography variant='h5' fontSize={{md:20, xs:15}} style={{
                                fontWeight: 700,
                              
                                color: "#FFF"

                            }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi omnis sit aspernatur esse obcaecati fugit facilis illo laborum ipsum perferendis?
                            </Typography>
                        </div>

                    </Grid>
                    <Grid item md={3} sx={12} alignItems={"center"} justifyContent={"center"}>
                        <div>
                            <Typography variant='h3' sx={{
                                ":hover":{
                                    background: "red",
                                    padding: 2,
                                    borderRadius: "40px 5px",
                                    transition: "ease-in 500ms",
                                    color: "#fff"
                                }
                            }}   paddingBottom={{md:1, xs:0}} fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}  >
                                Services
                            </Typography>
                            <div
                                style={{
                                    fontWeight: 700,
                                   
                                  
                                    color: "#fff"
                                }} >
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Web design
                                </Typography>
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Development
                                </Typography>
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Branding
                                </Typography>
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Digital marketing
                                </Typography>



                            </div>


                        </div>

                    </Grid>
                    <Grid item md={3} sx={6}>
                        <div>
                            <Typography  paddingBottom={{md:1, xs:0}} sx={{
                                ":hover":{
                                    background: "red",
                                    padding: 2,
                                    borderRadius: "40px 5px",
                                    transition: "ease-in 500ms",
                                    color: "#fff"
                                }
                            }}  fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}>
                                Company
                            </Typography>
                            <div style={{
                                fontWeight: 700,
                              
                              
                                color: "#fff"
                            }}>
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Policy
                                </Typography>
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Startup
                                </Typography>
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Careers
                                </Typography >
                                <Typography variant='h5' fontSize={{md:20, xs:15}}>
                                    Terms & condition
                                </Typography>

                            </div>
                        </div>

                    </Grid>
                    <Grid item md={3} sx={12}>
                        <div>
                            <Typography variant='h3' paddingBottom={{md:1, xs:0}} fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}} sx={{
                                ":hover":{
                                    background: "red",
                                    padding: 2,
                                    borderRadius: "40px 5px",
                                    transition: "ease-in 500ms",
                                    color: "#fff"
                                }
                            }} >
                                Follow Us
                            </Typography>
                            <div style={{
                                fontWeight: 600,
                                fontSize: 25,
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff"

                            }} >

                                <a typeof='maill'>salamitoyoikabiru@gmail.com</a>
                                <a type='tell'>07037983613</a>



                            </div>
                            <Grid container spacing={4} paddingTop={5} textAlign="center" justifyContent={"center"}>
                                <Grid item alignItems={"center"} justifyContent={"center"} xs={2}>

                                    <img src={whatsapp} width={50} height={50} alt='' />

                                </Grid>
                                <Grid item alignItems={"center"} justifyContent={"center"}>
                                    <img src={twitter} width={50} height={50} alt='' />
                                </Grid>

                                <Grid item alignItems={"center"} justifyContent={"center"} sx={{
                                    padding: 3,
                                    alignItems: "center",

                                    ":hover": {
                                        background: "red",
                                        borderRadius: "50px",
                                        alignItems: "center",
                                        transition: "ease-in-out 1000ms",
                                        
                                    }
                                }}>
                                    <img src={instagram} width={50} height={50} alt='' />
                                </Grid>


                            </Grid>

                        </div>

                    </Grid>

                </Grid>

            </Container>
        </section>


    )
}

export default Footer
