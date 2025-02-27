"use client"
import { AppBar, Box, Button, ButtonBase, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'

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
                            cursor: "pointer",
                            gap: 15




                        }}>




                            <Typography variant='h4'  padding={2} fontFamily="fantasy" fontSize={20} fontWeight={500}>TOYOSTECH</Typography>


                            <DrawersCom />





                        </Box>

                    ) : (
                        <Container sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>


                            <Typography variant='h4' padding={2} fontFamily="fantasy" fontWeight={500}>TOYOSTECH</Typography>




                            <Tabs sx={{
                                marginLeft: "auto",



                            }} value={value} indicatorColor='secondary' textColor='inherit' onChange={(e, val) => setvalue(val)}>
                                {navdate.map((link, index) => (


                                    <Tab marginLeft={50} href={link.path} label={link.title} key={index} />






                                ))}

                            </Tabs>

                            <ButtonBase sx={{
                                marginLeft: "auto"
                            }}>
                                <Link to="/contact">
                                    <Button sx={{


                                    }} variant="contained">Login</Button>
                                </Link>


                            </ButtonBase>


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