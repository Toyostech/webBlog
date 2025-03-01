import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Service2 = () => {
    return (
        <>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <img src="./img/uiux.png" alt="" srcset="" />
                        </Grid>
                        <Grid item md={6} justifyContent={"center"} textAlign={"center"}>
                            <Typography>

                            </Typography>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, facilis.
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quis dolore nisi laborum reprehenderit sint consequatur dolor dolores eligendi sed?
                            </Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et pariatur laboriosam illum quia voluptatibus id laudantium eligendi aliquam molestias veniam unde aut consequuntur nam atque optio iste sed, dolor iure.</Typography>
                        </Grid>
                    </Grid>

                </Container>


            </section>

        </>
    )
}

export default Service2
