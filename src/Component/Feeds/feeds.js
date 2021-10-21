import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import worry from '../../dummyimg/worry.png';
import Post from "../Post/Post";
import './feeds.css';
import axios from "axios";

class Feeds extends Component {

    state = { user: [], comment : [], photo:[] };

    async componentDidMount(){
        let data1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        let data2 = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        let data3 = await axios.get('https://jsonplaceholder.typicode.com/photos/1')
        
        console.log(data1);
        this.setState({comment : data1.data, user : data2.data, photo : data3.data})
    }

    //have to combine data1 and data2 to use map on displaying data

    render(){
        return(
        
        <div className="midBar">
            <Post/>
            <Card className="cardTable">
                {/* working on loop single data */}
                {/*{this.state.user.map && this.state.comment.map(users,comments => (<div>{users.title} {comments.name}</div>))} */}
                <div className="imguser">
                <img src={worry} className="userImg"/>
                <div className="txtpad">{this.state.user.name}</div> 
                </div>
                <div className="commentUser">{this.state.comment.body}</div>
                <a href={this.state.photo.url}>
                    <Card.Img className="feedsCard" variant="top" src={this.state.photo.url}/>
                </a>
                <div className="flexLCS">
                    <div className="flexl">Like</div>
                    <div className="flexc">Comment</div>
                    <div className="flexs">Share</div>
                </div>
            </Card>

            <Card className="cardTable">
                {/* working on loop single data */}
                {/*{this.state.user.map && this.state.comment.map(users,comments => (<div>{users.title} {comments.name}</div>))} */}
                <div className="imguser">
                <img src={worry} className="userImg"/>
                <div className="txtpad">{this.state.user.name}</div> 
                </div>
                <div className="commentUser">{this.state.comment.body}</div>
                <a href={this.state.photo.url}>
                    <Card.Img className="feedsCard" variant="top" src={this.state.photo.url}/>
                </a>
                <div className="flexLCS">
                    <div className="flexl">Like</div>
                    <div className="flexc">Comment</div>
                    <div className="flexs">Share</div>
                </div>
            </Card>
        
        </div>
        );
    }
}

export default Feeds;