import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Service2 from './Service2'

const page = () => {
  return (
    <>
      <section style={{
        marginTop: 70,
        paddingTop: 20
      }}>
        <Container>
          <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
            <Grid item md={6}>
              <Typography variant='h3'  paddingBottom={3} fontWeight={800}>We Provide Best <span style={{
                color: "orange",

              }}> Security Services </span></Typography>
              <Typography variant='h5' paddingBottom={3} textAlign={"justify"} fontSize={{md:20, sx:15}} fontWeight={500}>Lorem ipsum, dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum fugiat! Natus nemo eum voluptatem ipsa architecto consequuntur eaque minima non, soluta incidunt quo. Officia facilis iste expedita sint accusamus? Quis sint delectus voluptatibus, veritatis voluptates labore eum consectetur aut? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, velit.consectetur adipisicing elit. Ab, velit.</Typography>
              <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 20
              }}>
                <Button sx={{
                  padding: "20px",
                  borderRadius: 10
                }} variant='contained'>Ask Question</Button>
                <Button sx={{
                  padding: "20px",
                  borderRadius: "20px 6px",
                  background: "red"

                }} variant='contained'>Learn more</Button>
              </div>

            </Grid>
            <Grid item md={6}>

              <img src='./Img/file (1).png' alt='' width="900" height={"auto"} />


            </Grid>
          </Grid>     \
          <Service2/>
        </Container>
   


      </section>
    </>
  )
}

export default page
