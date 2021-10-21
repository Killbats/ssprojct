import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import misk from '../../dummyimg/2559.jpg';
import Post from "../Post/Post";
import './feeds.css';
import axios from "axios";

class Feeds extends Component {
    state = { user: [], comment : [] };

    async componentDidMount(){
        let data1 = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        let data2 = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        
        console.log(data1);
        this.setState({user : data1.data, comment : data2.data})
    }

    render(){
        return(
        
        <div className="midBar">
            <Post/>
            <Card className="cardTable">
{/*                 
            {this.state.user.map && this.state.comment.map(users,comments => (<div>{users.title} {comments.name}</div>)
                )} */}
                <div className="txtpad">{this.state.user.title}</div>
                <a href={misk}>
                    <Card.Img className="feedsCard" variant="top" src={misk}/>
                <div className="txtpad">{this.state.comment.name}</div>
                </a>
            </Card>
        
        </div>
        );
    }
}

export default Feeds;