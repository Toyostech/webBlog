import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Subheader from '../ReuseableUI/subheader/Subheader'

import { Tutordate } from '../ReuseableUI/Data'


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
                    <Typography variant='h4' fontSize={25} fontWeight={500}>We help you to create innovations and we transform ideas into
                        reality. The innovation is often identified with new technology
                    </Typography>
                    <Box paddingBottom={20} >
                        <Grid container spacing={5} alignItems="center" justifyContent="center" marginTop={2}>
                            {Tutordate.map((item, index) => (
                                <Grid item key={index}>

                                    <div style={{
                                      
                                        borderRadius: 20,
                                        cursor: "pointer"
                                    }}>
                                        <img src={item.img}  width={350} height={350} alt=''
                                        
                                        
                                        />
                                        <Box sx={{
                                            display: "flex",
                                           
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                            gap: 5,
                                            cursor: "pointer",
                                            background: "#fff",
                                            
                                            ":hover":{
                                                background: "#fff",
                                                display: "none",
                                                justifyItems: "center",
                                                alignItems: "center",
                                                cursor: "pointer",  
                                            }
                                        }}>
                                            
                                            <img src="/img/facebook.png" alt='' width={50} height={50}/>
                                            <img src="/img/instagram.png" alt='' width={50} height={50}/>
                                            <img src="/img/twitter.png" alt='' width={50} height={50}/>
                                            
                                            
                                        </Box>

                                    </div>
                                    <div style={{
                                        textAlign: "center"
                                    }}>
                                        <Typography variant='h6' fontWeight={800}>{item.lable}</Typography>
                                        <Typography fontWeight={600}>{item.title}</Typography>

                                    </div>



                                </Grid>

                            ))}





                        </Grid>

                    </Box>



                </Container>

            </section>

        </>
    )
}

export default TutorCom
