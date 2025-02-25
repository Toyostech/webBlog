"use client"
import { Typography } from '@mui/material'
import React from 'react'

const Subheader = ({ Hander, title, headerSpan }) => {
    return (
        <>
            <div>
                <div style={{
                    textAlign: "left",


                }}>

                    <Typography variant='h3' fontSize={{md:"20px", xs:"16px"}} fontWeight={{md:900, xs:700}} >
                        {title}

                    </Typography>


                    <Typography variant='h2' fontSize={{md:"40px", xs:"30px"}} fontWeight={{md:900, xs:700}}>
                        {Hander} <span style={{
                            color: "red"
                        }}>
                            {headerSpan}
                        </span>
                    </Typography>





                </div>


            </div>

        </>
    )
}

export default Subheader
