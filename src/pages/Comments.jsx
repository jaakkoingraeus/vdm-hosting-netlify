import React, { useState } from 'react'
import { Media, Card, Form, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor
import {FaComment, FaThumbsUp} from 'react-icons/fa'

function Comments(props) {
    const [comments, setComments] = useState([{nickname: 'Jaahas', text:'No jo on. Törkeää tällainen kuluttajan silmään sahaaminen. Pitänee olla varovaisempi.', timestamp:1, likes:476, liked: false},{nickname: 'conscious keijo', text:'Kannatan kyllä kirpputorien käyttöä ja kierrätystä. Uusia vaatteita on ihan turha ostaa.', timestamp:2, likes:542, liked: false},{nickname: 'Aapelinen', text:'Omat vaatteet on henkkamaukasta ja tulee varmaan tulevaisuudessakin olemaan. Vaatteet saa sieltä niin kovin helposti.', timestamp:3, likes: 100, liked: false},{nickname: 'Haapsburgeri', text:'Pistää vihaksi tällainen kuluttajan kiusaaminen. Vastuullinen eläminen on jo muutenkin aivan liian hankalaa ja sitten vielä tällaista.', timestamp:4, likes: 342, liked: false}])
    const [commentField, setCommentField] = useState({nickname:'',text:'',timestamp:'',likes: 0, liked: false});
  
    const addComment = () => {
        if(commentField.nickname !== "" && commentField.text !== "")
        setComments([commentField].concat(comments))
    }

    const updateCommentFieldNickname = (input) => {
        setCommentField({nickname: input.target.value, text: commentField.text, timestamp: Date.now(), likes:commentField.likes})
    }

    const updateCommentFieldText = (input) => {
        setCommentField({nickname: commentField.nickname , text: input.target.value, timestamp: Date.now(), likes: commentField.likes})
    }

    const likeComment = (target) => {
        const plusMinus = target.liked ? -1 : 1

        setComments(comments.map( (x)=> {
            if(x.nickname === target.nickname && x.text === target.text && x.timestamp === target.timestamp && x.likes === target.likes) 
                return {nickname:x.nickname,text:x.text,timestamp:x.timestamp,likes: x.likes + plusMinus, liked: !target.liked} 
                else 
                return {nickname:x.nickname,text:x.text,timestamp:x.timestamp,likes: x.likes, liked: x.liked} }))
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
            <div  className="hideScroll"style={{overflow:"scroll", maxHeight: "70vh"}}>
                {comments.map( (x ,y) => <Card className="p-3 m-2 shadow-sm" key={x.nickname + x.timestamp + y}>
                                        <Media>
                                        <Media.Body>
                                            <h5>{x.nickname}</h5>
                                            <p>
                                                {x.text}
                                            </p>
                                            <Button onClick={() => likeComment(x)}  variant={x.liked ? "success" : "primary"}><FaThumbsUp/></Button> {x.likes}
                                        </Media.Body>
                                    </Media>
                                    </Card>)}
            </div>            
            <br />
            <Form>
            <Row>
                <Col>
                <Form.Control type="text" placeholder="Nimimerkki" className="me-sm-2 shadow-sm" onChange={ (x) => updateCommentFieldNickname(x)}/>
                </Col>
                <Col xs={3}>
                <Button variant="outline-success" className="me-sm-2 shadow-sm" onClick={() => addComment()}><FaComment/></Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
              <Form.Control type="text" placeholder="Kommentti" maxLength="140" as="textarea" className="shadow-sm" onChange={ (x) => updateCommentFieldText(x)}/>
              </Col>
              </Row>
        </Form>
                </Col>
                <Col className="d-none d-sm-none d-md-none d-lg-block">
                <a className="twitter-timeline" data-width="500" data-height="700" href="https://twitter.com/JaakkoKulta3?ref_src=twsrc%5Etfw">Tweets by JaakkoKulta3</a>
                </Col>
        </Row>
        </Container>
    </div>
    </ScrollableAnchor>
    )
}
export default Comments