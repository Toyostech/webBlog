import { Grid, Typography } from '@mui/material'
import React from 'react'
import { aboutdata } from '../ReuseableUI/Data'

const Cards = () => {
    return (
        <>
            <Grid container spacing={2}paddingTop={15} paddingBottom={15} >
                {aboutdata.map((items, index) => (
                    <Grid item key={index} md={3} xs={12}  justifyContent={"center"} textAlign={"center"} sx={{
                        boxShadow: "5px 3px 10px "
                    }}>
                        <div>
                            <div style={{
                                background: "red",
                                padding: 20,
                                borderRadius: "0px 70px 0px 70px"
                            }}>
                                <img src={items.img} alt="" width={100} height={100} />

                            </div>
                            <div>
                                <Typography variant='h3' padding={3} fontWeight={700} fontSize={20}>{items.lable}</Typography>
                                <Typography paddingBottom={5} sx={{
                                    textWrap: "wrap"
                                }} align='left'>{items.text}</Typography>
                            </div>


                        </div>

                    </Grid>

                ))}



            </Grid>

        </>
    )
}

export default Cards
