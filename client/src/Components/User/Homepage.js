import Header from "../Header/Header"
import Posts from "../Posts/posts"
import startPost from "../Posts/startPost";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import StartPost from "../Posts/startPost";



const Homepage = () =>{

    const [content,setContent] = useState('')

    const onValueChange = (e) => {
        setContent(e.target.value)
        console.log("content" + content)
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
        console.log("content" + content)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createPost()
    }

    const createPost = () => {
        const accessToken = sessionStorage.getItem('accessToken')
        console.log("accessToken : ", accessToken)

        axios.post('http://localhost:5000/posts/createPost',{
            content : content
        }, {
            headers :{
                Authorization: `Bearer ${accessToken}`
            },
            
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((error) =>{
            console.log("cannot create post : " + error)
        })

    }
    return(
        <>
            <Header/>
                <Container className="align-items-center" style={{width:"80%", backgroundColor:'#e6e6e6'}}>
                    <Row>
                        <Col className="bg-dark" md={3}>

                        </Col>

                        <Col style={{marginLeft:"10px", marginRight:"10px"}}  md={6}>
                            {/* <TextField 
                                name="content"
                                label="Content" 
                                multiline   // Enable multiline input
                                rows={4}    // Number of visible rows
                                variant="outlined" 
                                onChange={(e)=>(onValueChange(e))}
                            />
                            <button onClick={()=>(createPost())}>Create post</button> */}
                            {/* <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="postContent">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Start a post..."
                                        value={content}
                                        onChange={handleContentChange}
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between">
                                <div>
                                  
                                </div>

                                <Button type="submit">Post</Button>
                                </div>
                            </Form> */}
                            <StartPost/>
                            
                            <Posts/>
                        </Col>

                        <Col className="bg-dark">

                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default Homepage