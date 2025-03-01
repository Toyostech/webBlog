import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import FeedBack from '../feedback/FeedBack'
import Cards from './Cards'

const Abouts = () => {
  return (
    <section>
      <div style={{
        backgroundImage: "url(./Img/76555.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        margin: 0,
        height: "90vh"


      }}>
        <Box paddingTop={{ md: 60, xs: 50 }} sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

          padding: "0px 40px",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          width: "100%",
          height: "100%"




        }}>
          <Typography variant='h3' color='red' fontWeight={{ md: 800, xs: 700 }} fontSize={{ md: 60, xs: 40 }}>
            Collage Education
          </Typography>
          <Typography variant='h5' color='#fff' fontWeight={800} >Awesome Template get it know</Typography>
        </Box>

      </div>

      <Container>
        <div style={{
          textAlign: "center",
          paddingTop: "30px"


        }}>
          <Typography variant='h2' paddingBottom={3} fontWeight={{ md: 800, xs: 800 }} fontSize={{ xs: 30 }}>Our Featured Courses</Typography>
          <Typography variant='h5' fontSize={20} fontWeight={600}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam porro, dignissimos maiores ducimus, maxime aut illo nisi molestias explicabo quibusdam cumque, consequatur asperiores incidunt neque delectus modi? Deleniti, cumque optio.</Typography>
        </div>
        <Cards />

        <FeedBack />
      </Container>

    </section>
  )
}

export default Abouts
