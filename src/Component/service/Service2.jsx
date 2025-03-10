import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Service2 = () => {
    return (
        <>
            <section>
                <Container>
                    <Grid container spacing={5} justifyContent={"center"} alignItems={"center"}>
                        <Grid item md={6} gap={3}>
                            <img src="./img/uiux.png" alt="" srcset="" width={500} height={"auto"} />
                        </Grid>
                        <Grid item md={6} textAlign={"justify"} >
                            <Typography variant='h5' fontSize={14}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque laudantium, voluptate voluptatem ex incidunt qui. Excepturi quae nam molestiae odio ad voluptates cum delectus, quod iste ipsum aliquam labore?

                            </Typography>
                            <Typography variant='h5' fontSize={14}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, facilis.
                            </Typography>
                            <Typography variant='h5' fontSize={14}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quis dolore nisi laborum reprehenderit sint consequatur dolor dolores eligendi sed?
                            </Typography>
                            <Typography variant='h5' fontSize={14}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et pariatur laboriosam illum quia voluptatibus id laudantium eligendi aliquam molestias veniam unde aut consequuntur nam atque optio iste sed, dolor iure.</Typography>
                        </Grid>
                    </Grid>

                </Container>


            </section>

        </>
    )
}

export default Service2
