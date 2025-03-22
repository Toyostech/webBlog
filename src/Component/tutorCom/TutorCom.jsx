import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Subheader from '../ReuseableUI/subheader/Subheader'

import { Tutordate } from '../ReuseableUI/Data'
import twitter from '../pic/twitter.png'
import whatsapp from '../pic/whatsapp.png'
import instagram from '../pic/instagram.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderSettingstutor } from '../ReuseableUI/slider/Slider'



const TutorCom = () => {
    
    return (
        <>
            <section style={{
                background: "#673ad7",
                paddingTop: 30,

            }}>
                <Container>
                    <Subheader
                        headerSpan="teachers"
                        Hander="Expert"
                        title="MEET OUT FACULTY"


                    />
                    <Typography variant='h4' color='#fff' fontSize={25} fontWeight={500}>We help you to create innovations and we transform ideas into
                        reality. The innovation is often identified with new technology
                    </Typography>
                    <Swiper {...sliderSettingstutor}>
                        <Box paddingBottom={20} >
                            <Grid container spacing={5} alignItems="center" justifyContent="center" marginTop={2}>
                                {Tutordate.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{
                                            maxWidth: "500px",
                                            height: "auto",
                                            margin: "auto",
                                            background: "white",
                                            gap: 4,
                                            overflow: 'hidden'
                                        }}>


                                            <div style={{

                                                borderRadius: 20,
                                                cursor: "pointer",
                                                margin: "auto",
                                                textAlign: "center"
                                            }}>
                                                <img src={item.images} width={400} height={"auto"} alt=''


                                                />
                                                <Box sx={{
                                                    display: "flex",

                                                    justifyContent: "space-evenly",
                                                    alignItems: "center",
                                                    gap: 5,
                                                    cursor: "pointer",
                                                    background: "#fff",

                                                    // ":hover":{
                                                    //     background: "#fff",
                                                    //     display: "none",
                                                    //     justifyItems: "center",
                                                    //     alignItems: "center",
                                                    //     cursor: "pointer",  
                                                    // }
                                                }}>

                                                    <img src={whatsapp} alt='' width={50} height={50} />
                                                    <img src={twitter} alt='' width={50} height={50} />
                                                    <img src={instagram} alt='' width={50} height={50} />


                                                </Box>

                                            </div>
                                            <div style={{
                                                textAlign: "center"
                                            }}>
                                                <Typography variant='h6' fontWeight={800}>{item.lable}</Typography>
                                                <Typography fontWeight={600}>{item.title}</Typography>

                                            </div>






                                        </div>

                                    </SwiperSlide>

                                ))}





                            </Grid>

                        </Box>
                    </Swiper>




                </Container>

            </section>

        </>
    )
}

export default TutorCom
