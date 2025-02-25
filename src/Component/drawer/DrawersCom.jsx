import { Drawer, IconButton, Tab, Tabs, Typography } from '@mui/material'

import React, { useState } from 'react'
import { navdate } from '../ReuseableUI/Data'
import { Link } from 'react-router-dom'







const DrawersCom = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <IconButton onClick={() => (setOpen(true))} style={{
                ml: "auto"
            }}>
                <img src="/img/menu.png" width={50} height={50} alt=''>
                </img>
            </IconButton>
            <Drawer PaperProps={{
                sx: {
                    backgroundColor: "#512da4",
                    padding: 3
                }
            }} open={open} onClose={() => setOpen(false)}>
                <Tabs onClose={() => setOpen(false)} textColor='Primary' sx={{
                    fontSize: "5rem"
                }} indicatorColor='secondary'  >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#fff",
                    
                        fontWeight: 900,
                        padding: "20px"
                    }}>
                        {navdate.map((link, index) => (
                            <Tab  onClose={() => setOpen(false)} key={index} href={link.path} label={link.title} />




                        ))}
                    </div>


                </Tabs>

                
       
          
            </Drawer>
        </>
    )
}

export default DrawersCom