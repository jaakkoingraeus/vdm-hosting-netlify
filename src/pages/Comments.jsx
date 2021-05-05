import React, { useState } from 'react'
import { Media, Card, CardColumns, Form, FormControl, Button } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import ScrollableAnchor from 'react-scrollable-anchor' //https://www.npmjs.com/package/react-scrollable-anchor

function Comments(props) {
    const [comments, setComments] = useState([{nickname: 'user1', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},{nickname: 'user2', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},{nickname: 'username', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},{nickname: 'user3', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},{nickname: 'user4', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},{nickname: 'user5', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'}])
    const [commentField, setCommentField] = useState({nickname:'',text:''});
  
    const addComment = () => {
        if(commentField.nickname !== "" && commentField.text !== "")
        setComments([commentField].concat(comments))
    }

    const updateCommentFieldNickname = (input) => {
        setCommentField({nickname: input.target.value, text: commentField.text})
    }

    const updateCommentFieldText = (input) => {
        setCommentField({nickname: commentField.nickname , text: input.target.value})
    }

    return(
    <ScrollableAnchor id={'comments'}>
    <div className="page">
        <Header text="otsikko" borderColor="#000000"></Header>
        <CardColumns>
        {comments.slice(0,9).map( (x) => <Card className="p-3" key={x.nickname + Date.now()}>
                                <Media>
                                <Media.Body>
                                    <h5>{x.nickname}</h5>
                                    <p>
                                        {x.text}
                                    </p>
                                </Media.Body>
                               </Media>
                               </Card>)}
        </CardColumns>
        <Form inline>
              <FormControl type="text" placeholder="Nickname" className="mr-sm-2" onChange={updateCommentFieldNickname}/>
              <FormControl type="text" placeholder="Text" className="mr-sm-2" onChange={updateCommentFieldText}/>
              <Button variant="outline-success" onClick={() => addComment()}>Submit</Button>
        </Form>
    </div>
    </ScrollableAnchor>
    )
}
export default Comments