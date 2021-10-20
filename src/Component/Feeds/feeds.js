import React from "react";
import Card from 'react-bootstrap/Card';
import misk from '../../dummyimg/Tobisawa.Misaki.full.1809497.jpg';
import './feeds.css';

function feeds(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    return(
    <div className="midBar">
        <Card className="cardTable">
            <div className="txtpad"> Poster Name</div>
                <Card.Img className="feedsCard" variant="top" src={misk} />
            <div className="txtpad">Comment</div>
        </Card>
    </div>
    );
};

export default feeds;