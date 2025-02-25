"use client"
import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'

import React from 'react'
import { navdate } from '../ReuseableUI/Data'
import { useState } from 'react'
import DrawersCom from '../drawer/DrawersCom'
import { Link, Links } from 'react-router-dom'



const NavBar = () => {
    const [value, setvalue] = useState()
    const isMatch = useMediaQuery(useTheme().breakpoints.down("md"))

    return (
        <>
            <AppBar>
                <Toolbar>
                    {isMatch ? (
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",

                            alignItems: "center",
                            cursor: "pointer"

                        }}>
                            <div style={{
                                marginLeft: 'auto'
                            }}>
                              
                                    <Typography variant='h4' padding={2} fontFamily="fantasy" fontWeight={500}>TOYOSTECH</Typography>

                                

                            </div>
                            <div>
                                <DrawersCom />

                            </div>



                        </Box>

                    ) : (
                        <Container sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>

                            <Link to="/">
                                <Typography variant='h4' padding={2} fontFamily="fantasy" fontWeight={500}>TOYOSTECH</Typography>

                            </Link>


                            <Tabs sx={{
                                marginLeft: "auto",



                            }} value={value} indicatorColor='secondary' textColor='inherit' onChange={(e, val) => setvalue(val)}>
                                {navdate.map((link, index) => (


                                    <Tab marginLeft={50} href={link.path} label={link.title} key={index} />






                                ))}

                            </Tabs>

                            <Button sx={{
                                marginLeft: "auto"

                            }} variant="contained">Login</Button>
                            <Button sx={{
                                marginLeft: "20px"
                            }} variant="contained">SignUp</Button>

                        </Container>


                    )}



                </Toolbar>
            </AppBar>

        </>
    )
}

export default NavBar