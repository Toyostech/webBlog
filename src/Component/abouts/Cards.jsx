import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { aboutdata } from '../ReuseableUI/Data'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from '../ReuseableUI/slider/Slider'

const Cards = () => {
    return (
        <>
            <Swiper {...sliderSettings}>
              
                    {aboutdata.map((items, index) => (
                        <SwiperSlide key={index} style={{
                            alignItems: "center",
                            paddingTop: 45,
                           
                            
                            
                        }}>
                            <Box  sx={{
                                
                                maxWidth: "250px",
                                height: "auto",
                                borderRadius: "20px",
                                boxShadow: "5px 3px 10px ",
                                textAlign: "center",
                                margin: "auto",
                                paddingBottom: 5,
                                overflow: "hidden",
                                
                                ":hover":{
                                    scale: "1.025",
                                    cursor: "pointer",
                                    transition: "300ms ease out",
                                    background: "liner-gradent(180deg, rgba(148, 59, 59, 0) 0%, rgba(136, 160, 255, 0.46) 217.91%)"

                                }
                            }}>

                                <div style={{
                                    background: "red",
                                    padding: 20,
                                    borderRadius: "0px 70px 0px 70px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <img src={items.img} alt="" width={100} height={100} />

                                </div>
                                <div>
                                    <Typography variant='h3' padding={3} fontWeight={700} fontSize={20}>{items.lable}</Typography>
                                    <Typography paddingBottom={5} sx={{
                                        textWrap: "wrap",
                                        padding: "1px 2px"
                                    }}>{items.text}</Typography>
                                </div>




                            </Box>
                        </SwiperSlide>


                    ))}



        
            </Swiper>


        </>
    )
}

export default Cards
