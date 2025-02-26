import { Container, Grid, Typography } from '@mui/material'

import React from 'react'
import Subheader from '../ReuseableUI/subheader/Subheader'
import images from '../pic/girl3.jpg'
import twitter from '../pic/twitter.png'
import facebook from '../pic/Facebook.png'

const Description = () => {
  return (
    <section style={{
      padding: "30px 0px 30px",
     
    }}>
      <Container>
        <Grid container spacing={5} alignItems='center' justifyContent="center">
          <Grid item md={6}>
            <img src={images} width={400} height={500} alt="" />
          </Grid>
          <Grid item md={6}>

            <Subheader title="ABOUT US" paddingTop={30}

              headerSpan="Online course" Hander="We provide the best" textAlign="left" />
            <Typography variant='h6' fontSize={{md:20, xs: 16}}  paddingBottom={2}> We help you to create innovaions and transform into reality.
              The innovation is often identified
              with new technology.
              As you can learn from our
              special online educaion coursess
              if you want.
            </Typography>
            <Grid container spacing={5} alignItems="center" marginBottom={5}>
              <Grid item sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                

               

              }}>
                <img src={twitter} width={50} height={50} alt='' />
                <Typography fontWeight={600}>Enhance your skill</Typography>
              </Grid>
              <Grid item sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

              }}>
                <img src={facebook} width={50} height={50} alt='' />
                <Typography fontWeight={600}>Start learning</Typography>
              </Grid>
            </Grid>


          </Grid>
        </Grid>



      </Container>
    </section>
  )
}

export default Description
