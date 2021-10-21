import {Card} from 'react-bootstrap';
import './post.css';

export default function Post(){
    return(
        <div className="postMarg">
            <Card className="cardPost">
            <div>
                <input className="postInpt" placeholder="What's in your mind ?"/>
            </div>
            <div >
                <button className="postBtn" type="button">Post</button>
            </div>
            </Card>
            <br/>
        </div>
    );
}