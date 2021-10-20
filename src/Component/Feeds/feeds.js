import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import misk from '../../dummyimg/2559.jpg';
import Post from "../Post/post";
import './feeds.css';

function Feeds(){

    const [state, setData] = useState([]);

    const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setData(json);
        });
};
    useData(() =>{
        api.get();
    },[])

    return(

    <div className="midBar">
        <Post/>
        <Card className="cardTable">
            <div className="txtpad"> Poster Name</div>
            <a href={misk}>
                <Card.Img className="feedsCard" variant="top" src={misk}/>
            <div className="txtpad">Comment</div>
            </a>
        </Card>
        {data.map((item) => (<h1 key={item.id}>{item.title} </h1>))}
    </div>
    );
};

export default Feeds;