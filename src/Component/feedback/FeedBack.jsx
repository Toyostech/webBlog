import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'



import React from 'react'

const FeedBack = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down("xs"))
    return (
        <>
            <section >
                <Container>
                    <Typography variant='h4' fontSize={20} fontWeight={800} textAlign={"center"} >CLIENTS FEEBACK</Typography>
                    <Typography variant='h3' marginBottom={5} fontWeight={700} textAlign={"center"}>What our client says</Typography>

                    <Box margin={5} bgcolor={"red"} alignItems={"center"} justifyContent={"center"} boxShadow={"11px -10px 10px black"}>
                        <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
                            <Grid item md={6} sx={6} sm={12}>
                                <Typography variant='h5' paddingLeft={6} fontSize={20} fontWeight={700} color='white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum voluptatibus corporis explicabo consectetur porro rem expedita, nulla
                                     fuga nobis officia ipsa maxime ad. Recusandae debitis, error nobis ab ratione delectus.</Typography>

                            </Grid>
                            <Grid item md={6} sx={6} sm={6}>
                                <img src="/Img/box4.jpg" alt=''  style={{
                                    width: "100%",
                                    height:  "100%"
                                }} />
                            </Grid>

                        </Grid>

                    </Box>
                </Container>


            </section>

        </>
    )
}

export default FeedBack
