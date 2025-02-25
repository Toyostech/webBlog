import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'


const Contact = () => {
  const [message, setMessage] = useState({
    FirstName: "",
    SurName: "",
    PhoneLine: "",
    Address: "",
    Email: "",
    Password: "",



  })
  const [isSignUp, setisSignUp] = useState(false)
  const MessageHandler = (e) => {

    setMessage((preState) => ({
      ...preState,
      [e.target.name]: e.target.value

    }))

  }
  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(message)

  }
  const Submitt = () => {
    setMessage(
      {
        FirstName: "",
        SurName: "",
        PhoneLine: "",
        Address: "",
        Email: "",
        Password: "",
      }

    )

  }



  return (
    <>
      <section style={{
        background: "url(/img/nature.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "60px 0px "

      }}>
        <Container>

          <form onSubmit={HandleSubmit} >
            
            <Box

              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"auto"}
              marginTop={5}
              padding={5}


              borderRadius={5}
              boxShadow={'5px 5px 10px #ccc'}
              sx={{
                background: "#fff",

                ":hover": {
                  boxShadow: "10px 10px 20px #000"
                }
              }}

            >
              <Typography variant='h2'>{isSignUp ? "SIGNUP" : "LOGIN"}</Typography>
              {isSignUp && (
                <TextField
                  fullWidth



                  sx={{
                    "& .MuiStandardInput-root": {
                      borderRadius: "50px"
                    }
                  }}
                  margin='normal'
                  onChange={MessageHandler}
                  name='FirstName'
                  value={message.FirstName}
                  type='text'
                  required
                  placeholder='Enter your FirstName' />
              )}
              {isSignUp && (

                <TextField
                  fullWidth
                  margin='normal'

                  name='SurName'
                  value={message.SurName}
                  placeholder='Enter surname'
                  onChange={MessageHandler}
                  type='text'

                />
              )}

              {isSignUp && (
                <TextField
                  fullWidth
                  margin='normal'
                  name='PhoneLine'
                  value={message.PhoneLine}
                  type='number'
                  placeholder='Enter phone line'
                  onChange={MessageHandler} />
              )}





              <TextField
                fullWidth
                margin='normal'
                onChange={MessageHandler}
                name='Email'
                value={message.Email}
                type='text'
                placeholder='Enter address'
              />




              <TextField
                fullWidth
                margin='normal'
                onChange={MessageHandler}
                name='Password'
                value={message.Password}

                type='Password'
                placeholder='Enter password'
                sx={{
                  borderRadius: "20px",
                  outline: "none",

                }}
              />


              <Button onClick={Submitt}
                variant='contained' type='submit' color='warning'>Submit
              </Button>

              <Button variant='outlined' onClick={() => (
                setisSignUp(!isSignUp)
              )} sx={{
                marginTop: 3,
                borderRadius: 3

              }}>onChange to {isSignUp ? "LOGIN" : "SIGNUP"}</Button>
            </Box>
          </form>





        </Container>


      </section>



    </>
  )
}

export default Contact