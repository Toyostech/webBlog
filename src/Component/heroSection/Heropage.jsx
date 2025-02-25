"use client"
import React from 'react'


import { Typography } from '@mui/material'






const images = {

}



const Heropage = () => {
    return (
        <>
            <section style={{
                backgroundImage: "url(/image/abb.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "80vh",
                borderRadius: "0px 60px"


            }}>
                <div style={{
                    padding: "0px 40px",
                }}>
                    <div style={{
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "20px",
                        background: "red",
                    }}>

                    </div>



                    <div>
                        <Typography variant='h1' style={{
                            justifyContent: "center",

                            fontSize: "60px",
                            fontWeight: 800,
                            textAlign: "center",
                            marginTop: 70,
                            paddingTop: 200,
                            color: "white"
                        }}>

                            This is the way to learn online class

                        </Typography>


                    </div>





                </div>









            </section >


        </>
    )
}

export default Heropage
