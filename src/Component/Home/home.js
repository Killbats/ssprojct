import Sidebar from '../Leftbar/Sidebar';
import Feeds from '../Feeds/Feeds';
import Rightbar from '../Rightbar/Rightbar';
import Topbar from '../topbar/Topbar';
import './home.css';

export default function Home(){
    return(
        <div className="layoutSetting">
            <Topbar/>
                <div className="layotContainer">
                    <Sidebar/>
                    <Feeds/>
                    <Rightbar/>
                </div>
        </div>
    )
}