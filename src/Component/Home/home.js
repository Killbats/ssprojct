import '../../CSS/HeaderApp.css';
import Sidebar from '../Sidebar/sidebar';
import Feeds from '../Feeds/feeds';
import Rightbar from '../Rightbar/Rightbar';
import './home.css';

export default function Home(){
    return(
        <div className="layoutSetting">
            
        <div className="layotContainer">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
        </div>
        </div>
    )
}