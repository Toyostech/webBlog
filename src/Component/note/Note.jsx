import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import data from '../../manifest.json'

const Note = () => {
    const [notes, setNotes] = useState(null)
    // const [enterdate, setenterdate] = useState("")

  
    const getDate = () => {
        fetch(data)
        .then((res) => res.json())
        .then((json)=> setNotes(json))
        .catch((error) => console.error("error occure", error))
    }
    // const datas= data
    // console.log(datas)

    useEffect(() => {
        getDate()
        // fetch('datafech/datafech.json')
        // .then(res => res.json())
        // .then(data => setNotes(data))

    },[])

    return (
        <Container style={{
            background: "#e2d4ff",
            justifyContent: "center",

            textAlign: "center",
            color: "#fff"
        }}>
            <Box sx={{

                justifyContent: "center",

                AlignItem: "center",
                padding: 5






            }}>
                <div style={{
                    borderRadius: 30,
                    background: "linear-gradient(45deg, #2f4680, #500ae4)",
                    padding: "40px",
                    width: 600,
                    height: "auto",
                    placeSelf: "center"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20
                    }}>
                        
                        <div style={{
                            background: "#fff",
                            padding: 5,
                            borderRadius: "50px",
                            textAlign: "center"
                        }}>
                            <img src="/img/icon1.png" width={50} alt="" />

                        </div>

                    </div>
                    <div style={{

                    }}>
                        <img src='/img/map1.png' alt='map' width={100} />
                        <div>
                            <p style={{
                                color: "#fff",
                                lineHeight: 1,
                                fontSize: 80,

                                fontWeight: 500
                            }}>16</p>
                            <p style={{
                                color: "#fff",
                                fontSize: "60px",
                                fontWeight: 800
                            }}>
                                London
                            </p>
                        </div>

                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 5
                        }}>
                            <img src="/Img/mail_icon.png" width={50} height={"auto"} alt="" />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontWeight: 500,

                            }}>
                                <h4>67%</h4>
                                <h4>Humidity</h4>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 5
                        }}>
                            <img src="/Img/call_icon.png" width={50} height={50} alt="" />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontWeight: 500,

                            }}>
                                <p>2.06 km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>

                    </div>
                </div>





            </Box>



        </Container>
    )
}

export default Note
