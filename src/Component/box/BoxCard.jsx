import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Coursdate } from '../ReuseableUI/Data'


const BoxCard = () => {
  return (
    <section style={{
        paddingBottom: 30
    }}>
        <Container>
            <Box sx={{
                background: "#643ad3",
                
            }}>
                <Grid container spacing={2} marginTop={2}>
                    {Coursdate.map((val, index)=>(
                        <Grid key={index} item xs={12} md={4} >
                            <Paper  style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 5,
                                background: "white",
                                padding: 20,
                               
                                textAlign: "center",
                                boxShadow: "11px 7px -8px -6px rgba(66, 68, 90, 1)",

                            }}>
                                <img src={val.img} alt='' width={100} height={100} style={{
                                    
                                }}/>
                                <Typography variant='h5' fontWeight={800}>{val.label}</Typography>
                                

                            </Paper>

                        </Grid>
                    ))}
                </Grid>

            </Box>
        </Container>
    </section>
  )
}

export default BoxCard
