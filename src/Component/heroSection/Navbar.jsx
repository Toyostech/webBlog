"use client"
import React, { useState } from 'react'
import { navdate } from '../ReuseableUI/Data'
import Link from 'next/link'
import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import DrawerCom from '../drawer/DrawerCom'


const Navbar = () => {
    const [value, setvalue] = useState()
    const isMatch = useMediaQuery(useTheme().breakpoints.down("md"))
    console.log(isMatch)
    // const HandleChange = (e, val)=>{
    //     setvalue()

    // }




    return (
        <>
            <AppBar sx={{
                background: "#063970"
            }}>
                {isMatch ? (
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer"

                    }}>

                        <Typography variant='h4' padding={2} fontFamily="fantasy" fontWeight={500}>TOYOSTECH</Typography>
                        <DrawerCom />
                    </Box>
                ) : (<Toolbar>
  
                    <Container sx={{
                        display: "flex",
                        alignItems: "center"



                    }}>



                        <div
                        >
                            <Typography variant='h5' fontFamily="fantasy" fontWeight={500}>TOYOSTECH</Typography>
                        </div>


                        <Tabs sx={{
                            marginLeft: "auto"
                        }} value={1} indicatorColor='secondary' textColor='inherit'  >
                            {navdate.map((link, index) => (
                                <Link href={link.path} key={index}>
                                    <Tab label={link.title} />
                                </Link>
                            ))}

                        </Tabs>
                        <Button sx={{
                            marginLeft: "auto"

                        }} variant="contained">Login</Button>
                        <Button sx={{
                            marginLeft: "20px"
                        }} variant="contained">SignUp</Button>




                    </Container>


                </Toolbar>)}

            </AppBar>







        </>
    )
}

export default Navbar
