import { Box, Button, Card, CardContent, Container,  Typography } from '@mui/material'

import React, { useState } from 'react'

const Todo_List = () => {
    const [tasks, settasks] = useState([])
    const [newtask, setnewtask] = useState("")

    const HandleChange = (event) => {
        setnewtask(event.target.value)


    }
    function Addtask() {
        if (newtask.trim() !== "") {
            settasks(prev => [...prev, newtask])
            setnewtask("")
        }


    }
    const DeleteTask = (index) => {
        const updatedtask = tasks.filter((_, i) => i !== index)
        settasks(updatedtask)

    }
    function Moveup(index) {
        if (index > 0) {
            const updatedtask = [...tasks]; // Copy the tasks array

            // Swap the elements correctly
            [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];

            settasks(updatedtask); // Update state with new array
        }


    }

    function MoveDown(index) {
        if (index < tasks.length - 1) {
            const updatedtask = [...tasks]; // Copy the tasks array

            // Swap the elements correctly
            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];

            settasks(updatedtask); // Update state with new array
        }

    }

    return (
        <>
            <section>
                <Container>
                    <Card>

                        <CardContent sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>
                            <div>
                                <Typography sx={{
                                    fontSize: "4rem",
                                    fontWeight: "bold"
                                }}>TODO LIST  </Typography>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "1rem"

                            }}>
                                <input variant='outlined'
                                    type='text'
                                    placeholder='Enter todo list'
                                    value={newtask}
                                    onChange={HandleChange}
                                    name=""

                                    style={{
                                        fontSize: "1.6rem",
                                        padding: "10px",
                                        border: "2px solid #fff",
                                        borderRadius: "5px",
                                        color: "gray "


                                    }}
                                />
                                <Button variant='contained' sx={{
                                    fontSize: "1.7rem ",
                                    fontWeight: "bold",
                                    padding: "5px 20px",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 5,
                                    cursor: "pointer",
                                    background: "rgba(125 100%  54%)",
                                    ":hover": {
                                        background: "rgba(125 100%  44%)",
                                    }
                                }} onClick={Addtask}>Add</Button>

                            </div>



                            <Box>
                                {tasks.map((listtodo, index) => (
                                    <li key={index} style={{
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        padding: 5,
                                        background: "#fff",
                                        marginBottom: 10,
                                        border: "3px solid #000",
                                        borderRadius: "10px",
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <div style={{
                                            flex: 1,
                                            textTransform: "capitalize"
                                        }}>
                                            {listtodo}
                                        </div>
                                   
                                        <div style={{
                                            display: "flex",
                                            gap: 10
                                        }}>
                                            <Button onClick={() => DeleteTask(index)} sx={{
                                                fontSize: "1.2rem ",
                                                fontWeight: "bold",
                                               
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: 5,
                                                cursor: "pointer",
                                                background: "red",
                                                padding: "8px 12px",
                                                marginLeft: "10px",

                                                transition: "0.5s ease",
                                                ":hover": {
                                                    background: "rgba(15 100%  44%)",
                                                }
                                            }} >Delete</Button>
                                            <Button onClick={() => Moveup(index)} sx={{
                                                fontSize: "1.2rem ",
                                                fontWeight: "bold",
                                                padding: "5px 20px",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: 5,
                                                cursor: "pointer",
                                                background: "blue",
                                                ":hover": {
                                                    background: "rgba(125 100%  44%)",
                                                }
                                            }}>Moveup</Button>
                                            <Button onClick={() => MoveDown(index)} sx={{
                                                fontSize: "1.2rem ",
                                                fontWeight: "bold",
                                                padding: "5px 20px",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: 5,
                                                cursor: "pointer",
                                                background: "orange",
                                                transition: "0.5s ease",
                                                ":hover": {
                                                    background: "rgba(125 100%  44%)",
                                                }
                                            }}>MoveDown</Button>
                                        </div>



                                    </li>
                                ))}

                            </Box>

                        </CardContent>
                    </Card>
                </Container>
            </section>

        </>
    )
}

export default Todo_List
