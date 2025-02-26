"use client"
import { Container, Grid, Typography } from '@mui/material'
import imgs from '../pic/box5.jpg'
import img1 from '../pic/gril.jpg'

import React from 'react'

const Total = () => {
    return (
        <section style={{
           
            backgroundImage: "url(../../Img/bg.jpg)",
            
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          
        }}>
            <Container>
                <Grid container spacing={3} paddingBottom={2} justifyContent="space-evenly" alignItems="center">
                    <Grid item md={4} xs={4}>
                        <div style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                         
                          
                          
                        




                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={imgs} style={{
                                    borderRadius: "50%",
                                    textAlign: "center",

                                    alignItems: "center",
                                    justifyContent: "center"

                                }} width={100} height={100} alt='' />


                                <Typography variant='h3' fontSize={30} color='#fff' fontWeight={{ md: 800, sx: 200 }}>5236+</Typography>
                                <Typography variant='h4' fontSize={15} color='#fff' fontWeight={{ md: 800, sx: 200 }}>TOTAL COURSE</Typography>


                            </div>


                        </div>


                    </Grid>
                    <Grid item md={4} xs={4}>
                        <div style={{
                            justifyContent: "center",
                            textAlign: "center",
                          
                      




                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={img1}style={{
                                    borderRadius: "50%",
                                    textAlign: "center",

                                    alignItems: "center",
                                    justifyContent: "center"

                                }} width={100} height={100} alt='' />


                                <Typography variant='h3' fontSize={30} color='#fff' fontWeight={{ md: 800, sx: 200 }}>7909+</Typography>
                                <Typography variant='h4' fontSize={15} color='#fff' fontWeight={{ md: 800, sx: 200 }}>HAPPY STUDENTS</Typography>

                            </div>



                        </div>


                    </Grid>
                    <Grid item md={4} xs={4}>
                        <div style={{
                            justifyContent: "center",
                            textAlign: "center",
                           
                        
                          




                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={imgs}style={{
                                    borderRadius: "50%",
                                    textAlign: "center",

                                    alignItems: "center",
                                    justifyContent: "center"

                                }}width={100} height={100} alt='' />


                                <Typography variant='h3' fontSize={30} color='#fff' fontWeight={{ md: 800, sx: 200 }}>4735 +</Typography>
                                <Typography variant='h4' fontSize={15} color='#fff' fontWeight={{ md: 800, sx: 200 }}>EXPERT TEACHERS</Typography>


                            </div>


                        </div>


                    </Grid>


                </Grid>

            </Container>


        </section>


    )
}

export default Total;
