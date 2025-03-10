import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Subheader from '../ReuseableUI/subheader/Subheader'

import { boxdata } from '../ReuseableUI/Data'


const Post = () => {
    const date = new Date()
    const dates =date.toLocaleDateString();
    // const mon = date.getMonth();
    // const year= date.getFullYear();

   
    console.log(dates)
    return (
        <section style={{
            paddingBottom: 30
        }}>
            <Container>
                <div style={{
                    textAlign: "left",
                    marginTop: 50
                }}>
                <Subheader title="LATEST POST"  headerSpan="and articles" Hander="Our latest stories"/>
                </div>
                
                <Grid container spacing={3} marginTop={5}  alignItems={"center"} justifyContent="center">
                    {boxdata.map((cul, index) => (
                        <Grid item key={index} md={4} xs={12}  alignItems={"center"} justifyContent="center">

                            <Card sx={{
                                maxWidth: 300,
                                boxShadow: "11px 7px 8px -6px rgb(20, 22, 51)",
                                ":hover": {
                                    background: "red",
                                    transition: "ease-in-out 1000ms",
                                    color: "#fff"
                                }
                            }}>

                                <CardMedia component="img"
                                    alt=''


                                    image={cul.img}
                                />


                                <CardContent>

                                    <Typography variant='h6' textAlign="right" fontWeight={700}>{dates}</Typography>
                                    <Typography variant='h6' fontWeight={{md:800, xs: 600}} padding={2}>{cul.label}</Typography>


                                </CardContent>
                            </Card>

                        </Grid>

                    ))}


                </Grid>
            </Container>
            

        </section>
    )
}

export default Post
