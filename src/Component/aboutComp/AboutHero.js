import { Container, Typography } from '@mui/material'
import React from 'react'

const AboutHero = () => {
  return (
    <>
      <section style={{
        background: "url(/img/box3.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repect",
        backgroundSize: "cover",
        width: "100%",
        height: "80vh",
      }}>
        <Container>
         
          <Typography variant='h4'paddingTop={{md:30, xs: 20}} sx={{
            textAlign:"left" ,
            justifyContent: "center",
            
          
            color: "#fff"

          }} textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
            About Us
          </Typography>
          <Typography variant='h2' sx={{
            textAlign:"left" ,
            justifyContent: "center",
            
            color: "#fff"

          }} >
            About Us - Who We Are?
          </Typography>
        </Container>

      </section>

    </>
  )
}

export default AboutHero