import { Container, Grid, Typography } from '@mui/material'

import React from 'react'

const OurAgency = () => {
    return (
        <>
            <Container>
                <Grid container spacing={3} alignItems='center' justifyContent="center" >
                    <Grid item md={6} >
                        <div style={{
                            textWrap: "wrap"
                        }}>
                            <Typography variant='h4' fontWeight={800} >Our Agency Story</Typography>
                            <Typography variant='h6' fontWeight={200} paddingBottom={2}> Check out our company story and work process</Typography>
                            <Typography variant='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto vel iste quidem cum,
                                praesentium sapiente adipisci vero voluptas consectetur.</Typography>
                            <Typography variant='h5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptate expedita esse incidunt perferendis iusto accusamus ipsam eum veniam fugit in delectus laboriosam, exercitationem nobis!

                            </Typography>
                            <Typography variant='h5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptate expedita esse incidunt perferendis iusto accusamus ipsam eum veniam fugit in delectus laboriosam, exercitationem nobis!

                            </Typography>

                        </div>






                    </Grid>
                    <Grid item md={6}>
                        <img src="/img/file (3).png" width={800} height={700} alt='' />

                    </Grid>


                </Grid>


            </Container>
            {/* "start_url": ".",
            "display": "standalone",
            "theme_color": "#000000",
            "background_color": "#ffffff" */}

        </>
    )
}

export default OurAgency