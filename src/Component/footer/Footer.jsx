
import { Container, Grid, Typography } from '@mui/material'


import React from 'react'




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
                            <Typography variant='h3'  paddingBottom={{md:1, xs:0.5}}  fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}  >
                                Get Started
                            </Typography>
                            <Typography variant='h5' style={{
                                fontWeight: 700,
                                fontSize: 20,
                                color: "#FFF"

                            }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi omnis sit aspernatur esse obcaecati fugit facilis illo laborum ipsum perferendis?
                            </Typography>
                        </div>

                    </Grid>
                    <Grid item md={3}>
                        <div>
                            <Typography variant='h3'  paddingBottom={{md:1, xs:0}} fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}  >
                                Services
                            </Typography>
                            <ul



                                style={{
                                    fontWeight: 700,
                                    fontSize: 25,
                                    listStyle: "none",
                                    color: "#fff"
                                }} >
                                <li>
                                    Web design
                                </li>
                                <li>
                                    Development
                                </li>
                                <li>
                                    Branding
                                </li>
                                <li>
                                    Digital marketing
                                </li>



                            </ul>


                        </div>

                    </Grid>
                    <Grid item md={3}>
                        <div>
                            <Typography  paddingBottom={{md:1, xs:0}} fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}  
                              >
                                Company
                            </Typography>
                            <ul style={{
                                fontWeight: 700,
                                fontSize: 25,
                                listStyle: "none",
                                color: "#fff"
                            }}>
                                <li>
                                    Policy
                                </li>
                                <li>
                                    Startup
                                </li>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    Terms & condition
                                </li>

                            </ul>
                        </div>

                    </Grid>
                    <Grid item md={3}>
                        <div>
                            <Typography variant='h3' paddingBottom={{md:1, xs:0}} fontWeight={{md: 800, xs:500}} fontSize={{md:25, xs:20}}  >
                                Follow Us
                            </Typography>
                            <ul style={{
                                fontWeight: 600,
                                fontSize: 25,
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff"

                            }} >

                                <a typeof='maill'>salamitoyoikabiru@gmail.com</a>
                                <a type='tell'>07037983613</a>



                            </ul>
                            <Grid container spacing={4} paddingTop={5} textAlign="center" justifyContent={"center"}>
                                <Grid item alignItems={"center"} justifyContent={"center"} xs={2}>

                                    <img src="/img/whatsapp.png" width={50} height={50} alt='' />

                                </Grid>
                                <Grid item alignItems={"center"} justifyContent={"center"}>
                                    <img src="/img/twitter.png" width={50} height={50} alt='' />
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
                                    <img src="/img/instagram.png" width={50} height={50} alt='' />
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
