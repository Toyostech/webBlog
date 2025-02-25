import React from 'react'
import Subheader from '../ReuseableUI/subheader/Subheader'
import Box from '../box/BoxCard'
import { Container } from '@mui/material'
import BoxCard from '../box/BoxCard'

const Courses = () => {
  return (
    <>
      <section style={{
        background: "#673ad7",
        paddingTop: 30,
      


      }}>
        <Container>

          <Subheader title="Choice Your Subject" Hander="Our Specail" headerSpan="Courses" />


          <BoxCard />



        </Container>





      </section>

    </>
  )
}

export default Courses
