import React, { useState } from 'react'
import { Media, Card, CardColumns, Form, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import {FaComment} from 'react-icons/fa'

function Comments(props) {
    const [comments, setComments] = useState([{nickname: 'user1', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputatz', timestamp:1},{nickname: 'username', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputatz', timestamp:2},{nickname: 'user3', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputatz', timestamp:3},{nickname: 'user4', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputatz', timestamp:4}])
    const [commentField, setCommentField] = useState({nickname:'',text:'',timestamp:''});
  
    const addComment = () => {
        if(commentField.nickname !== "" && commentField.text !== "")
        setComments([commentField].concat(comments))
    }

    const updateCommentFieldNickname = (input) => {
        setCommentField({nickname: input.target.value, text: commentField.text, timestamp: Date.now()})
    }

    const updateCommentFieldText = (input) => {
        setCommentField({nickname: commentField.nickname , text: input.target.value, timestamp: Date.now()})
    }

    return(
    <ScrollableAnchor id={'comments'}>
    <div className="page">
        <Container>
            <Row>
        <Header text="Kommentoi" borderColor="#000000"></Header>
        </Row>
        <Row>
            <h5>Osallistu keskusteluun #viherpesu</h5>
        </Row>
        <Row>
            <Col>
            <div  className="hideScroll"style={{overflow:"scroll", maxHeight: "40vh"}}>
                {comments.map( (x ,y) => <Card className="p-3 m-2 shadow-sm" key={x.nickname + x.timestamp + y}>
                                        <Media>
                                        <Media.Body>
                                            <h5>{x.nickname}</h5>
                                            <p>
                                                {x.text}
                                            </p>
                                        </Media.Body>
                                    </Media>
                                    </Card>)}
            </div>            
            <br />
            <Form>
            <Row>
                <Col>
                <Form.Control type="text" placeholder="Nickname" className="me-sm-2 shadow-sm" onChange={ (x) => updateCommentFieldNickname(x)}/>
                </Col>
                <Col xs={3}>
                <Button variant="outline-success" className="me-sm-2 shadow-sm" onClick={() => addComment()}><FaComment/></Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
              <Form.Control type="text" placeholder="Text" maxLength="140" as="textarea" className="shadow-sm" onChange={ (x) => updateCommentFieldText(x)}/>
              </Col>
              </Row>
        </Form>
                </Col>
                <Col className="d-none d-sm-none d-md-none d-lg-block">
                    twittahh
                </Col>
        </Row>
        </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default Comments